import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-8 px-4 sm:py-4 sm:px-2">
      <div className="text-center mb-12 sm:mb-8 py-12 px-8 sm:py-8 sm:px-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <h1 className="text-white mb-4 text-4xl sm:text-3xl sm:text-[1.75rem] font-extrabold">Terms and Conditions — SoftLend</h1>
        <p className="text-lg sm:text-base text-white/95 m-0">Last updated: {'12/08/2025'}</p>
      </div>

      <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]">
        <section className="mb-10 sm:mb-8 last:mb-0">
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">Welcome to SoftLend ("Website"). By accessing or using this Website, you ("User") agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, please do not use this Website.</p>
        </section>
        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">1. Nature of Services</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            SoftLend is a loan lead-generation platform.
            We do not provide loans directly.
            We collect your information and share it with our lending partners (NBFCs/Banks/DSAs) to help process your loan application and provide loan offers.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">2. User Eligibility</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            You confirm that:

            You are an Indian citizen

            You are 18 years or older

            You are submitting information voluntarily
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">3. Information You Provide</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            By using this Website, you may be required to submit personal information including but not limited to:

            Name

            Phone number

            Email ID

            PAN

            Last 4 digits of Aadhaar (optional)

            Income details

            Required loan amount

            This information is collected solely for loan processing and verification by lending partners.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">4. Consent to Share Information</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            By submitting your details, you explicitly authorize SoftLend to:

            Collect and use your information for loan assessment

            Share your information with our lending partners, NBFCs, banks, and authorized DSAs

            Allow them to contact you for loan-related communication

            This includes communication through phone calls, SMS, WhatsApp, or email.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">5. DND Consent (Important)</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            You acknowledge and agree that:

            "Even if my mobile number is registered under DND (Do Not Disturb), I consent to receive calls, SMS, WhatsApp messages, or emails from SoftLend or its lending partners regarding my loan application."

            If you do not want communication, you may withdraw consent anytime (see Section 10).
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">6. Accuracy of Information</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            You agree that all information provided is:

            True

            Accurate

            Complete

            Providing false information may result in rejection of your loan request.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">7. No Guarantee of Loan Approval</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            SoftLend is only a facilitator.
            We do not guarantee:

            Loan approval

            Loan amount

            Interest rate

            Timeline of processing

            These decisions are made entirely by the respective lender.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">8. Third-Party Links</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            This Website may contain links to third-party platforms (NBFCs/banks).
            SoftLend is not responsible for their content, policies, or decisions.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">9. Limitation of Liability</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            SoftLend shall not be liable for:

            Any delay or rejection of your loan

            Any financial loss

            Any communication made by partner lenders

            Any breach by third-party service providers

            You agree to use this Website at your own risk.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">10. Consent Withdrawals</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            You may withdraw your consent anytime by writing to:
            📧 <a href="mailto:support@softlend.in" className="text-indigo-500 no-underline font-medium hover:underline focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2">support@softlend.in</a>

            Upon withdrawal, we will stop sharing your data further, but already shared data cannot be recalled from lenders.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">11. Data Protection Compliance</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            SoftLend follows reasonable security practices as required under the Digital Personal Data Protection Act, 2023 (DPDPA).

            Your data will be:

            Collected only with consent

            Used only for stated purposes

            Shared only with authorized lending partners

            Retained only as long as required for loan processing

          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">12. Intellectual Property</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            All content, logos, text, and design on this Website are the property of SoftLend and cannot be copied without permission.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">13. Changes to Terms</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            SoftLend reserves the right to update these Terms anytime.
            Changes will be posted on this page with a revised "Last Updated" date.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">14. Governing Law</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            These Terms are governed by the laws of India.
            Any disputes shall be handled exclusively in courts located in Bangalore, Karnataka.
          </p>
        </section>

        <section className="mb-10 sm:mb-8 last:mb-0">
          <h2 className="text-slate-900 mb-4 text-2xl sm:text-xl sm:text-[1.125rem] font-bold pb-2 border-b-2 border-slate-200">15. Contact Us</h2>
          <p className="text-slate-600 leading-[1.8] mb-4 text-base sm:text-[0.95rem] last:mb-0">
            For any questions or complaints, reach us at:

            📧 <a href="mailto:support@softlend.in" className="text-indigo-500 no-underline font-medium hover:underline focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2">support@softlend.in</a>

            📍 Bangalore, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
















