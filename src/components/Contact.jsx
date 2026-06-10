import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { HiMail, HiPhone, HiArrowRight } from "react-icons/hi";

const socials = [
  { icon: <FaInstagram size={18} />, label: "Instagram", href: "#" },
  { icon: <FaFacebook size={18} />, label: "Facebook", href: "#" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <FaTiktok size={18} />, label: "TikTok", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);

      // 🔁 redirect after submit (change link if needed)
      window.location.href = "/";
    }, 3000);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-pad bg-[#111118] relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#e8ff47]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#e8ff47]/5 blur-[120px] rounded-full" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8ff47]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#e8ff47] tracking-[0.3em] uppercase">
            06 — Contact
          </span>
          <span className="flex-1 h-px bg-[#1a1a24]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-tight mb-8">
              <span className="text-[#e8e8f0]">LET'S</span>
              <br />

              <span
                style={{
                  WebkitTextStroke: "2px #e8ff47",
                  color: "transparent",
                }}
              >
                CREATE
              </span>

              <br />

              <span className="text-[#e8e8f0]">TOGETHER</span>
            </h2>

            <p className="text-[#6b6b80] leading-relaxed mb-10 max-w-md">
              Available for freelance projects, collaborations, and full-time
              opportunities. I create modern websites, graphic designs, and
              digital experiences with clean visuals and smooth interactions.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:paolopontanal@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl border border-[#2a2a38] flex items-center justify-center text-[#e8ff47] bg-[#e8ff47]/5 group-hover:bg-[#e8ff47] group-hover:text-[#0a0a0f] transition-all duration-300">
                  <HiMail size={18} />
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6b6b80] mb-1">
                    Email
                  </p>
                  <span className="text-[#d6d6df] group-hover:text-white transition-colors">
                    paolopontanal@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+639936843560"
                className="group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl border border-[#2a2a38] flex items-center justify-center text-[#e8ff47] bg-[#e8ff47]/5 group-hover:bg-[#e8ff47] group-hover:text-[#0a0a0f] transition-all duration-300">
                  <HiPhone size={18} />
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6b6b80] mb-1">
                    Phone
                  </p>
                  <span className="text-[#d6d6df] group-hover:text-white transition-colors">
                    +63 993 684 3560
                  </span>
                </div>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-[#2a2a38] flex items-center justify-center text-[#6b6b80] hover:border-[#e8ff47] hover:text-[#e8ff47] hover:-translate-y-1 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[#15151d]/80 backdrop-blur-xl border border-[#232330] rounded-[32px] p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs text-[#6b6b80] tracking-widest uppercase block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full bg-[#101018] border border-[#2a2a38] text-[#e8e8f0] placeholder-[#6b6b80] px-5 py-4 text-sm rounded-xl focus:outline-none focus:border-[#e8ff47] transition-all"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[#6b6b80] tracking-widest uppercase block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full bg-[#101018] border border-[#2a2a38] text-[#e8e8f0] placeholder-[#6b6b80] px-5 py-4 text-sm rounded-xl focus:outline-none focus:border-[#e8ff47] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-[#6b6b80] tracking-widest uppercase block mb-3">
                Message
              </label>

              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="w-full bg-[#101018] border border-[#2a2a38] text-[#e8e8f0] placeholder-[#6b6b80] px-5 py-4 text-sm rounded-xl focus:outline-none focus:border-[#e8ff47] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#e8ff47] text-[#0a0a0f] font-mono text-sm font-medium tracking-widest uppercase hover:bg-[#d4ea3f] transition-all duration-300"
            >
              {sent ? "Message Sent!" : "Send Message"}
              <HiArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-xs text-[#e8ff47] tracking-widest"
              >
                ✓ Thank you! I'll be in touch soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}