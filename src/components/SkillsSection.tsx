import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ===== LEFT SIDE: CORE SKILLS (Grouped) ===== */
const skills = [
  {
    name: "JavaScript (ES6+)",
    level: 95,
    color: "from-yellow-400 to-yellow-600",
  },
  { name: "React / Next.js", level: 92, color: "from-primary to-primary/70" },
  {
    name: "Node.js / Express",
    level: 90,
    color: "from-green-400 to-green-600",
  },
  {
    name: "MongoDB / MySQL",
    level: 88,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "REST APIs / Auth (JWT, RBAC)",
    level: 90,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Docker / NGINX / PM2",
    level: 85,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "CI/CD & Testing (GitHub Actions, Jest)",
    level: 82,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Python / FastAPI / GenAI (RAG)",
    level: 80,
    color: "from-pink-400 to-pink-600",
  },
];

/* ===== RIGHT SIDE: EVERYTHING (NO MISS) ===== */
const technologies = [
  // Frontend
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Context API",
  "Tailwind CSS",
  "Bootstrap",
  "Ant Design",

  // Backend
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "RBAC",
  "Redis (Caching)",
  "Node.js Cluster",
  "Third-party API Integration",

  // Databases
  "MongoDB",
  "MySQL",

  // DevOps & Cloud
  "Docker",
  "Docker Compose",
  "AWS EC2",
  "NGINX",
  "PM2",
  "Redis (Rate Limiting)",

  // Tools & CI/CD
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "GitHub Actions",
  "CI/CD Pipelines",
  "Unit Testing (Jest)",
  "Debugging",

  // AI & Automation
  "Python",
  "FastAPI",
  "AI / LLM Integration",
  "OpenAI / ChatGPT API",
  "Prompt Engineering",
  "RAG Architecture",
  "n8n Workflow Automation",

  // Core CS
  "Object-Oriented Programming",
  "Algorithms",
  "Data Structures",
  "Clean Code",
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section-padding bg-secondary/20 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="container -mt-12 sm:-mt-12 mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-medium mb-3 block">
            My Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Everything I use to build, scale, deploy, and automate real-world
            applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* ===== LEFT: SKILL BARS ===== */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl font-semibold mb-6"
            >
              Core Strengths
            </motion.h3>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.3 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===== RIGHT: FULL TECH GRID ===== */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl font-semibold mb-6"
            >
              Complete Tech Stack
            </motion.h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass px-4 py-2 rounded-full text-sm font-medium
                             border border-border hover:glow-primary transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
