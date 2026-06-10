import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiCanva, SiReact, SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { FaPhotoVideo, FaVectorSquare, FaVideo } from "react-icons/fa";

const skills = [
  { icon: <FaPhotoVideo size={32} />, name: "Photoshop", level: 90, color: "#31A8FF" },
  { icon: <FaVectorSquare size={32} />, name: "Illustrator", level: 85, color: "#FF9A00" },
  { icon: <SiCanva size={32} />, name: "Canva", level: 95, color: "#00C4CC" },

  // NEW ADDITIONS
  { icon: <SiFigma size={32} />, name: "Figma", level: 88, color: "#F24E1E" },
  { icon: <FaVideo size={32} />, name: "CapCut", level: 85, color: "#ffffff" },

  { icon: <SiReact size={32} />, name: "React JS", level: 75, color: "#61DAFB" },
  { icon: <SiTailwindcss size={32} />, name: "Tailwind CSS", level: 80, color: "#38BDF8" },
  { icon: <SiJavascript size={32} />, name: "JavaScript", level: 70, color: "#F7DF1E" },

  { icon: <MdComputer size={32} />, name: "IT Troubleshooting", level: 88, color: "#A8FF78" },
];

function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group p-6 bg-[#111118] border border-[#1a1a24] hover:border-[#e8ff47]/40 transition-all duration-300 relative overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${skill.color}08 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        <div
          style={{ color: skill.color }}
          className="mb-4 transition-transform duration-300 group-hover:scale-110 origin-left"
        >
          {skill.icon}
        </div>

        <h3 className="font-body font-semibold text-[#e8e8f0] mb-4 text-sm">
          {skill.name}
        </h3>

        {/* Progress bar */}
        <div className="h-1 bg-[#1a1a24] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: 0.3 + index * 0.07, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
          />
        </div>

        <div className="flex justify-between mt-2">
          <span className="font-mono text-[10px] text-[#6b6b80]">
            Proficiency
          </span>
          <span className="font-mono text-[10px]" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad bg-[#111118] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8ff47]/20 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#e8ff47] tracking-[0.3em] uppercase">
            02 — Skills
          </span>
          <span className="flex-1 h-px bg-[#1a1a24]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#e8e8f0] tracking-tight">
            TOOLS &{" "}
            <span style={{ WebkitTextStroke: "2px #e8ff47", color: "transparent" }}>
              TECHNOLOGIES
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}