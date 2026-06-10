import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HiX, HiZoomIn } from "react-icons/hi";

export default function PosterGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // 🔥 AUTO IMPORT ALL IMAGES (NO ERRORS)
  const images = import.meta.glob(
    "../assets/posters/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  // Convert images to posters array
  const posters = useMemo(() => {
    return Object.entries(images).map(([path, src], index) => {
      const fileName = path.split("/").pop().split(".")[0];

      return {
        id: index + 1,
        title: fileName,
        category:
          index % 3 === 0
            ? "Posters"
            : index % 3 === 1
            ? "Branding"
            : "Logos",
        src,
      };
    });
  }, [images]);

  const categories = ["All", "Posters", "Branding", "Logos"];

  const filtered =
    active === "All"
      ? posters
      : posters.filter((p) => p.category === active);

  return (
    <section id="gallery" className="section-pad bg-[#111118] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* HEADER (UNCHANGED STYLE) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-[#e8ff47] tracking-[0.3em] uppercase">
            04 — Gallery
          </span>
          <span className="flex-1 h-px bg-[#1a1a24]" />
        </motion.div>

        {/* TITLE + FILTER (UNCHANGED STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#e8e8f0]">
            DESIGN{" "}
            <span style={{ WebkitTextStroke: "2px #e8ff47", color: "transparent" }}>
              WORK
            </span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition ${
                  active === cat
                    ? "bg-[#e8ff47] text-black"
                    : "border border-[#2a2a38] text-[#6b6b80] hover:text-[#e8e8f0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((poster) => (
              <motion.div
                key={poster.id}
                layout
                onClick={() => setLightbox(poster)}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#1a1a24]"
              >
                <img
                  src={poster.src}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* overlay (UNCHANGED STYLE) */}
                <div className="absolute inset-0 bg-[#0a0a0f]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <HiZoomIn size={28} className="text-[#e8ff47]" />
                  <p className="font-mono text-xs text-[#e8e8f0] tracking-widest uppercase">
                    {poster.title}
                  </p>
                  <span className="px-2 py-1 border border-[#e8ff47]/40 text-[#e8ff47] font-mono text-[10px] tracking-widest uppercase">
                    {poster.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[#2a2a38] text-[#6b6b80] hover:border-[#e8ff47] hover:text-[#e8ff47]"
            >
              <HiX size={18} />
            </button>

            <motion.img
              src={lightbox.src}
              alt={lightbox.title}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="max-h-[80vh] w-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}