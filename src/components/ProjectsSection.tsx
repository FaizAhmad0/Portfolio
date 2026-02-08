import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "SaumicWallet",
    subtitle: "Order & Payment Platform",
    description:
      "Financial + order management platform with UPI/bank/card payments, multi-role dashboards (user/manager/admin/dispatch/accountant), WhatsApp + email alerts, and secure APIs.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
      "Instamojo",
      "Redis",
      "VPS",
    ],
    link: "https://wallet.saumiccraft.in",
    credentials: { user: "UID2223", pass: "UID2223@MD@30" },
    image:
      "linear-gradient(135deg, rgba(0,229,255,0.22), rgba(124,58,237,0.18))",
  },
  {
    id: 2,
    title: "Support Portal",
    subtitle: "Tickets & Appointments",
    description:
      "Multi-role support system for raising tickets and booking appointments. Built optimized MongoDB schema/indexes and RBAC workflows for smooth operations.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "RBAC", "NGINX", "VPS", "SSE"],
    link: "https://help.saumiccraft.com/",
    credentials: { user: "UID2223", pass: "UID2223@MD@30" },
    image:
      "linear-gradient(135deg, rgba(168,85,247,0.20), rgba(236,72,153,0.18))",
  },
  {
    id: 3,
    title: "CRM System",
    subtitle: "Internal Ops (MERN)",
    description:
      "Internal CRM built with MERN stack to manage users/orders/status flows with fast search/filtering and clean role-based modules.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Ant Design",
      "REST APIs",
      "Socket.io",
      "Nodemailer",
      "BullMQ",
    ],
    link: "https://crm.saumiccraft.com/",
    image:
      "linear-gradient(135deg, rgba(14,165,233,0.20), rgba(34,197,94,0.16))",
  },
  {
    id: 4,
    title: "RAG Agent Chatbot",
    subtitle: "Python + FastAPI",
    description:
      "RAG assistant using Python + FastAPI that retrieves answers from documents and supports agent/tool flows. Ready for production integration with LLM APIs.",
    tags: ["Python", "FastAPI", "RAG", "LLM APIs", "MongoDB"],
    link: "https://github.com/FaizAhmad0/Rag-Agent",
    image:
      "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(59,130,246,0.16))",
  },
  {
    id: 5,
    title: "Learning Management System",
    subtitle: "Course Tracking Platform",
    description:
      "A role-based learning management system where users can log in to access enrolled courses, track learning progress, resume lessons, and monitor completion status, with a secure and scalable backend.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST APIs",
    ],
    link: "https://training.saumiccraft.com/",
    credentials: { user: "UID2223", pass: "UID2223@MD@30" },
    image:
      "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(14,165,233,0.16))",
  },
  {
    id: 6,
    title: "E-Commerce App",
    subtitle: "MERN Storefront",
    description:
      "E-commerce platform with product catalog, cart/checkout flow, admin inventory control, and scalable backend APIs.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Ant Design",
      "REST APIs",
      "Socket.io",
      "Nodemailer",
      "BullMQ",
    ],
    link: "#",
    image:
      "linear-gradient(135deg, rgba(245,158,11,0.16), rgba(99,102,241,0.14))",
  },
];

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const isLive = project.link && project.link !== "#";
  const openProject = () => {
    if (!isLive) return;
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openProject}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && isLive) openProject();
      }}
      className="group relative overflow-hidden rounded-2xl gradient-border hover-lift cursor-pointer"
    >
      {/* FULL BODY GRADIENT BACKGROUND (no header) */}
      <div className="absolute inset-0" style={{ background: project.image }} />

      {/* subtle dark overlay base */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Content overlay with hover animation like old template */}
      <motion.div
        initial={{ opacity: 0.92 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0.92 }}
        className="relative z-10 flex flex-col justify-between p-6 min-h-[320px]"
      >
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
              isLive
                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                : "border-border/60 text-muted-foreground bg-muted/20"
            }`}
          >
            {isLive ? "Live" : "Coming soon"}
          </span>

          {/* ARROW appears on hover */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
            title={isLive ? "Open project" : "URL coming soon"}
          >
            <svg
              className="w-5 h-5 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-5">
          <motion.h3
            animate={isHovered ? { y: -6 } : { y: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display text-2xl font-bold leading-snug"
          >
            {project.title}
            <span className="text-muted-foreground font-semibold">
              {" "}
              • {project.subtitle}
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
            transition={{ delay: 0.08, duration: 0.25 }}
            className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3"
          >
            {project.description}
          </motion.p>

          {/* credentials */}
          {project.credentials && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                isHovered ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 6 }
              }
              transition={{ delay: 0.12, duration: 0.25 }}
              className="mt-4 rounded-xl border border-border/60 bg-muted/20 px-3 py-2"
            >
              <div className="text-xs font-semibold text-foreground/90 mb-1">
                Test Access
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                user:{" "}
                <span className="text-foreground/90">
                  {project.credentials.user}
                </span>
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                pass:{" "}
                <span className="text-foreground/90">
                  {project.credentials.pass}
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* TAGS + HINT */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isHovered
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0.75, scale: 0.98 }
                }
                transition={{ delay: 0.12 + tagIndex * 0.04, duration: 0.2 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/20"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="mt-5 text-xs text-primary font-semibold"
          >
            {isLive ? "Open live project →" : "Demo link will be added →"}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium mb-3 block">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A selection of production apps, internal tools, and GenAI work built
            for real users and real workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
