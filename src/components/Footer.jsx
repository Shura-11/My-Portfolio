import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#1a1a24]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-2xl tracking-widest text-[#e8ff47]">
            PAW.
          </span>
          <p className="font-mono text-xs text-[#6b6b80] tracking-wider text-center">
            © {new Date().getFullYear()} Paw Vasquez. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e8ff47] animate-pulse" />
            <span className="font-mono text-xs text-[#6b6b80] tracking-widest">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
