import React from 'react';

const Grievance: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-8 px-4 sm:py-4 sm:px-2">
      <div className="text-center mb-12 sm:mb-8 py-12 px-8 sm:py-8 sm:px-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <h1 className="mb-4 text-4xl sm:text-3xl sm:text-[1.75rem] font-extrabold text-white">Grievance Redressal</h1>
        <p className="text-lg sm:text-base text-white/95 m-0">We are committed to resolving your concerns promptly</p>
      </div>

      <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]">
        <section className="text-slate-600 leading-[1.8] text-base sm:text-[0.95rem]">
          <p><strong>Grievance Redressal Officer (GRO)</strong></p>

          <ul className="my-6 pl-5">
            <li className="mb-3 text-slate-600">
              <strong className="text-slate-900">Name:</strong> Anudeep Reddy
            </li>
            <li className="mb-3 text-slate-600">
              <strong className="text-slate-900">Designation:</strong> Chief Operating Officer
            </li>
            <li className="mb-3 text-slate-600">
              <strong className="text-slate-900">Email:</strong> <a href="mailto:anudeepreddy.softlend@gmail.com" className="text-indigo-500 no-underline font-medium hover:underline focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2">anudeepreddy.softlend@gmail.com</a>
            </li>
            <li className="mb-3 text-slate-600">
              <strong className="text-slate-900">Phone:</strong> +91 9480080044
            </li>
            <li className="mb-3 text-slate-600">
              <strong className="text-slate-900">Address:</strong> # 7, 1st Cross Second main, Ganganagar, Bangalore 560032
            </li>
          </ul>

          <p className="mt-6 pt-4 border-t border-slate-200 text-[0.95rem]">
            Customers may raise complaints by writing to the above email or contacting the phone number during business hours.
            Complaints shall be acknowledged and resolved within <strong>15 business days</strong>, unless otherwise communicated.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Grievance;
