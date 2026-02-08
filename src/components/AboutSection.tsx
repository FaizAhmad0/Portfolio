import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "2.5+ yrs", label: "Industry Experience" },
  { number: "10+", label: "Production Apps Built" },
  { number: "20%", label: "Performance Improved" },
  { number: "AWS", label: "Deployed (Docker/NGINX)" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container relative -mt-12 sm:-mt-12 mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-3 sm:mb-4 block"
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight"
          >
            Full-Stack Engineer building{" "}
            <span className="text-gradient">real products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg mb-5 sm:mb-6"
          >
            I’m{" "}
            <span className="text-foreground font-semibold">
              Mohammad Faiz Ahmad
            </span>
            , a Software Engineer with 2.5+ years of experience building scalable
            web applications using{" "}
            <span className="text-foreground font-semibold">
              React, Node.js, and MongoDB
            </span>
            . I focus on clean code, secure APIs (JWT/RBAC), and real-world
            business workflows.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10"
          >
            Recently, I’ve been building AI-powered features like{" "}
            <span className="text-foreground font-semibold">
              RAG-based chatbots
            </span>{" "}
            using{" "}
            <span className="text-foreground font-semibold">
              Python • FastAPI • LLM APIs
            </span>
            , and deploying production apps on{" "}
            <span className="text-foreground font-semibold">
              AWS EC2 with Docker, NGINX, and PM2
            </span>
            .
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.08, type: "spring" }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
