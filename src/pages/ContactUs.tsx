// ContactPage.jsx
import { FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#9FBFC5] py-12 px-4 text-[#0D4D66]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 grid md:grid-cols-2 gap-10"
      >
        {/* Left Side - Info */}
        <div className="space-y-6">
          <div>
        
            <h2 className="text-3xl font-bold mt-2">Contact Us</h2>
            <p className="text-sm mt-2 leading-relaxed">
              Reach out to us — we typically respond within 24 hours on working days.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaGlobe className="mt-1" />
              <div>
                <h4 className="font-bold">Our Address:</h4>
                <p className="text-sm">
                  D.No: 45-40-43/1, G4, Abid Nagar, Akkayyapalem,<br />
                  Visakhapatnam, Andhra Pradesh 530016
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1" />
              <div>
                <h4 className="font-bold">Our Mailbox:</h4>
                <p className="text-sm">info@rposervices.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1" />
              <div>
                <h4 className="font-bold">Our Phone:</h4>
                <p className="text-sm">+1 646-396-1457</p>
                <p className="text-sm">+91 9985577148</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.form
          variants={fadeIn}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D4D66]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone Number <span className="text-red-600">*</span></label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D4D66]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email <span className="text-red-600">*</span></label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D4D66]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#0D4D66]"
            ></textarea>
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="h-[78px] bg-gray-100 border rounded flex items-center justify-center">
            <span className="text-sm text-gray-500">[ reCAPTCHA placeholder ]</span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0D4D66] text-white font-semibold py-2 rounded hover:bg-[#09394b] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
