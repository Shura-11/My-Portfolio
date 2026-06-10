import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaPalette, FaDesktop, FaCode } from "react-icons/fa";

const cards = [
  {
    icon: <FaPalette size={22} />,
    title: "Graphic Design",
    desc: "Creating visual identities, posters, social media assets, and brand collaterals with a sharp eye for typography and composition.",
  },
  {
    icon: <FaDesktop size={22} />,
    title: "IT Support",
    desc: "Hardware diagnostics, system setup, network troubleshooting, and hands-on maintenance to keep machines running at their best.",
  },
  {
    icon: <FaCode size={22} />,
    title: "Web Development",
    desc: "Building modern, responsive frontends with React and Tailwind CSS — turning designs into pixel-perfect, interactive experiences.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-pad bg-[#0a0a0f] relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8ff47]/30 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#e8ff47] tracking-[0.3em] uppercase">01 — About</span>
          <span className="flex-1 h-px bg-[#1a1a24]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-tight text-[#e8e8f0] mb-8">
              CRAFTING{" "}
              <span style={{ WebkitTextStroke: "2px #e8ff47", color: "transparent" }}>
                IDEAS
              </span>{" "}
              INTO<br />REALITY
            </h2>
            <p className="text-[#6b6b80] text-lg leading-relaxed mb-6 font-light">
              I'm <span className="text-[#e8e8f0] font-medium">Paw Vasquez</span> — a multi-disciplinary creative based in the Philippines. 
              I blend graphic design sensibility with technical know-how to deliver work that not only looks great 
              but also functions flawlessly.
            </p>
            <p className="text-[#6b6b80] leading-relaxed font-light">
              Whether it's crafting a brand identity from scratch, debugging a stubborn network issue, or 
              building a responsive website — I bring the same level of care and precision to every project.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {["Photoshop", "Illustrator", "React JS", "Tailwind", "IT Support"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#2a2a38] text-[#6b6b80] font-mono text-xs tracking-wide hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group flex gap-5 p-6 bg-[#111118] border border-[#1a1a24] hover:border-[#e8ff47]/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#e8ff47]/10 text-[#e8ff47] group-hover:bg-[#e8ff47] group-hover:text-[#0a0a0f] transition-all duration-300">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[#e8e8f0] mb-2">{c.title}</h3>
                  <p className="text-[#6b6b80] text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
