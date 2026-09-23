import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PixelArrow } from "@/components/PixelCursor";

export const WHATSAPP = "5519974169516";
export const INSTAGRAM_HANDLE = "@clickin";
export const INSTAGRAM_URL = "https://instagram.com/clickin";
export const WA_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá, Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto.",
)}`;
export const EMAIL = "comercialclickin@outlook.com";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "muted" }) {
  return (
    <p
      className={`font-mono-eyebrow inline-flex items-center gap-3 ${
        tone === "gold" ? "text-gold" : "text-ink/60"
      }`}
    >
      <span aria-hidden className={`inline-block h-px w-8 ${tone === "gold" ? "bg-gold" : "bg-ink/30"}`} />
      {children}
    </p>
  );
}

function Logo({ collapsed }: { collapsed: boolean }) {
  const ringRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const prev = useRef(collapsed);

  useEffect(() => {
    if (prev.current !== collapsed) {
      ringRef.current?.classList.remove("bump");
      cursorRef.current?.classList.remove("bump");
      void ringRef.current?.offsetWidth;
      void cursorRef.current?.offsetWidth;
      ringRef.current?.classList.add("bump");
      cursorRef.current?.classList.add("bump");
      prev.current = collapsed;
    }
  }, [collapsed]);

  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2 font-display text-xl font-semibold text-ink select-none"
    >
      <span className="relative inline-flex items-center justify-center">
        <span ref={cursorRef} className="logo-cursor inline-flex">
          <PixelArrow size={20} />
        </span>
        <span ref={ringRef} className="logo-ring" />
      </span>
      <span className="leading-none">
        {collapsed ? (
          <>
            C.<span className="text-gold">In</span>
          </>
        ) : (
          <>
            Click<span className="text-gold">In</span>
          </>
        )}
      </span>
    </Link>
  );
}

export function Header({ onDark = false }: { onDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = onDark && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.975_0.008_150_/_0.78)] border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className={dark ? "[&_.text-ink]:text-sand" : ""}>
          <Logo collapsed={scrolled} />
        </div>
        <nav
          className={`hidden items-center gap-8 text-sm md:flex ${
            dark ? "text-sand/75" : "text-ink/80"
          }`}
        >
          <Link to="/" hash="sobre" className={`transition-colors ${dark ? "hover:text-sand" : "hover:text-ink"}`}>
            Sobre
          </Link>
          <Link to="/" hash="projetos" className={`transition-colors ${dark ? "hover:text-sand" : "hover:text-ink"}`}>
            Projetos
          </Link>
          <Link to="/" hash="processo" className={`transition-colors ${dark ? "hover:text-sand" : "hover:text-ink"}`}>
            Processo
          </Link>
          <Link to="/" hash="contato" className={`transition-colors ${dark ? "hover:text-sand" : "hover:text-ink"}`}>
            Contato
          </Link>
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            dark ? "bg-sand text-ink-deep hover:bg-white" : "bg-ink text-sand hover:bg-ink/85"
          }`}
        >
          vamos conversar <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}


export function Footer() {
  return (
    <footer className="bg-ink-deep py-16 text-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
        <div>
          <div className="inline-flex items-center gap-2 font-display text-2xl font-semibold">
            <PixelArrow size={22} color="var(--sand)" />
            Click<span className="text-gold-soft">In</span>
          </div>
          <p className="mt-4 max-w-xs text-sand/70">
            Portfólio de Gabriel, fundador da click.in. Produtos próprios, sistemas e automações.
          </p>
        </div>
        <div>
          <p className="font-mono-eyebrow text-sand/50">navegar</p>
          <ul className="mt-4 space-y-2 text-sand/85">
            <li>
              <Link className="transition-colors hover:text-gold-soft" to="/" hash="sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-gold-soft" to="/" hash="projetos">
                Projetos
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-gold-soft" to="/" hash="processo">
                Processo
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-gold-soft" to="/" hash="contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono-eyebrow text-sand/50">contato</p>
          <ul className="mt-4 space-y-2 text-sand/85">
            <li>
              <a className="transition-colors hover:text-gold-soft" href={WA_URL} target="_blank" rel="noreferrer">
                WhatsApp →
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-gold-soft" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-gold-soft" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram · {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-2 border-t border-sand/10 px-6 pt-6 text-sm text-sand/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} ClickIn. Todos os direitos reservados.</p>
        <p>Indaiatuba · SP</p>
      </div>
    </footer>
  );
}

export function FloatingWhats() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11.5 11.5 0 0 0 3.6 18.9L2 22l3.2-1.6A11.5 11.5 0 1 0 20.5 3.5Zm-8.4 17.7a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-2.2 1.1.7-2.3-.2-.4a9.7 9.7 0 1 1 7 2.9Zm5.6-7.3c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7s1.9 2.9 4.6 4a16 16 0 0 0 1.5.6c.6.2 1.2.1 1.7.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}


export function MetricCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[6px] border border-[#CFDDCB] bg-[#E9F0E5] px-4 py-3 shadow-md shadow-black/5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div>
          <p className="font-mono-eyebrow text-ink/55">{label}</p>
          <p className="font-display mt-1 text-xl font-semibold text-ink">{value}</p>
        </div>
        <svg width="52" height="30" viewBox="0 0 52 30" fill="none" aria-hidden>
          <path
            d="M2 26 L14 20 L24 22 L34 11 L50 4"
            stroke="var(--gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="4" r="2.5" fill="var(--gold)" />
        </svg>
      </div>
    </div>
  );
}
