import { motion } from "framer-motion";
import profileImg from "../assets/paw.png";

export default function Hero() {
  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0f] overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e8ff47 1px, transparent 1px), linear-gradient(90deg, #e8ff47 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#e8ff47]/5 blur-[150px] rounded-full" />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

        <div className="grid lg:grid-cols-2 items-center gap-14">

          {/* LEFT TEXT (MOVED LEFT SLIGHTLY) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:-translate-x-2"
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#e8ff47]" />
              <span className="font-mono text-xs text-[#e8ff47] tracking-[0.3em] uppercase">
                FREELANCER
              </span>
            </div>

            <h1 className="font-display leading-[0.9]">
              <span className="block text-[clamp(4rem,10vw,10rem)] text-[#e8e8f0]">
                PAW
              </span>

              <span
                className="block text-[clamp(4rem,10vw,10rem)]"
                style={{
                  WebkitTextStroke: "2px #e8ff47",
                  color: "transparent",
                }}
              >
                VASQUEZ
              </span>
            </h1>

            <p className="mt-6 font-mono text-xs text-[#6b6b80] uppercase tracking-widest">
              Graphic Designer • Web Developer • IT Support
            </p>

            <p className="mt-6 text-[#6b6b80] text-lg leading-relaxed max-w-xl">
             An IT specialist with strong expertise in systems support, troubleshooting, and digital solutions, combined with skills as a graphic designer focused on visual narratives, branding, digital innovation, and video editing to create engaging and meaningful content.
            </p>

            <div className="flex gap-4 mt-10">
              <button
                onClick={scrollToGallery}
                className="px-8 py-4 bg-[#e8ff47] text-black font-mono uppercase text-sm hover:bg-[#cfe83a]"
              >
                View Work
              </button>

              <button
                onClick={scrollToContact}
                className="px-8 py-4 border border-[#2a2a38] text-[#6b6b80] font-mono uppercase text-sm hover:text-white hover:border-white"
              >
                Contact
              </button>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end relative"
          >

            {/* GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-[#e8ff47]/10 blur-[140px] rounded-full" />

            {/* BLUR FRAME */}
            <div className="absolute w-[380px] h-[460px] bg-white/5 backdrop-blur-xl border border-[#2a2a38]/60 rounded-3xl" />

            {/* DEPTH FRAME */}
            <div className="absolute w-[380px] h-[460px] border border-[#e8ff47]/20 rounded-3xl translate-x-4 translate-y-4" />

            {/* IMAGE */}
            <motion.img
              src={profileImg}
              alt="Paw Vasquez"
              whileHover={{ scale: 1.03 }}
              className="relative z-10 w-[320px] sm:w-[360px] md:w-[420px] object-contain"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}