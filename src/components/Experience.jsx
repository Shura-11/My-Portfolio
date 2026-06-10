import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BsBriefcaseFill, BsTools } from "react-icons/bs";

const experiences = [
  {
    icon: <BsBriefcaseFill size={18} />,
    role: "Freelance Graphic Designer",
    company: "Self-Employed",
    period: "2021 — Present",
    type: "Design",
    highlights: [
      "Designed 50+ posters, flyers, and marketing materials for local businesses",
      "Developed brand identities including logos, color palettes, and typography guides",
      "Created social media content and digital assets for multiple clients",
      "Managed end-to-end design projects from concept to delivery",
    ],
  },
  {
    icon: <BsBriefcaseFill size={18} />,
    role: "UI/UX Designer / Front-end Developer (Intern)",
    company: "Red Zeal Realty Corp., Naga City, Philippines",
    period: "Feb 2025 — Jul 2025",
    type: "Development",
    highlights: [
      "Developed a Client Relationship Management (CRM) system for a real estate project using modern web technologies",
      "Designed user-friendly and responsive UI layouts to improve overall user experience",
      "Implemented front-end features for client tracking, property management, and data organization",
      "Collaborated on interface structure, workflow optimization, and system functionality improvements",
      "Configured WiFi and performed basic troubleshooting for office systems",
    ],
  },
  {
    icon: <BsTools size={18} />,
    role: "IT Support / Graphic Designer",
    company: "Solar Gard Philippines, Mandaluyong City, Philippines",
    period: "Nov 2025 — Mar 2026",
    type: "IT / Design",
    highlights: [
      "Provided IT support including troubleshooting hardware, software, and printer issues",
      "Assisted in basic network setup, system installation, and maintenance",
      "Supported users with technical concerns and ensured smooth daily system operations",
      "Designed visual materials such as social media graphics, posters, and promotional content",
      "Created layouts using Adobe Photoshop and Canva while maintaining brand consistency",
      "Collaborated with team members to improve both technical processes and visual presentations",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section-pad bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8ff47]/20 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#e8ff47] tracking-[0.3em] uppercase">
            03 — Experience
          </span>
          <span className="flex-1 h-px bg-[#1a1a24]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#e8e8f0] tracking-tight mb-16"
        >
          WORK{" "}
          <span style={{ WebkitTextStroke: "2px #e8ff47", color: "transparent" }}>
            HISTORY
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#e8ff47] via-[#2a2a38] to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="md:pl-24 relative"
              >
                <div className="absolute left-6 top-6 w-5 h-5 border-2 border-[#e8ff47] bg-[#0a0a0f] rounded-full hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#e8ff47] rounded-full" />
                </div>

                <div className="group p-8 bg-[#111118] border border-[#1a1a24] hover:border-[#e8ff47]/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#e8ff47]/10 text-[#e8ff47]">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-body font-semibold text-[#e8e8f0] text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-[#6b6b80] text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#e8ff47]/10 text-[#e8ff47] font-mono text-xs tracking-widest uppercase">
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-[#6b6b80]">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[#6b6b80] text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 mt-2 shrink-0 bg-[#e8ff47] rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}