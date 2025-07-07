
import { motion } from 'framer-motion';

// Service data
const services = [
  "Permanent Staffing",
  "Contract Staffing",
  "Temporary Staffing",
  "Executive Search",
  "Recruitment Process Outsourcing (RPO)",
  "Employment, Education & Reference Verification",
  "Drug Screening & Criminal Background Checks",
  "Safety Training & Compliance Solutions",
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring" as const,
    },
  }),
};

const Services = () => {
  return (
    <div className="min-h-screen bg-[#9FBFC5] px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0D4D66] text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-lg font-semibold text-[#0D4D66] mb-2">
                🔹 {service}
              </h3>
              <p className="text-sm text-gray-700">
                We offer tailored {service.toLowerCase()} solutions to meet your unique business needs with professionalism and compliance.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
