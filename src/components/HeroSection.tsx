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
      <Scene3D />

      {/* add a soft overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/70" />

      <div className="container mx-auto sm:px-6 relative z-10">
        <div className="flex items-center justify-center py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
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
                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl
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
              I’m{" "}
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
                               px-3 py-1 text-xs sm:text-sm text-foreground/80"
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
