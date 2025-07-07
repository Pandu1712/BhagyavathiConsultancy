
import { motion } from "framer-motion";
import bhagyavatiImg from "../assets/Poster.jpg";
import raoImg from "../assets/Poster.jpg";

const team = [
  {
    name: "Mrs. Bhagyavati",
    role: "Founder",
    img: bhagyavatiImg,
    color: "text-[#0D4D66]",
  },
  {
    name: "Mr. A N Rao",
    role: "CEO",
    img: raoImg,
    color: "text-[#1D9A8C]",
  },
];

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring" as const,
    },
  }),
};

const Team = () => {
  return (
    <div className="bg-[#9FBFC5] min-h-screen py-16 px-4 md:px-12">
      <motion.h2
        className="text-4xl font-bold text-center text-[#0D4D66] mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Leadership
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative bg-white border-2 border-[#0D4D66] rounded-2xl p-6 pt-10 shadow-lg text-center flex flex-col items-center transition-transform hover:scale-105 duration-300"
          >
            {/* Corner Accent Shape */}
            <div className="absolute top-5 left-5 w-16 h-16 bg-[#0D4D66] opacity-30 z-0 rotate-45 rounded-sm"></div>

            {/* Image */}
            <div className="relative z-10 -mt-16 mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full border-4 border-[#0D4D66] shadow-md"
              />
            </div>

            {/* Text */}
            <div className="relative z-10 px-3">
              <h3 className="text-xl font-bold text-[#0D4D66]">{member.name}</h3>
              <p className={`italic font-semibold ${member.color} mb-3`}>
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                This slide is 100% editable. Adjust it as per your requirements
                and catches your viewers' consideration.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
