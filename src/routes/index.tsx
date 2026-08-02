import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PixelCursor, PixelArrow } from "@/components/PixelCursor";
import {
  CampaignTerminal,
  Eyebrow,
  Footer,
  FloatingWhats,
  Header,
  LeadNotification,
  MetricCard,
  RotatingCommands,
  useScrollReveal,
  WA_URL,
} from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClickIn — agência de marketing com braço tech" },
      {
        name: "description",
        content:
          "Estratégia, conteúdo e tecnologia em um único lugar. A ClickIn transforma marcas em negócios que crescem.",
      },
      { property: "og:title", content: "ClickIn — agência de marketing com braço tech" },
      {
        property: "og:description",
        content:
          "Estratégia, conteúdo e tecnologia em um único lugar. A ClickIn transforma marcas em negócios que crescem.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="float-cursor absolute left-[10%] top-[30%] opacity-35">
          <PixelArrow size={28} />
        </div>
        <div
          className="float-cursor absolute right-[9%] top-[62%] opacity-25"
          style={{ animationDelay: "2.4s", animationDuration: "11s" }}
        >
          <PixelArrow size={36} />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono-eyebrow reveal text-ink/70" style={{ animationDelay: "0ms" }}>
          agência de marketing com braço tech
        </p>

        <h1
          className="font-display reveal mt-6 text-4xl font-semibold leading-[1.08] text-ink md:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Sua empresa não precisa de mais uma agência. Precisa de uma{" "}
          <span className="shine-text">estratégia</span> que gere resultados.
        </h1>

        <p
          className="reveal mx-auto mt-8 max-w-2xl text-lg text-ink/75 md:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          Na ClickIn, transformamos marcas em negócios que crescem. Estratégia, conteúdo e
          tecnologia, tudo em um único lugar.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-sand transition-colors hover:bg-ink-deep"
          >
            Fale com a gente <span aria-hidden>→</span>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-medium text-ink transition-colors hover:border-ink hover:bg-sand-dark"
          >
            Ver o que fazemos
          </a>
        </div>

        <div className="reveal mt-12 flex justify-center" style={{ animationDelay: "440ms" }}>
          <RotatingCommands items={["lançar campanha", "publicar site", "otimizar funil", "captar leads"]} />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      n: "01",
      t: "Estratégia e posicionamento de marca",
      d: "Definimos o que sua marca diz, para quem ela fala e por que alguém deveria escolher você.",
    },
    {
      n: "02",
      t: "Gestão de redes sociais",
      d: "Presença constante, com pauta, calendário e comunicação alinhada ao objetivo do negócio.",
    },
    {
      n: "03",
      t: "Tráfego pago",
      d: "Campanhas com verba controlada, público certo e leitura de resultado sem achismo.",
    },
    {
      n: "04",
      t: "Criação de conteúdo",
      d: "Textos, peças e vídeos feitos para atrair atenção e sustentar a decisão de compra.",
    },
    {
      n: "05",
      t: "Automação de marketing e CRM",
      d: "Fluxos que respondem, qualificam e acompanham o lead até virar cliente.",
    },
  ];

  return (
    <section id="servicos" className="border-y border-[#D8CBB0] bg-sand-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="reveal">
            <Eyebrow>o que fazemos</Eyebrow>
            <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
              Marketing que atrai clientes, aumenta vendas e fortalece sua marca.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
              Cada entrega nasce de um objetivo claro de negócio. Nada de campanha bonita que não
              move número nenhum.
            </p>
          </div>
          <div className="reveal relative flex justify-center md:justify-end">
            <CampaignTerminal
              title="campanha.sh"
              lines={[
                { text: "$ clickin start", tone: "gold" },
                { text: "instalando estratégia...", tone: "muted" },
                { text: "compilando conteúdo...", tone: "muted" },
                { text: "configurando tráfego pago...", tone: "muted" },
                { text: "publicando campanha...", tone: "base" },
                { text: "sucesso. resultado no ar.", tone: "ok" },
              ]}
            />
            <MetricCard
              label="tráfego"
              value="+147%"
              className="absolute -bottom-6 left-0 hidden md:block"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-[#D8CBB0] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.n}
              className="reveal bg-sand-dark p-8 transition-all duration-300 hover:bg-[#F2ECE1] hover:pl-11"
            >
              <div className="font-mono-eyebrow text-gold">{it.n}</div>
              <h3 className="font-display mt-6 text-xl font-semibold text-ink md:text-2xl">{it.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">{it.d}</p>
            </article>
          ))}
          <div className="reveal flex flex-col justify-between bg-sand-dark p-8">
            <LeadNotification />
            <p className="mt-6 text-sm leading-relaxed text-ink/70">
              A automação avisa o time no segundo em que um lead chega. Ninguém esfria esperando
              resposta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechBridge() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-28 text-sand">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
        backgroundImage:
          "linear-gradient(to right, #F2ECE1 1px, transparent 1px), linear-gradient(to bottom, #F2ECE1 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono-eyebrow reveal inline-flex items-center gap-3 text-gold">
          <span aria-hidden className="inline-block h-px w-8 bg-gold" />
          quando o marketing não basta
        </p>
        <h2 className="font-display reveal mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          A tecnologia entra em ação.
        </h2>
        <p className="reveal mt-8 text-lg text-sand/75 md:text-xl">
          Desenvolvemos sites de alta performance, landing pages e softwares personalizados para
          automatizar processos, otimizar a gestão e acelerar o crescimento do seu negócio.
        </p>
        <div className="reveal mt-10">
          <Link
            to="/tecnologia"
            className="inline-flex items-center gap-2 rounded-full border border-gold/70 px-6 py-3 font-medium text-gold transition-colors hover:bg-gold hover:text-ink-deep"
          >
            Conhecer o braço tech <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Integration() {
  const blocks = ["Marketing.", "Tecnologia.", "Performance."];
  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.945 0.018 80) 0%, oklch(0.9 0.035 80) 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="space-y-2">
          {blocks.map((b, i) => (
            <h2
              key={b}
              className="font-display reveal text-5xl font-semibold leading-[1.05] text-ink md:text-7xl"
              style={{ animationDelay: `${i * 120}ms`, color: i === 1 ? "var(--gold)" : undefined }}
            >
              {b}
            </h2>
          ))}
        </div>
        <p className="reveal mt-10 text-lg text-ink/75 md:text-xl">
          Tudo integrado em um único lugar.
        </p>
      </div>
    </section>
  );
}

function OpenStatusBadge() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const brasilia = new Date(now.getTime() + (now.getTimezoneOffset() - 180) * 60000);
      const day = brasilia.getDay();
      const hour = brasilia.getHours();
      setOpen(day >= 1 && day <= 5 && hour >= 8 && hour < 18);
    };
    compute();
    const id = window.setInterval(compute, 60000);
    return () => window.clearInterval(id);
  }, []);
  return open ? (
    <span
      className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[12px]"
      style={{ background: "rgba(34,197,94,0.12)", color: "#166534" }}
    >
      <span className="status-dot-live inline-block h-2 w-2 rounded-full bg-[#22c55e]" />
      Aberto agora
    </span>
  ) : (
    <span
      className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[12px]"
      style={{ background: "rgba(239,68,68,0.10)", color: "#991b1b" }}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[#ef4444]" />
      Fora do horário
    </span>
  );
}

function HoursBox() {
  return (
    <div className="mt-8 rounded-[4px] p-5 md:p-6" style={{ background: "#F2ECE1", border: "1px solid #D8CBB0" }}>
      <ul className="space-y-3 text-ink/85">
        <li className="flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-none text-ink/70" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Segunda a sexta-feira, das 8h às 18h</span>
        </li>
        <li className="flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-none text-ink/70" aria-hidden>
            <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12z" strokeLinejoin="round" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>Indaiatuba, SP · atendemos todo o Brasil</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block h-4 w-4" aria-hidden />
          <OpenStatusBadge />
        </li>
      </ul>
    </div>
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
          <p className="font-mono-eyebrow text-ink-deep/70">/ agência</p>
          <div className="font-display mt-8 text-6xl font-semibold leading-none text-ink-deep md:text-7xl">
            desde
            <br />
            2024
          </div>
          <p className="mt-8 max-w-xs font-mono-eyebrow text-ink-deep/70">Indaiatuba · SP</p>
        </div>

        <div className="reveal">
          <Eyebrow tone="muted">sobre a clickin</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Uma agência enxuta, com foco em resultado.
          </h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            A ClickIn cuida da estratégia, do conteúdo e das campanhas da sua marca. Quando o
            marketing sozinho não resolve, o nosso braço de tecnologia entra para construir o que
            faltava. Sem processo travado, sem estrutura inflada.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Estratégia guiada por número, não por achismo",
              "Comunicação direta, você fala com quem executa",
              "Time de marketing e time de tecnologia na mesma mesa",
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
          <HoursBox />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Preciso contratar marketing e tecnologia juntos?",
      a: "Não. Você pode começar só pelo marketing. A tecnologia entra quando fizer sentido para o seu objetivo.",
    },
    {
      q: "Tem contrato de fidelidade?",
      a: "As campanhas seguem um ciclo mensal combinado, e projetos pontuais são orçados à parte. Você sempre sabe o que está contratando.",
    },
    {
      q: "Em quanto tempo eu vejo resultado?",
      a: "Tráfego pago costuma dar leitura já nas primeiras semanas. Posicionamento e conteúdo constroem resultado em prazo mais longo, e a gente acompanha isso junto com você.",
    },
    {
      q: "O que a ClickIn desenvolve fica comigo?",
      a: "Sim, sempre. Site, sistema, domínio e contas de anúncio ficam no seu nome.",
    },
    {
      q: "Vocês atendem empresas de qual tamanho?",
      a: "De autônomos e MEIs a médias empresas. Ajustamos o escopo ao tamanho e ao orçamento do negócio.",
    },
    {
      q: "Posso começar pequeno e crescer depois?",
      a: "Pode. A maioria começa com uma frente só e vai ampliando conforme os resultados aparecem.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "Serviços recorrentes são mensais. Projetos têm entrada, parcelas durante a execução e saldo na entrega.",
    },
    {
      q: "Não entendo nada de marketing nem de tecnologia. Consigo trabalhar com vocês?",
      a: "Esse é exatamente o nosso perfil de cliente. A gente traduz tudo para a linguagem do seu dia a dia.",
    },
  ];
  return (
    <section id="faq" className="border-y border-[#D8CBB0] bg-sand-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>dúvidas frequentes</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Perguntas que todo cliente faz antes de começar.
          </h2>
        </div>
        <div className="grid gap-px bg-[#D8CBB0] md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item group bg-sand-dark transition-colors hover:bg-[#F2ECE1] open:bg-[#F2ECE1]">
              <summary className="flex items-center justify-between gap-6 px-7 py-6 font-display text-base font-bold text-ink">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="faq-icon flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink/25 text-ink/70 transition-colors group-open:border-gold group-open:text-gold"
                />
              </summary>
              <div
                className="faq-answer px-7 pb-6 text-[14.5px] leading-relaxed"
                style={{ color: "#3A352F", borderTop: "1px solid #D8CBB0" }}
              >
                {f.a}
              </div>
            </details>
          ))}
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
        <p className="font-mono-eyebrow reveal text-ink-deep/70">/ vamos começar</p>
        <h2 className="font-display reveal mt-6 text-4xl font-semibold leading-tight text-ink-deep md:text-6xl">
          ClickIn. Transformando ideias em resultados.
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
            Fale com a gente <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
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
        <TechBridge />
        <Integration />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
