import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PixelCursor, PixelArrow } from "@/components/PixelCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClickIn — desenvolvimento web, software e automação" },
      {
        name: "description",
        content:
          "ClickIn cria sites institucionais, softwares sob medida e automações. Sua empresa merece um clique de qualidade.",
      },
      { property: "og:title", content: "ClickIn — desenvolvimento web, software e automação" },
      {
        property: "og:description",
        content: "Sites, softwares sob medida e automações. Sua empresa merece um clique de qualidade.",
      },
    ],
  }),
  component: Index,
});

// TODO: substituir pelos dados reais
const WHATSAPP = "5500000000000";
const WA_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Vim pelo site da ClickIn e gostaria de um orçamento.",
)}`;
const EMAIL = "contato@clickin.com.br";

function useScrollReveal() {
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

function Logo({ collapsed }: { collapsed: boolean }) {
  const ringRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const prev = useRef(collapsed);

  useEffect(() => {
    if (prev.current !== collapsed) {
      ringRef.current?.classList.remove("bump");
      cursorRef.current?.classList.remove("bump");
      // restart animation
      void ringRef.current?.offsetWidth;
      void cursorRef.current?.offsetWidth;
      ringRef.current?.classList.add("bump");
      cursorRef.current?.classList.add("bump");
      prev.current = collapsed;
    }
  }, [collapsed]);

  return (
    <a href="#top" className="group inline-flex items-center gap-2 font-display text-xl font-semibold text-ink select-none">
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
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.945_0.018_80_/_0.78)] border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo collapsed={scrolled} />
        <nav className="hidden items-center gap-8 text-sm text-ink/80 md:flex">
          <a href="#servicos" className="hover:text-ink transition-colors">Serviços</a>
          <a href="#processo" className="hover:text-ink transition-colors">Processo</a>
          <a href="#sobre" className="hover:text-ink transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-ink transition-colors">Contato</a>
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-sand hover:bg-ink-deep transition-colors"
        >
          orçamento <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36">
      {/* Ambient floating cursors */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="float-cursor absolute left-[12%] top-[28%] opacity-40">
          <PixelArrow size={28} />
        </div>
        <div
          className="float-cursor absolute right-[10%] top-[60%] opacity-30"
          style={{ animationDelay: "2.4s", animationDuration: "11s" }}
        >
          <PixelArrow size={36} />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p
          className="font-mono-eyebrow text-ink/70 reveal"
          style={{ animationDelay: "0ms" }}
        >
          desenvolvimento web · software · automação
        </p>

        <h1
          className="reveal font-display mt-6 text-5xl font-semibold leading-[1.05] text-ink md:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          Sua empresa merece um{" "}
          <span className="shine-text">clique</span>
          <br className="hidden md:block" /> de qualidade
        </h1>

        <p
          className="reveal mx-auto mt-8 max-w-2xl text-lg text-ink/75 md:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          Construímos sites, softwares sob medida e automações que entregam resultado.
          Tecnologia direta ao ponto, sem ruído, sem firula.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sand font-medium hover:bg-ink-deep transition-colors"
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-medium text-ink hover:border-ink hover:bg-sand-dark transition-colors"
          >
            Ver serviços
          </a>
        </div>

        <div
          className="reveal mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
          style={{ animationDelay: "480ms" }}
        >
          {[
            { k: "+30", v: "projetos entregues" },
            { k: "100%", v: "sob medida" },
            { k: "<48h", v: "primeira resposta" },
          ].map((s) => (
            <div key={s.v} className="text-left">
              <div className="font-display text-4xl font-semibold text-ink md:text-5xl">
                {s.k}
              </div>
              <div className="font-mono-eyebrow mt-2 text-ink/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      n: "01",
      t: "Sites institucionais",
      d: "Presença digital rápida, acessível e bonita. Do landing page ao site completo, com SEO e conteúdo pronto pra converter.",
    },
    {
      n: "02",
      t: "Softwares sob medida",
      d: "Sistemas internos, painéis, dashboards e ferramentas que resolvem o seu fluxo — não um molde genérico.",
    },
    {
      n: "03",
      t: "Automações",
      d: "Integrações entre planilhas, CRMs, e-mails, WhatsApp e APIs. Menos trabalho repetitivo, mais tempo pro que importa.",
    },
  ];
  return (
    <section id="servicos" className="bg-sand-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 max-w-2xl">
          <p className="font-mono-eyebrow text-ink/60">/ serviços</p>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            O que a gente faz
          </h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.n}
              className="reveal group bg-sand-dark p-8 transition-colors hover:bg-sand"
            >
              <div className="font-mono-eyebrow text-gold">{it.n}</div>
              <h3 className="font-display mt-6 text-2xl font-semibold text-ink md:text-3xl">
                {it.t}
              </h3>
              <p className="mt-4 text-ink/75 leading-relaxed">{it.d}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-ink/70 transition-all group-hover:text-ink group-hover:gap-3">
                <span className="text-gold">→</span> Saiba mais
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Conversa no WhatsApp", d: "Entendemos o problema, o prazo e o orçamento. Sem reunião desnecessária." },
    { n: "02", t: "Proposta e prazo", d: "Escopo claro, preço fechado e cronograma realista. Você aprova antes de começar." },
    { n: "03", t: "Construção em ciclos", d: "Entregas curtas, com feedback no caminho. Você acompanha em tempo real." },
    { n: "04", t: "Entrega e suporte", d: "No ar, documentado e com suporte. A gente continua junto depois do go-live." },
  ];
  return (
    <section id="processo" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mb-16">
          <p className="font-mono-eyebrow text-ink/60">/ processo</p>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Como trabalhamos
          </h2>
        </div>
        <ol className="divide-y divide-border border-y border-border">
          {steps.map((s) => (
            <li
              key={s.n}
              className="reveal group grid grid-cols-[auto_1fr] items-start gap-6 py-8 transition-colors hover:bg-sand-dark/60 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-10 md:px-2"
            >
              <span className="font-mono-eyebrow text-gold">{s.n}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-ink/70">{s.d}</p>
              </div>
              <span className="hidden text-gold opacity-0 transition-opacity group-hover:opacity-100 md:inline">→</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="bg-ink-deep py-32 text-sand">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono-eyebrow text-gold reveal">/ a ideia por trás do nome</p>
        <h2 className="font-display reveal mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Tudo começa com{" "}
          <span className="text-gold">um clique</span>.
        </h2>
        <p className="reveal mt-8 text-lg text-sand/75 md:text-xl">
          O clique é o gesto mais simples — e o mais decisivo. É o instante em que a curiosidade
          vira ação, em que a ideia vira projeto, em que o visitante vira cliente. A ClickIn nasce
          desse momento: tornar cada interação com a sua marca tão precisa, tão fluida e tão
          natural que valha o clique.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div
          className="reveal relative overflow-hidden rounded-2xl p-10 md:p-14"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.92 0.04 80) 0%, oklch(0.86 0.07 78) 60%, oklch(0.78 0.1 78) 100%)",
          }}
        >
          <p className="font-mono-eyebrow text-ink-deep/70">/ estúdio</p>
          <div className="font-display mt-8 text-6xl font-semibold leading-none text-ink-deep md:text-7xl">
            desde
            <br />
            2024
          </div>
          <p className="mt-8 max-w-xs font-mono-eyebrow text-ink-deep/70">
            Indaiatuba · SP
          </p>
        </div>

        <div className="reveal">
          <p className="font-mono-eyebrow text-ink/60">/ sobre</p>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Um estúdio enxuto, com foco em entrega.
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed">
            A ClickIn é um estúdio de tecnologia que combina design, código e automação para
            empresas que querem crescer com ferramentas próprias. Sem agência inflada, sem
            processo travado: a gente conversa, planeja, constrói e entrega.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Stack moderna (TypeScript, React, Node, Postgres)",
              "Comunicação direta — você fala com quem constrói",
              "Preço justo, escopo claro, prazo combinado",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink/85">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold text-ink-deep">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.2l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="contato"
      className="py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.93 0.03 80) 0%, oklch(0.85 0.07 78) 55%, oklch(0.76 0.11 78) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono-eyebrow text-ink-deep/70 reveal">/ vamos construir</p>
        <h2 className="font-display reveal mt-6 text-5xl font-semibold leading-tight text-ink-deep md:text-7xl">
          Dê o próximo clique.
        </h2>
        <p className="reveal mt-6 text-lg text-ink-deep/75">
          Conta pra gente o que você precisa. Resposta em menos de 48h.
        </p>
        <div className="reveal mt-10">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink-deep px-8 py-4 text-base font-medium text-sand transition-transform hover:scale-[1.02] hover:bg-ink"
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
          <p className="font-mono-eyebrow mt-4 text-ink-deep/60">
            resposta em menos de 48h
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-deep py-16 text-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
        <div>
          <div className="inline-flex items-center gap-2 font-display text-2xl font-semibold">
            <PixelArrow size={22} color="var(--sand)" />
            Click<span className="text-gold">In</span>
          </div>
          <p className="mt-4 max-w-xs text-sand/70">
            Estúdio de desenvolvimento web, software sob medida e automações.
          </p>
        </div>
        <div>
          <p className="font-mono-eyebrow text-sand/50">navegar</p>
          <ul className="mt-4 space-y-2 text-sand/85">
            <li><a className="hover:text-gold transition-colors" href="#servicos">Serviços</a></li>
            <li><a className="hover:text-gold transition-colors" href="#processo">Processo</a></li>
            <li><a className="hover:text-gold transition-colors" href="#sobre">Sobre</a></li>
            <li><a className="hover:text-gold transition-colors" href="#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono-eyebrow text-sand/50">contato</p>
          <ul className="mt-4 space-y-2 text-sand/85">
            <li>
              <a className="hover:text-gold transition-colors" href={WA_URL} target="_blank" rel="noreferrer">
                WhatsApp →
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href={`mailto:${EMAIL}`}>
                {EMAIL}
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

function FloatingWhats() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11.5 11.5 0 0 0 3.6 18.9L2 22l3.2-1.6A11.5 11.5 0 1 0 20.5 3.5Zm-8.4 17.7a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-2.2 1.1.7-2.3-.2-.4a9.7 9.7 0 1 1 7 2.9Zm5.6-7.3c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7s1.9 2.9 4.6 4a16 16 0 0 0 1.5.6c.6.2 1.2.1 1.7.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z"/>
      </svg>
    </a>
  );
}

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-sand text-ink">
      <PixelCursor />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Showcase />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
