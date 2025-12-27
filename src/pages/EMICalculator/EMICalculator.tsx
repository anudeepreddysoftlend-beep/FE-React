import React, { useState } from 'react';

interface EMIResult {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  monthlyBreakdown: MonthlyPayment[];
}

interface MonthlyPayment {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

const EMICalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [tenure, setTenure] = useState<string>('');
  const [tenureType, setTenureType] = useState<'months' | 'years'>('years');
  const [result, setResult] = useState<EMIResult | null>(null);
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-IN').format(Math.round(num));
  };

  const getSliderBackground = (value: string, min: number, max: number) => {
    const numeric = parseFloat(value);
    if (isNaN(numeric)) return {};

    const clamped = Math.min(Math.max(numeric, min), max);
    const percentage = ((clamped - min) * 100) / (max - min);

    return {
      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
    };
  };

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(interestRate);
    const tenureValue = parseFloat(tenure);

    if (isNaN(P) || isNaN(annualRate) || isNaN(tenureValue) || P <= 0 || annualRate <= 0 || tenureValue <= 0) {
      return;
    }

    const N = tenureType === 'years' ? tenureValue * 12 : tenureValue;
    const R = annualRate / 12 / 100;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;

    // Calculate monthly breakdown
    const monthlyBreakdown: MonthlyPayment[] = [];
    let balance = P;

    for (let month = 1; month <= N; month++) {
      const interestForMonth = balance * R;
      const principalForMonth = emi - interestForMonth;
      balance = balance - principalForMonth;

      monthlyBreakdown.push({
        month,
        emi: emi,
        principal: principalForMonth,
        interest: interestForMonth,
        balance: Math.max(0, balance),
      });
    }

    setResult({
      emi,
      totalAmount,
      totalInterest,
      monthlyBreakdown,
    });
  };

  const handleReset = () => {
    setPrincipal('');
    setInterestRate('');
    setTenure('');
    setResult(null);
    setShowBreakdown(false);
  };

  const principalPercentage = result ? ((result.totalAmount - result.totalInterest) / result.totalAmount) * 100 : 0;
  const interestPercentage = result ? (result.totalInterest / result.totalAmount) * 100 : 0;

  // Calculate donut chart values
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const interestArcLength = result ? circumference * (interestPercentage / 100) : 0;
  const principalArcLength = result ? circumference * (principalPercentage / 100) : 0;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-[2rem] p-16 lg:p-20 xl:p-[5rem_4rem] mb-12 overflow-hidden text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] text-center sm:p-12 sm:px-6 sm:rounded-2xl">
        <div className="relative z-10">
          <div className="text-7xl sm:text-6xl mb-4 block animate-bounce">🧮</div>
          <h1 className="text-5xl xl:text-7xl sm:text-4xl sm:text-[1.75rem] font-black mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">EMI Calculator</h1>
          <p className="text-xl xl:text-[1.375rem] sm:text-base text-white/95 max-w-[600px] mx-auto leading-[1.7]">Plan your loan repayment with our easy-to-use EMI calculator. Get instant calculations for your monthly installments.</p>
        </div>
        <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-16 -right-16"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-1/2 -left-12"></div>
          <div className="absolute w-40 h-40 bg-white/10 rounded-full -bottom-20 right-1/4"></div>
        </div>
      </section>

      <div className="flex flex-col gap-8 mb-16 max-w-full">
        <div className="flex gap-8 md:flex-col md:gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl p-10 lg:p-12 sm:p-6 sm:px-4 border-t-4 border-indigo-500 flex-1 min-w-0">
            <h2 className="text-3xl sm:text-2xl mb-8 text-slate-900 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Calculate Your EMI</h2>
          
          <div className="mb-6">
            <label htmlFor="principal" className="block font-semibold text-slate-900 mb-2 text-[0.95rem]">
              Loan Amount <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-600 font-semibold text-lg">₹</span>
              <input
                type="text"
                inputMode="decimal"
                id="principal"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Enter loan amount"
                className="w-full py-4 px-4 pl-10 border-2 border-slate-200 rounded-xl text-lg transition-all duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              />
            </div>
            <input
              type="range"
              min="50000"
              max="5000000"
              step="50000"
              value={principal || '0'}
              onChange={(e) => setPrincipal(e.target.value)}
              style={getSliderBackground(principal || '50000', 50000, 5000000)}
              className="w-full mt-3 h-1.5 rounded-full bg-gray-200 outline-none cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_rgba(37,99,235,0.4)] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_0_2px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="interestRate" className="block font-semibold text-slate-900 mb-2 text-[0.95rem]">
              Interest Rate (% per annum) <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                inputMode="decimal"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Enter interest rate"
                className="w-full py-4 px-4 pr-10 border-2 border-slate-200 rounded-xl text-lg transition-all duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              />
              <span className="absolute right-4 text-slate-600 font-semibold">%</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate || '0'}
              onChange={(e) => setInterestRate(e.target.value)}
              style={getSliderBackground(interestRate || '1', 1, 20)}
              className="w-full mt-3 h-1.5 rounded-full bg-gray-200 outline-none cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_rgba(37,99,235,0.4)] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_0_2px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="tenure" className="block font-semibold text-slate-900 mb-2 text-[0.95rem]">
              Loan Tenure <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="flex gap-4 md:flex-col md:gap-4">
              <input
                type="text"
                inputMode="numeric"
                id="tenure"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="Enter tenure"
                className="flex-1 py-4 px-4 border-2 border-slate-200 rounded-xl text-lg transition-all duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              />
              <div className="flex gap-0 rounded-xl overflow-hidden border-2 border-slate-200 md:w-full">
                <button
                  type="button"
                  className={`py-4 px-5 bg-white text-slate-600 font-semibold text-[0.95rem] transition-all duration-300 border-none md:flex-1 focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2 ${tenureType === 'years' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'hover:bg-slate-100'}`}
                  onClick={() => setTenureType('years')}
                >
                  Years
                </button>
                <button
                  type="button"
                  className={`py-4 px-5 bg-white text-slate-600 font-semibold text-[0.95rem] transition-all duration-300 border-none md:flex-1 focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2 ${tenureType === 'months' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'hover:bg-slate-100'}`}
                  onClick={() => setTenureType('months')}
                >
                  Months
                </button>
              </div>
            </div>
            <input
              type="range"
              min={tenureType === 'years' ? 1 : 12}
              max={tenureType === 'years' ? 30 : 360}
              step={tenureType === 'years' ? 1 : 12}
              value={tenure || '0'}
              onChange={(e) => setTenure(e.target.value)}
              style={getSliderBackground(tenure || (tenureType === 'years' ? '1' : '12'), tenureType === 'years' ? 1 : 12, tenureType === 'years' ? 30 : 360)}
              className="w-full mt-3 h-1.5 rounded-full bg-gray-200 outline-none cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_rgba(37,99,235,0.4)] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_0_2px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="flex gap-4 mt-8 md:flex-col">
            <button
              type="button"
              className="flex-[2] py-4 px-8 text-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:text-white focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2 md:flex-1"
              onClick={calculateEMI}
              disabled={!principal || !interestRate || !tenure}
            >
              Calculate EMI
            </button>
            <button
              type="button"
              className="flex-1 py-4 px-8 text-lg bg-white text-indigo-500 border-2 border-indigo-500 rounded-xl font-semibold transition-all duration-200 hover:bg-indigo-500 hover:text-white focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          </div>

          {/* Donut Chart */}
          {result && (
            <div className="bg-white rounded-2xl p-10 sm:p-6 sm:px-4 border-t-4 border-indigo-500 min-w-[350px] max-w-[400px] flex-shrink-0 md:min-w-full md:max-w-full">
              <h3 className="text-2xl mb-6 text-slate-900 text-center font-bold">Loan Breakdown</h3>
              <div className="relative w-full max-w-[280px] mx-auto mb-6 aspect-square">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="24"
                    className="transition-all duration-500"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="24"
                    strokeDasharray={`${interestArcLength} ${circumference}`}
                    strokeDashoffset={principalArcLength}
                    className="transition-all duration-500 drop-shadow-[0_2px_4px_rgba(37,99,235,0.3)]"
                    transform="rotate(-90 100 100)"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <div className="text-sm text-slate-600 font-semibold mb-1">Total</div>
                  <div className="text-2xl text-slate-900 font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{formatCurrency(result.totalAmount)}</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-gray-300 flex-shrink-0 shadow-sm"></div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-sm text-slate-600 font-medium">Principal</span>
                    <span className="text-lg text-slate-900 font-bold">{formatCurrency(parseFloat(principal))}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-blue-700 flex-shrink-0 shadow-sm"></div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-sm text-slate-600 font-medium">Interest</span>
                    <span className="text-lg text-slate-900 font-bold">{formatCurrency(result.totalInterest)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        {result && (
          <div className="animate-slideUpResults w-full">
            <div className="bg-white rounded-2xl p-10 lg:p-12 sm:p-6 sm:px-4 border-t-4 border-green-500 w-full">
              <h2 className="text-3xl sm:text-2xl mb-8 text-slate-900">Your EMI Details</h2>
              
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl text-center mb-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] sm:p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-white/90 text-base font-medium">Monthly EMI</span>
                  <span className="text-white text-5xl sm:text-4xl sm:text-[1.875rem] font-extrabold drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">{formatCurrency(result.emi)}</span>
                </div>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8 md:grid-cols-1 lg:grid-cols-3">
                <div className="flex items-center gap-4 p-5 bg-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">💰</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-slate-600 font-medium">Principal Amount</span>
                    <span className="text-xl font-bold text-slate-900">{formatCurrency(parseFloat(principal))}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">📈</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-slate-600 font-medium">Total Interest</span>
                    <span className="text-xl font-bold text-red-500">{formatCurrency(result.totalInterest)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">🏦</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-slate-600 font-medium">Total Amount Payable</span>
                    <span className="text-xl font-bold text-slate-900">{formatCurrency(result.totalAmount)}</span>
                  </div>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="my-8 p-6 bg-slate-100 rounded-2xl">
                <h3 className="text-xl mb-6 text-slate-900">Payment Breakdown</h3>
                <div className="flex h-12 rounded-xl overflow-hidden mb-6 shadow-sm md:flex-col md:h-auto">
                  <div 
                    className="flex items-center justify-center transition-all duration-500 min-w-[80px] bg-gradient-to-r from-indigo-500 to-purple-600 md:p-4 md:min-w-0"
                    style={{ width: `${principalPercentage}%` }}
                  >
                    <span className="text-white text-sm font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] whitespace-nowrap">Principal ({principalPercentage.toFixed(1)}%)</span>
                  </div>
                  <div 
                    className="flex items-center justify-center transition-all duration-500 min-w-[80px] bg-gradient-to-r from-amber-500 to-red-500 md:p-4 md:min-w-0"
                    style={{ width: `${interestPercentage}%` }}
                  >
                    <span className="text-white text-sm font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] whitespace-nowrap">Interest ({interestPercentage.toFixed(1)}%)</span>
                  </div>
                </div>
                <div className="flex gap-8 justify-center flex-wrap md:flex-col md:gap-3 md:items-start">
                  <div className="flex items-center gap-2 text-[0.95rem] text-slate-600">
                    <span className="w-4 h-4 rounded bg-gradient-to-r from-indigo-500 to-purple-600"></span>
                    <span>Principal: {formatCurrency(parseFloat(principal))}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.95rem] text-slate-600">
                    <span className="w-4 h-4 rounded bg-gradient-to-r from-amber-500 to-red-500"></span>
                    <span>Interest: {formatCurrency(result.totalInterest)}</span>
                  </div>
                </div>
              </div>

              {/* Monthly Breakdown Toggle */}
              <button
                className="w-full py-4 bg-slate-100 border-2 border-slate-200 rounded-xl text-slate-900 font-semibold text-base cursor-pointer transition-all duration-300 mt-4 hover:bg-slate-50 hover:border-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
                onClick={() => setShowBreakdown(!showBreakdown)}
              >
                {showBreakdown ? '▲ Hide' : '▼ Show'} Monthly Breakdown
              </button>

              {showBreakdown && (
                <div className="mt-6 animate-slideUpResults">
                  <div className="overflow-x-auto rounded-xl shadow-sm">
                    <table className="w-full border-collapse bg-white text-[0.95rem] sm:text-sm">
                      <thead>
                        <tr>
                          <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold whitespace-nowrap sm:p-3 sm:px-2">Month</th>
                          <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold whitespace-nowrap sm:p-3 sm:px-2">EMI</th>
                          <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold whitespace-nowrap sm:p-3 sm:px-2">Principal</th>
                          <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold whitespace-nowrap sm:p-3 sm:px-2">Interest</th>
                          <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold whitespace-nowrap sm:p-3 sm:px-2">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.monthlyBreakdown.slice(0, showBreakdown ? undefined : 12).map((payment) => (
                          <tr key={payment.month} className="hover:bg-slate-100">
                            <td className="p-4 border-b border-slate-200 text-slate-900 sm:p-3 sm:px-2">{payment.month}</td>
                            <td className="p-4 border-b border-slate-200 text-slate-900 sm:p-3 sm:px-2">₹{formatNumber(payment.emi)}</td>
                            <td className="p-4 border-b border-slate-200 text-slate-900 sm:p-3 sm:px-2">₹{formatNumber(payment.principal)}</td>
                            <td className="p-4 border-b border-slate-200 text-slate-900 sm:p-3 sm:px-2">₹{formatNumber(payment.interest)}</td>
                            <td className="p-4 border-b border-slate-200 text-slate-900 last:border-b-0 sm:p-3 sm:px-2">₹{formatNumber(payment.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      <section className="mb-12">
        <h2 className="text-center mb-8 text-3xl text-slate-900">Understanding EMI</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          <div className="text-center p-8 bg-white rounded-2xl border-t-4 border-indigo-500">
            <div className="text-4xl mb-4 block">📊</div>
            <h3 className="text-xl mb-3 text-slate-900">What is EMI?</h3>
            <p className="text-[0.95rem] text-slate-600 leading-relaxed">EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl border-t-4 border-indigo-500">
            <div className="text-4xl mb-4 block">⚡</div>
            <h3 className="text-xl mb-3 text-slate-900">Prepayment Benefits</h3>
            <p className="text-[0.95rem] text-slate-600 leading-relaxed">Making prepayments can significantly reduce your total interest and loan tenure. Even small extra payments can save you lakhs over time!</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl border-t-4 border-indigo-500">
            <div className="text-4xl mb-4 block">💡</div>
            <h3 className="text-xl mb-3 text-slate-900">Tips</h3>
            <p className="text-[0.95rem] text-slate-600 leading-relaxed">A longer tenure means lower EMI but higher total interest. Compare different scenarios to find the best option for you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMICalculator;


