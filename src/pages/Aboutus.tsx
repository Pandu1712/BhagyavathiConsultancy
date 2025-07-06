import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import teamImg from "../assets/Poster.jpg";
import successImg from "../assets/Poster.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RPOSection = () => {
  return (
    <div className="bg-[#9FBFC5] text-[#0D4D66] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* About */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img src={teamImg} alt="About RPO" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About RPO Services</h2>
            <p className="text-base leading-relaxed">
              At RPO, we understand that hiring the right people is critical for business success. Our recruitment process is designed to reduce time, cut costs, and improve quality. We support businesses in finding top talent using innovative tools and tailored strategies across industries.
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <h4 className="uppercase tracking-wide font-semibold">
            Exceptional Recruitment Solutions Redefined
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            We Strive To Revolutionize The Recruitment Industry By Offering Innovative And Tailored Solutions To Meet The Needs Of Our Clients.
          </h2>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "AI",
              heading: "Techniques And Tools",
              desc: "We use data-driven AI techniques and tools to streamline and automate recruitment for our clients."
            },
            {
              title: "Mobile",
              heading: "Recruitment Methods",
              desc: "By sending SMS messages and engaging on mobile platforms, we ensure real-time outreach and responsive hiring."
            },
            {
              title: "Unique",
              heading: "Technical Screening",
              desc: "We provide deep technical screening to ensure only qualified candidates reach interviews."
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-1">{card.title}</h3>
              <p className="font-semibold">{card.heading}</p>
              <p className="text-sm mt-2">{card.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Why RPO Services */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img src={successImg} alt="Why RPO" className="rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Why RPO SERVICES</h3>
            <ul className="space-y-3 text-base">
              {[
                "Save costs up to 50% with efficient recruitment.",
                "Get access to top-quality talent without expanding your in-house team.",
                "Focus on your business while we handle talent sourcing.",
                "Benefit from a dedicated team and industry insights.",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#0D4D66] mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-white rounded-xl p-6 shadow-md"
        >
          {[
            ["33+", "Active Clients"],
            ["50+", "Projects Done"],
            ["25+", "Team Advisors"],
            ["12+", "Glorious Years"],
          ].map(([count, label], idx) => (
            <div key={idx}>
              <h4 className="text-3xl font-bold">{count}</h4>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Expectations */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img src={teamImg} alt="Expectations" className="rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Exceeding Your Expectations</h3>
            <p className="text-base leading-relaxed">
              We help you find the right talent with a data-driven and personalized approach. With cutting-edge tools and a dedicated support team, we go beyond traditional methods to deliver results that exceed your expectations and help your business grow.
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6">FAQ’s</h3>
          {[
            "What are RPO Services?",
            "What services does RPO Services offer?",
            "What are the benefits of using RPO Services?",
          ].map((faq, idx) => (
            <details key={idx} className="mb-3 cursor-pointer">
              <summary className="font-semibold text-[#0D4D66]">
                {faq}
              </summary>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros non nunc fermentum malesuada.
              </p>
            </details>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default RPOSection;
