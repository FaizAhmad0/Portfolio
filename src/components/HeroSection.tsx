import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

export default function HeroSection() {
  const smoothScrollTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[radial-gradient(hsl(var(--foreground)/0.15)_1px,transparent_0.9px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
{/* 
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div> */}

      {/* add a soft overlay for readability */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/20 via-background/30 to-background/70" />

      <div className="container mx-auto sm:px-6 relative z-10">
        <div className="flex items-center justify-center py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="absolute -top-10 -left-10 w-full h-full text-blue-400 z-[-2] pointer-events-none opacity-50" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 50,200 Q 150,50 250,250 T 450,150" 
                fill="none" 
                stroke="url(#lineGrad)" 
                strokeWidth="3" 
                filter="url(#glow)"
                className="animate-[dash_6s_linear_infinite]"
                strokeDasharray="400"
                strokeDashoffset="400"
              />
              <path 
                d="M 20,150 Q 100,50 200,150 T 350,50" 
                fill="none" 
                stroke="url(#lineGrad)" 
                strokeWidth="2" 
                filter="url(#glow)"
                className="animate-[dash_8s_linear_infinite_reverse]"
                strokeDasharray="400"
                strokeDashoffset="400"
              />
              <style>{`
                @keyframes dash {
                  to { stroke-dashoffset: 0; }
                }
              `}</style>
            </svg>
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 sm:px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium text-primary">
                ✨ Open to full-time roles & freelance
              </span>
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display font-bold leading-[1.03] tracking-tight
                         text-4xl sm:text-4xl md:text-5xl lg:text-6xl
                         mb-5"
            >
              Building <span className="text-gradient glow-text">Scalable</span>{" "}
              Products
              <br />
              with <span className="text-gradient glow-text">MERN</span> +{" "}
              <span className="text-gradient glow-text">GenAI</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground
                         max-w-2xl mx-auto mb-8"
            >
              I am{" "}
              <span className="text-foreground font-semibold">
                Mohammad Faiz Ahmad
              </span>
              , a Full-Stack Engineer building production-grade apps, secure
              APIs, and
              <span className="text-foreground font-semibold">
                {" "}
                RAG chatbots{" "}
              </span>
              using{" "}
              <span className="text-foreground font-semibold">
                Python • FastAPI
              </span>
              .
            </motion.p>

            {/* compact stack pills (looks premium) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex flex-wrap justify-center gap-2 mb-9"
            >
              {[
                "Next.js",
                "React",
                "Node",
                "MongoDB",
                "FastAPI",
                "RAG",
                "Docker",
                "AWS",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/25 backdrop-blur
                               px-3 py-1 text-xs sm:text-sm text-foreground/80 hover:glow-primary transition hover:cursor-default"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                type="button"
                onClick={() => smoothScrollTo("#projects")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary hover:bg-primary/90 transition-colors"
              >
                View Projects
              </motion.button>

              <motion.button
                type="button"
                onClick={() => smoothScrollTo("#contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold border border-grey-500 transition-colors hover:glow-primary"
              >
                <div className="absolute inset-x-0 -bottom-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* scroll indicator (keep but not too loud) */}
      </div>
    </section>
  );
}
