import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="text-center mb-16 sm:mb-12 py-12 px-8 sm:py-8 sm:px-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <h1 className="text-white mb-4 text-4xl sm:text-3xl sm:text-[1.875rem]">Contact Us</h1>
        <p className="text-xl sm:text-lg text-white/95 max-w-[700px] mx-auto">Get in touch with us. We're here to help you with all your loan-related queries.</p>
      </section>

      {/* Contact Container */}
      <div className="grid grid-cols-[1fr_1.5fr] lg:grid-cols-1 gap-12 lg:gap-10 mb-16 xl:grid-cols-[1fr_1.75fr] xl:gap-16">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1">
          <div className="p-8 text-center transition-all duration-300 border-2 border-slate-200 rounded-2xl hover:border-indigo-500 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] bg-white">
            <div className="text-4xl mb-4 block">📧</div>
            <h3 className="mb-2 text-slate-900 font-semibold">Email</h3>
            <p className="text-slate-600 text-[0.95rem] mb-4">Send us an email anytime</p>
            <a href="mailto:support@softlend.in" className="text-indigo-500 font-semibold text-lg no-underline block transition-colors duration-200 hover:text-indigo-700">
              support@softlend.in
            </a>
          </div>

          <div className="p-8 text-center transition-all duration-300 border-2 border-slate-200 rounded-2xl hover:border-indigo-500 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] bg-white">
            <div className="text-4xl mb-4 block">📞</div>
            <h3 className="mb-2 text-slate-900 font-semibold">Phone</h3>
            <p className="text-slate-600 text-[0.95rem] mb-4">Call us during business hours</p>
            <a href="tel:+919480080044" className="text-indigo-500 font-semibold text-lg no-underline block transition-colors duration-200 hover:text-indigo-700">
              +91 9480080044
            </a>
          </div>

          <div className="p-8 text-center transition-all duration-300 border-2 border-slate-200 rounded-2xl hover:border-indigo-500 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] bg-white">
            <div className="text-4xl mb-4 block">📍</div>
            <h3 className="mb-2 text-slate-900 font-semibold">Address</h3>
            <p className="text-slate-600 text-[0.95rem] mb-4">Visit our office</p>
            <address className="text-indigo-500 font-semibold text-lg not-italic leading-relaxed">
              # 7, 1st Cross Second main,<br />
              Ganganagar, Bangalore 560032
            </address>
          </div>

          <div className="p-8 text-center transition-all duration-300 border-2 border-slate-200 rounded-2xl hover:border-indigo-500 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] bg-white">
            <div className="text-4xl mb-4 block">🕒</div>
            <h3 className="mb-2 text-slate-900 font-semibold">Business Hours</h3>
            <p className="text-slate-600 text-[0.95rem] mb-4">When we're available</p>
            <p className="text-indigo-500 font-semibold text-lg">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-12 sm:p-8 sm:px-6 xl:p-16">
          <h2 className="mb-8 text-2xl text-slate-900 text-center font-bold">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-slate-900 text-[0.95rem]">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-3.5 px-4 border-2 border-slate-200 rounded-lg text-base transition-all duration-200 bg-white text-slate-900 focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-slate-900 text-[0.95rem]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-3.5 px-4 border-2 border-slate-200 rounded-lg text-base transition-all duration-200 bg-white text-slate-900 focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-semibold text-slate-900 text-[0.95rem]">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full py-3.5 px-4 pr-10 border-2 border-slate-200 rounded-lg text-base transition-all duration-200 bg-white text-slate-900 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E%3Cpath fill=%22%236366f1%22 d=%22M6 9L1 4h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center] focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              >
                <option value="">Select a subject</option>
                <option value="loan-inquiry">Loan Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-slate-900 text-[0.95rem]">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full py-3.5 px-4 border-2 border-slate-200 rounded-lg text-base transition-all duration-200 bg-white text-slate-900 resize-y min-h-[120px] focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-lg mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-[2rem] p-16 sm:p-12 sm:px-6 text-center text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] xl:p-20 xl:px-16">
        <h2 className="text-white mb-4 text-3xl font-bold">Need Immediate Assistance?</h2>
        <p className="text-white/95 text-lg mb-8 max-w-[600px] mx-auto">
          Our team is ready to help you find the best loan options. Get in touch with us today!
        </p>
        <a
          href="/apply"
          className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg no-underline transition-all duration-200 hover:bg-white/95 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Apply for a Loan
        </a>
      </section>
    </div>
  );
};

export default Contact;
