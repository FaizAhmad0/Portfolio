import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // store latest intersectionRatio for each section
  const ratiosRef = useRef({});
  const activeRef = useRef("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Active section tracking (robust)
  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    // init ratios
    ratiosRef.current = {};
    ids.forEach((id) => (ratiosRef.current[id] = 0));

    const observer = new IntersectionObserver(
      (entries) => {
        // update ratios for changed entries
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        });

        // pick section with max ratio
        let bestId = activeRef.current;
        let bestRatio = 0;

        for (const [id, ratio] of Object.entries(ratiosRef.current)) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        // fallback: if none intersecting (fast scroll), use closest to top
        if (bestRatio < 0.01) {
          const y = window.scrollY + 120; // navbar offset
          let closest = ids[0];
          let minDiff = Infinity;

          ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const top = el.getBoundingClientRect().top + window.scrollY;
            const diff = Math.abs(top - y);
            if (diff < minDiff) {
              minDiff = diff;
              closest = id;
            }
          });

          bestId = closest;
        }

        if (bestId && bestId !== activeRef.current) {
          activeRef.current = bestId;
          setActiveSection(bestId);
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1],
        // top margin accounts for fixed navbar, bottom keeps detection stable
        rootMargin: "-25% 0px -55% 0px",
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // lock background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ESC closes mobile menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const smoothScrollTo = useCallback((href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    setIsMobileMenuOpen(false);
    activeRef.current = id;
    setActiveSection(id);

    // ✅ Offset scroll for fixed navbar
    const yOffset = -90; // adjust if your navbar height differs
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong py-3" : "py-5"
        }`}
      >
        {/* ✅ add px-4 for mobile padding */}
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <motion.button
            type="button"
            onClick={() => smoothScrollTo("#home")}
            className="font-display text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to Home"
          >
            <img
              src="/logo.png"
              alt="Faiz Ahmad"
              className="h-12 w-15 block dark:hidden"
            />
            <img
              src="/darklogo.png"
              alt="Faiz Ahmad"
              className="h-12 w-15 hidden dark:block"
            />
          </motion.button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => smoothScrollTo(item.href)}
                    className={`relative font-medium transition-colors group ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-foreground block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-foreground block"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-foreground block"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 glass-strong md:hidden pt-24"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="absolute inset-0"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            />

            <ul className="relative flex flex-col items-center gap-8 py-12">
              {navItems.map((item, index) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      type="button"
                      onClick={() => smoothScrollTo(item.href)}
                      className={`text-2xl font-display font-semibold transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
