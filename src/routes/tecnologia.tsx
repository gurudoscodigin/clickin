import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PixelCursor, PixelArrow } from "@/components/PixelCursor";
import {
  Eyebrow,
  Footer,
  FloatingWhats,
  Header,
  MetricCard,
  useScrollReveal,
  WA_URL,
} from "@/components/site";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Braço tech da ClickIn — sites, landing pages e softwares" },
      {
        name: "description",
        content:
          "Sites de alta performance, landing pages que convertem e softwares personalizados para automatizar processos e acelerar o crescimento.",
      },
      { property: "og:title", content: "Braço tech da ClickIn — sites, landing pages e softwares" },
      {
        property: "og:description",
        content:
          "Sites de alta performance, landing pages que convertem e softwares personalizados para automatizar processos e acelerar o crescimento.",
      },
    ],
  }),
  component: TechPage,
});

const BLOCKS = [
  { x: 1, y: 1, w: 10, h: 2 },
  { x: 1, y: 4, w: 6, h: 4 },
  { x: 8, y: 4, w: 3, h: 4 },
  { x: 1, y: 9, w: 3, h: 3 },
  { x: 5, y: 9, w: 3, h: 3 },
  { x: 9, y: 9, w: 2, h: 3 },
];

function BrowserBuild() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(BLOCKS.length);
      return;
    }
    const id = window.setInterval(() => {
      setStep((s) => (s >= BLOCKS.length + 2 ? 0 : s + 1));
    }, 700);
    return () => window.clearInterval(id);
  }, []);

  const active = Math.min(step, BLOCKS.length);
  const cursorTarget = BLOCKS[Math.min(active, BLOCKS.length - 1)];

  return (
    <div
      aria-hidden
      className="w-full overflow-hidden rounded-xl border border-[#CFDDCB] bg-[#E9F0E5] shadow-lg shadow-black/5"
    >
      <div className="flex items-center gap-2 border-b border-[#CFDDCB] bg-sand-dark px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-full bg-[#E9F0E5] px-3 py-1 font-mono text-[11px] text-ink/50">
          seusite.com.br
        </span>
      </div>
      <div className="relative p-4">
        <div
          className="relative grid gap-2"
          style={{ gridTemplateColumns: "repeat(11, 1fr)", gridTemplateRows: "repeat(11, 14px)" }}
        >
          {BLOCKS.map((b, i) => (
            <div
              key={i}
              className="rounded-[3px] transition-all duration-500"
              style={{
                gridColumn: `${b.x} / span ${b.w}`,
                gridRow: `${b.y} / span ${b.h}`,
                background: i < active ? (i === 0 ? "var(--gold)" : "rgba(19,50,31,0.14)") : "rgba(19,50,31,0.04)",
                opacity: i < active ? 1 : 0.6,
                transform: i === active - 1 ? "scale(1.02)" : "scale(1)",
              }}
            />
          ))}
          <div
            className="pointer-events-none absolute transition-all duration-500"
            style={{
              left: `${((cursorTarget.x - 1 + cursorTarget.w / 2) / 11) * 100}%`,
              top: `${(cursorTarget.y - 1 + cursorTarget.h / 2) * 16}px`,
            }}
          >
            <PixelArrow size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechHero() {
  return (
    <section className="relative overflow-hidden bg-ink-deep pt-36 pb-24 text-sand md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E9F0E5 1px, transparent 1px), linear-gradient(to bottom, #E9F0E5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="reveal">
          <p className="font-mono-eyebrow inline-flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-8 bg-gold" />
            braço tech
          </p>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] md:text-6xl">
            Quando o marketing precisa de <span className="text-gold">estrutura</span>, a gente
            constrói.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-sand/75">
            Sites de alta performance, landing pages e softwares personalizados. Tecnologia feita
            para sustentar campanha, organizar operação e acelerar o crescimento.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-ink-deep transition-transform hover:scale-[1.02]"
            >
              Falar sobre um projeto <span aria-hidden>→</span>
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-sand/30 px-6 py-3 font-medium text-sand transition-colors hover:border-sand"
            >
              Voltar para o marketing
            </Link>
          </div>
        </div>
        <div className="reveal">
          <BrowserBuild />
        </div>
      </div>
    </section>
  );
}

function TechServices() {
  const items = [
    {
      n: "01",
      t: "Sites de alta performance",
      d: "Carregamento rápido, SEO técnico e estrutura pensada para o visitante virar contato.",
    },
    {
      n: "02",
      t: "Landing pages",
      d: "Páginas de campanha construídas para conversão, com medição e teste de variações.",
    },
    {
      n: "03",
      t: "Softwares personalizados",
      d: "Painéis, sistemas internos e ferramentas que resolvem o seu fluxo, não um molde genérico.",
    },
    {
      n: "04",
      t: "Automações e integrações",
      d: "CRM, planilhas, WhatsApp, e-mail e APIs conversando entre si, sem trabalho manual.",
    },
  ];
  return (
    <section className="border-b border-[#CFDDCB] bg-sand-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>o que construímos</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Tecnologia com objetivo de negócio.
          </h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            Cada projeto começa por uma pergunta simples. O que precisa mudar no número no fim do
            mês.
          </p>
        </div>
        <div className="grid gap-px bg-[#CFDDCB] md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.n}
              className="reveal bg-sand-dark p-8 transition-all duration-300 hover:bg-[#E9F0E5] hover:pl-11"
            >
              <div className="font-mono-eyebrow text-gold">{it.n}</div>
              <h3 className="font-display mt-6 text-xl font-semibold text-ink md:text-2xl">{it.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <Eyebrow>antes e depois</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            A diferença aparece na operação.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl bg-[#CFDDCB] md:grid-cols-2">
          <div className="reveal bg-[#E1E9DC] p-10">
            <p className="font-mono-eyebrow text-ink/45">antes</p>
            <ul className="mt-6 space-y-4 text-ink/55">
              {[
                "Lead chega e ninguém responde a tempo",
                "Site lento, que espanta quem clicou no anúncio",
                "Controle no papel e em planilha solta",
                "Ninguém sabe qual campanha trouxe a venda",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ink/30" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="reveal relative p-10"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.92 0.04 150) 0%, oklch(0.85 0.07 148) 100%)",
            }}
          >
            <p className="font-mono-eyebrow text-ink-deep/70">depois da clickin</p>
            <ul className="mt-6 space-y-4 text-ink-deep/85">
              {[
                "Lead recebido, qualificado e respondido na hora",
                "Site rápido, medido e feito para converter",
                "Processo em sistema próprio, com histórico",
                "Cada real de campanha com origem rastreada",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink-deep text-gold">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.2l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <MetricCard label="tempo de resposta" value="menos de 1 min" className="mt-8 max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Descoberta", d: "Entendemos o problema, o público e o objetivo. Alinhamos escopo e prioridade antes de qualquer linha de código." },
    { n: "02", t: "Prototipagem", d: "Telas, fluxos e arquitetura na mesa. Você vê o projeto tomando forma antes da construção." },
    { n: "03", t: "Desenvolvimento", d: "Ciclos curtos, entregas navegáveis e feedback constante. Sem surpresa no fim." },
    { n: "04", t: "Entrega", d: "Publicamos, documentamos e treinamos o uso. Depois do go live, seguimos por perto." },
  ];
  return (
    <section className="border-y border-[#CFDDCB] bg-sand-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>como trabalhamos</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Da ideia ao que está no ar.
          </h2>
        </div>
        <div className="grid gap-px bg-[#CFDDCB] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((p, i) => (
            <article key={p.n} className="reveal bg-sand-dark p-8 transition-colors hover:bg-[#E9F0E5]">
              <div className="flex items-center justify-between">
                <span className="font-mono-eyebrow text-gold">{p.n}</span>
                {i < steps.length - 1 && (
                  <span aria-hidden className="hidden text-gold/60 lg:inline">→</span>
                )}
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-ink md:text-2xl">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCTA() {
  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.93 0.03 150) 0%, oklch(0.85 0.07 148) 55%, oklch(0.76 0.11 148) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono-eyebrow reveal text-ink-deep/70">/ próximo passo</p>
        <h2 className="font-display reveal mt-6 text-4xl font-semibold leading-tight text-ink-deep md:text-6xl">
          Vamos construir o que falta.
        </h2>
        <p className="reveal mt-6 text-lg text-ink-deep/75">
          Conta o cenário atual e a gente aponta o caminho mais curto. Resposta em menos de 48h.
        </p>
        <div className="reveal mt-10">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink-deep px-8 py-4 text-base font-medium text-sand transition-transform hover:scale-[1.02] hover:bg-ink"
          >
            Fale com a gente <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function TechPage() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-sand text-ink">
      <PixelCursor />
      <Header onDark />
      <main>
        <TechHero />
        <TechServices />
        <BeforeAfter />
        <Process />
        <TechCTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
