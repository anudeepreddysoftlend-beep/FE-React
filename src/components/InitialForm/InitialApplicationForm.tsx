import React, { useState, useCallback } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  firstName: string;
  secondName: string;
  lastName: string;
  // panNumber: string;
  // aadharNumber: string;
  netTakeHomeSalary: string;
  dob: string;
  contactNumber: string;
  email: string;
  loanAmount: string;
  loanType: string;
  termsAccepted: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const MIN_LOAN = 10000;
const MAX_LOAN = 5000000;

const InitialApplicationForm: React.FC<{ onSuccess?: (data: FormData) => void }> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    secondName: '',
    lastName: '',
    // panNumber: '',
    // aadharNumber: '',
    netTakeHomeSalary: '',
    dob: '',
    contactNumber: '',
    email: '',
    loanAmount: String(MIN_LOAN),
    loanType: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatCurrency = (value: string): string => {
    const numValue = Number(value);
    if (isNaN(numValue)) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(numValue);
  };

  const sliderPercentage = ((Number(formData.loanAmount) - MIN_LOAN) / (MAX_LOAN - MIN_LOAN)) * 100;

  const validateFormData = (data: FormData): FormErrors => {
    const e: FormErrors = {};

    // First Name
    if (!data.firstName.trim()) e.firstName = 'First name is required';
    else if (data.firstName.trim().length < 4)
      e.firstName = 'First name must be at least 4 characters';

    // Last Name
    if (!data.lastName.trim()) e.lastName = 'Last name is required';
    else if (data.lastName.trim().length < 4)
      e.lastName = 'Last name must be at least 4 characters';

    // Loan Amount
    if (data.loanAmount === '' || data.loanAmount == null) {
      e.loanAmount = 'Loan amount is required';
    } else {
      const loanNum = Number(data.loanAmount);

      if (isNaN(loanNum)) {
        e.loanAmount = 'Loan amount must be a valid number';
      } else if (loanNum < MIN_LOAN || loanNum > MAX_LOAN) {
        e.loanAmount = `Loan amount must be between ${MIN_LOAN} and ${MAX_LOAN}`;
      } else if (loanNum % 1000 !== 0) {
        e.loanAmount = 'Amount must be in multiples of ₹1,000';
      }
    }


    // DOB
    if (!data.dob) {
      e.dob = 'Date of birth is required';
    } else {
      const dobDate = new Date(data.dob);
      const today = new Date();

      // Calculate 18 years ago from today
      const minAdultDate = new Date();
      minAdultDate.setFullYear(today.getFullYear() - 18);

      if (dobDate > minAdultDate) {
        e.dob = 'You must be at least 18 years old';
      }
    }


    // // PAN
    // if (!data.panNumber) {
    //   e.panNumber = 'PAN Number is required';
    // } else {
    //   // Correct PAN format (ABCDE1234F) with 4th letter allowed P or B
    //   const panRegex = /^[A-Z]{3}[PB][A-Z][0-9]{4}[A-Z]$/;

    //   if (!panRegex.test(data.panNumber)) {
    //     e.panNumber =
    //       'PAN must be in format ABCDE1234F (5 letters, 4 digits, 1 letter) and 4th letter must be P or B';
    //   }
    // }

    // // Aadhar
    // if (!data.aadharNumber) {
    //   e.aadharNumber = 'Last 4 digits of Aadhaar are required';
    // } else if (!/^\d{4}$/.test(data.aadharNumber)) {
    //   e.aadharNumber = 'Aadhaar must be exactly 4 digits';
    // }

    // Contact
    if (!data.contactNumber) e.contactNumber = 'Contact number is required';
    else if (!/^\d{10}$/.test(data.contactNumber)) e.contactNumber = 'Contact must be 10 digits';

    // Email
    if (!data.email) {
      e.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
      const allowedDomains = [
        'gmail.com',
        'outlook.com',
        'yahoo.com',
        'hotmail.com',
        'icloud.com',
        'live.com',
        'msn.com'
      ];

      if (!emailRegex.test(data.email)) {
        e.email = 'Enter valid email format';
      } else {
        const domain = data.email.split('@')[1];
        if (!allowedDomains.includes(domain.toLowerCase())) {
          e.email = 'Email domain not allowed';
        }
      }
    }

    // Salary
    if (data.netTakeHomeSalary === '' || data.netTakeHomeSalary == null) {
      e.netTakeHomeSalary = 'Net salary is required';
    } else {
      const salary = Number(data.netTakeHomeSalary);
      if (isNaN(salary)) e.netTakeHomeSalary = 'Salary must be a number';
      else if (salary < 0) e.netTakeHomeSalary = 'Salary cannot be negative';
    }

    // Loan Type
    if (!data.loanType) e.loanType = 'Please select loan type';

    // Terms and Conditions
    if (!data.termsAccepted) {
      e.termsAccepted = 'You must accept the Terms and Conditions and Privacy Policy';
    }

    return e;
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    const newValue = name === 'panNumber' ? value.toUpperCase() : value;
    const finalValue = type === 'checkbox' ? checked : newValue;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    // Clear error while typing
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (onSuccess) onSuccess(formData);
      alert('Form Submitted Successfully!');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-8 sm:px-2">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-6 md:p-6 shadow-lg mb-8 animate-fadeInForm" noValidate>
        {/* Personal & Contact Information Section */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-2xl md:text-2xl mb-8 pb-4 border-b-[3px] border-indigo-500 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
            Personal & Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 md:gap-4">
            <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
              <label htmlFor="loanAmount" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Loan Amount Required <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="flex flex-col gap-4">
                <div className="relative w-full py-4">
                  <input
                    type="range"
                    id="loanAmount"
                    name="loanAmount"
                    min={MIN_LOAN}
                    max={MAX_LOAN}
                    step={10000}
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className={`w-full h-2 rounded-md bg-transparent outline-none appearance-none cursor-pointer relative z-10
                      ${errors.loanAmount ? 'opacity-70' : ''}
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-indigo-500 [&::-webkit-slider-thumb]:to-purple-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(99,102,241,0.4)] [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-[0_4px_12px_rgba(99,102,241,0.5)]
                      [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-indigo-500 [&::-moz-range-thumb]:to-purple-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(99,102,241,0.4)] [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-200 [&::-moz-range-thumb]:hover:scale-110
                      ${errors.loanAmount ? '[&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(239,68,68,0.4)] [&::-moz-range-thumb]:bg-red-500 [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(239,68,68,0.4)]' : ''}
                    `}
                  />
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-md -translate-y-1/2 shadow-inner"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md -translate-y-1/2 transition-all duration-200 shadow-[0_2px_4px_rgba(99,102,241,0.3)]"
                    style={{ width: `${sliderPercentage}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 font-semibold px-2 flex-wrap gap-2">
                  <span>{formatCurrency(String(MIN_LOAN))}</span>
                  <span className="text-base sm:text-lg font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300">
                    {formatCurrency(formData.loanAmount)}
                  </span>
                  <span>{formatCurrency(String(MAX_LOAN))}</span>
                </div>

                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className={`w-full px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                    ${errors.loanAmount 
                      ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                      : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                    }
                    focus:outline-none
                  `}
                  placeholder="Enter loan amount"
                  min={MIN_LOAN}
                  max={MAX_LOAN}
                />
                {errors.loanAmount && (
                  <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                    <span>⚠</span> {errors.loanAmount}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                First Name <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.firstName 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.firstName}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="secondName" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Middle Name
              </label>
              <input
                type="text"
                id="secondName"
                name="secondName"
                value={formData.secondName}
                onChange={handleChange}
                className="px-3 py-3 sm:px-4 sm:py-3.5 border-2 border-gray-300 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="Enter middle name (optional)"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Last Name <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.lastName 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.lastName}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="dob" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Date of Birth <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.dob 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
                max={new Date().toISOString().split('T')[0]}
              />
              {errors.dob && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.dob}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contactNumber" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Contact Number <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                maxLength={10}
                value={formData.contactNumber}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.contactNumber 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
                placeholder="10 digit contact number"
              />
              {errors.contactNumber && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.contactNumber}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Email Address <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.email 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="netTakeHomeSalary" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Net Take Home Salary <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="number"
                id="netTakeHomeSalary"
                name="netTakeHomeSalary"
                value={formData.netTakeHomeSalary}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.netTakeHomeSalary 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
                placeholder="Enter Net Take Home salary"
                min="0"
              />
              {errors.netTakeHomeSalary && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.netTakeHomeSalary}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="loanType" className="font-semibold text-[#2b2f38] text-[0.95rem] flex items-center gap-1">
                Loan Type <span className="text-red-500 font-bold">*</span>
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 bg-white text-[#2b2f38] font-sans
                  ${errors.loanType 
                    ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' 
                    : 'border-gray-300 hover:border-indigo-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:-translate-y-0.5'
                  }
                  focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                `}
              >
                <option value="">Select Loan Type</option>
                <option value="Fresh Loan">Fresh Loan</option>
                <option value="Balance Transfer">Balance Transfer</option>
              </select>
              {errors.loanType && (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
                  <span>⚠</span> {errors.loanType}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-6">
          <label className="flex items-start gap-3 cursor-pointer font-medium text-[#2b2f38] leading-relaxed">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className={`w-5 h-5 min-w-[20px] mt-0.5 cursor-pointer accent-indigo-500 border-2 rounded transition-all duration-300
                ${errors.termsAccepted 
                  ? 'border-red-500 outline-2 outline-red-200' 
                  : 'border-gray-300 hover:border-indigo-500'
                }
              `}
            />
            <span className="flex-1 text-[0.95rem] text-[#2b2f38]">
              By using this website, you agree to the{' '}
              <Link to="/terms-and-conditions" className="text-indigo-500 underline font-semibold transition-colors duration-300 hover:text-indigo-700 hover:no-underline focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2 focus:rounded">
                Terms and Conditions
              </Link>
              {' '}and the{' '}
              <Link to="/privacy-policy" className="text-indigo-500 underline font-semibold transition-colors duration-300 hover:text-indigo-700 hover:no-underline focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2 focus:rounded">
                Privacy Policy
              </Link>
              {' '}of www.softlend.in. I also agree to receive calls, WhatsApp messages, and SMS from SoftLend or its partners regarding loan offers, even if my number is registered under DND. I understand that I can withdraw my consent at any time.
            </span>
          </label>
          {errors.termsAccepted && (
            <span className="text-red-500 text-sm font-medium flex items-center gap-1 animate-slideDown mt-1">
              <span>⚠</span> {errors.termsAccepted}
            </span>
          )}
        </div>

        {/* Form Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 pt-8 border-t-2 border-gray-300">
          <button 
            type="submit" 
            className="w-full sm:min-w-[200px] sm:w-auto px-8 py-4 text-base sm:text-[1.0625rem] font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-lg disabled:hover:translate-y-0 disabled:hover:shadow-none relative
              disabled:text-transparent
              disabled:after:content-[''] disabled:after:absolute disabled:after:w-4 disabled:after:h-4 disabled:after:top-1/2 disabled:after:left-1/2 disabled:after:-translate-x-1/2 disabled:after:-translate-y-1/2 disabled:after:border-2 disabled:after:border-white/30 disabled:after:rounded-full disabled:after:border-t-white disabled:after:animate-spin
            "
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InitialApplicationForm;
