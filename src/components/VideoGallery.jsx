import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Video Project 1",
    category: "Motion Design",
    src: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Video Project 2",
    category: "Animation",
    src: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: "Video Project 3",
    category: "Video Ad",
    src: "/videos/video3.mp4",
  },
  {
    id: 4,
    title: "Video Project 4",
    category: "Showreel",
    src: "/videos/video4.mp4",
  },
];

const gradients = [
  "from-red-950 to-rose-900",
  "from-purple-950 to-violet-900",
  "from-blue-950 to-indigo-900",
  "from-emerald-950 to-teal-900",
];

function VideoCard({ video, index, inView }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden bg-[#1a1a24] border border-[#1a1a24] hover:border-[#e8ff47]/30 transition-all duration-300"
    >
      {/* VIDEO AREA (9:16) */}
      <div className="relative aspect-[9/16] bg-[#111118]">
        {playing ? (
          <video
            src={video.src}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${
              gradients[index % gradients.length]
            } flex items-center justify-center cursor-pointer relative`}
            onClick={() => setPlaying(true)}
          >
            {/* Play Button */}
            <div className="w-16 h-16 rounded-full bg-[#e8ff47] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-black ml-1" />
            </div>

            <span className="absolute bottom-3 text-xs text-white/60 font-mono">
              Click to Play
            </span>
          </div>
        )}
      </div>

      {/* META (UNCHANGED) */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-body font-medium text-[#e8e8f0] text-sm mb-1">
            {video.title}
          </h3>
          <span className="font-mono text-[10px] text-[#6b6b80] tracking-widest uppercase">
            {video.category}
          </span>
        </div>

        {playing && (
          <button
            onClick={() => setPlaying(false)}
            className="font-mono text-[10px] text-[#e8ff47] tracking-widest uppercase hover:underline"
          >
            Close
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function VideoGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="videos" className="section-pad bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#e8e8f0] tracking-tight mb-12"
        >
          VIDEO{" "}
          <span style={{ WebkitTextStroke: "2px #e8ff47", color: "transparent" }}>
            WORK
          </span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}