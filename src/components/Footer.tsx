import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* ultra-soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[220px] 
                        bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 
                        blur-3xl opacity-25"
        />
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Faiz Ahmad. All rights reserved.
          </motion.p>

          {/* Right */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground text-sm"
          >
            Crafted with{" "}
            <span className="text-red-600 text-xl font-bold">♥</span> using MERN
            & GenAI
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
