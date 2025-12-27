import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-8 px-4 sm:px-2 sm:py-4">
      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-12 py-12 px-8 sm:py-8 sm:px-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <h1 className="text-white mb-4 text-4xl sm:text-[2.25rem]">About SoftLend</h1>
        <p className="text-xl sm:text-lg text-white/95 max-w-[700px] mx-auto">Your trusted digital loan lead-generation and referral platform</p>
      </div>

      {/* Introduction Section */}
      <section className="mb-20 sm:mb-16">
        <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 mb-8 animate-[fadeIn_0.6s_ease]">
          <h2 className="text-3xl sm:text-[1.75rem] sm:text-2xl font-bold mb-6 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent pb-3 border-b-[3px] border-transparent border-gradient-to-r from-indigo-500 to-purple-600" style={{ borderImage: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) 1' }}>Who We Are</h2>
          <div className="leading-[1.8]">
            <p className="mb-6 sm:mb-4 text-slate-600 text-lg sm:text-base">
              SoftLend is a digital loan lead-generation and referral platform that helps individuals 
              connect with RBI-regulated NBFCs and authorized lending partners for various loan products.
            </p>
            <p className="mb-6 sm:mb-4 text-slate-600 text-lg sm:text-base">
              We do not provide loans directly and do not take any lending decisions. Our role is limited 
              to collecting user information with explicit consent and securely sharing it with our partner 
              lenders to help them evaluate loan eligibility and offer suitable financial products.
            </p>
            <p className="text-slate-600 text-lg sm:text-base">
              SoftLend aims to simplify the loan discovery process by enabling borrowers to submit their 
              details through a single platform and receive communication from verified lenders.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-8">
        <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 animate-[fadeIn_0.6s_ease] border-l-4 border-indigo-500 transition-all duration-300 hover:border-l-[6px] hover:translate-x-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
          <h2 className="text-3xl sm:text-[1.75rem] sm:text-2xl font-bold mb-6 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent pb-3 border-b-[3px] border-transparent border-gradient-to-r from-indigo-500 to-purple-600" style={{ borderImage: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) 1' }}>What We Do</h2>
          <ul className="list-none p-0 m-0">
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">✓</span>
              <span>Collect loan enquiries from users through our website</span>
            </li>
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">✓</span>
              <span>Share verified leads with registered NBFCs and lending partners</span>
            </li>
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">✓</span>
              <span>Enable faster and more transparent communication between borrowers and lenders</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="mb-8">
        <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 animate-[fadeIn_0.6s_ease] border-l-4 border-indigo-500 transition-all duration-300 hover:border-l-[6px] hover:translate-x-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
          <h2 className="text-3xl sm:text-[1.75rem] sm:text-2xl font-bold mb-6 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent pb-3 border-b-[3px] border-transparent border-gradient-to-r from-indigo-500 to-purple-600" style={{ borderImage: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) 1' }}>What We Don't Do</h2>
          <ul className="list-none p-0 m-0">
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">✗</span>
              <span>We do not sanction, approve, or guarantee loans</span>
            </li>
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">✗</span>
              <span>We do not charge users any upfront fees</span>
            </li>
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">✗</span>
              <span>We do not access or fetch credit bureau data directly</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section className="mb-20 sm:mb-16">
        <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 mb-8 animate-[fadeIn_0.6s_ease]">
          <h2 className="text-3xl sm:text-[1.75rem] sm:text-2xl font-bold mb-6 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent pb-3 border-b-[3px] border-transparent border-gradient-to-r from-indigo-500 to-purple-600" style={{ borderImage: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) 1' }}>Data Privacy & Consent</h2>
          <div className="leading-[1.8]">
            <p className="mb-6 sm:mb-4 text-slate-600 text-lg sm:text-base">
              We respect user privacy and comply with applicable Indian laws, including the Digital Personal 
              Data Protection Act, 2023 (DPDPA) and TRAI regulations.
            </p>
            <p className="text-slate-600 text-lg sm:text-base">
              User data is collected only after explicit consent and is shared strictly for loan-processing 
              purposes with authorized partners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="mb-8">
        <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 animate-[fadeIn_0.6s_ease] border-l-4 border-indigo-500 transition-all duration-300 hover:border-l-[6px] hover:translate-x-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
          <h2 className="text-3xl sm:text-[1.75rem] sm:text-2xl font-bold mb-6 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent pb-3 border-b-[3px] border-transparent border-gradient-to-r from-indigo-500 to-purple-600" style={{ borderImage: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) 1' }}>Our Commitment</h2>
          <ul className="list-none p-0 m-0">
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">🔒</span>
              <span>Transparency in how user data is used</span>
            </li>
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">🔒</span>
              <span>Secure handling of personal information</span>
            </li>
            <li className="group flex items-start gap-4 sm:gap-3 py-5 sm:py-4 border-b border-slate-200 text-slate-600 text-lg sm:text-base leading-[1.7] transition-all duration-300 hover:text-slate-900 hover:pl-2 last:border-b-0">
              <span className="flex items-center justify-center min-w-[32px] sm:min-w-[28px] h-8 sm:h-7 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-base sm:text-sm font-bold flex-shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">🔒</span>
              <span>Compliance with regulatory and data-protection standards</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;

