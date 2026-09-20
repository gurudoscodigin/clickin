import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { PixelArrow, PixelCursor } from "@/components/PixelCursor";
import {
  EMAIL,
  Eyebrow,
  Footer,
  FloatingWhats,
  Header,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  useScrollReveal,
  WA_URL,
} from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Augusto · fundador da click.in" },
      {
        name: "description",
        content:
          "Portfólio de Gabriel, fundador da click.in. Desenvolvimento de sistemas, automações, plataformas e produtos próprios.",
      },
      { property: "og:title", content: "Gabriel Augusto · fundador da click.in" },
      {
        property: "og:description",
        content:
          "Sistemas, automações e plataformas construídos do banco de dados até o cliente final.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section id="top" className="relative min-h-[min(860px,92vh)] overflow-hidden pt-36 pb-20 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="float-cursor absolute left-[8%] top-[30%] opacity-30">
          <PixelArrow size={28} />
        </div>
        <div className="float-cursor absolute right-[8%] top-[65%] opacity-20 [animation-delay:2.4s] [animation-duration:11s]">
          <PixelArrow size={36} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <p className="font-mono-eyebrow reveal text-gold">gabriel · fundador da click.in</p>
          <h1 className="font-display reveal mt-7 text-5xl font-semibold leading-[1.04] text-ink md:text-7xl">
            Desenvolvimento e automação de quem já colocou <span className="shine-text">produto próprio</span> no ar
          </h1>
          <p className="reveal mt-8 max-w-3xl text-lg leading-relaxed text-ink/75 md:text-xl">
            Sou Gabriel, fundador da click.in. Construo sistemas, automações e plataformas do zero,
            incluindo os meus próprios produtos, do banco de dados até o cliente final pagando por eles.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-sand transition-colors hover:bg-ink-deep"
            >
              Ver projetos <span aria-hidden>→</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-medium text-ink transition-colors hover:border-ink hover:bg-sand-dark"
            >
              Falar comigo
            </a>
          </div>
        </div>

        <div className="reveal mt-16 grid max-w-3xl gap-px bg-border sm:grid-cols-3">
          {[
            ["01", "Produto e operação"],
            ["02", "Código e automação"],
            ["03", "Entrega ponta a ponta"],
          ].map(([number, label]) => (
            <div key={number} className="bg-sand px-5 py-4">
              <span className="font-mono text-xs text-gold">{number}</span>
              <p className="mt-1 text-sm font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCard({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <article className="reveal border border-[#CFDDCB] bg-[#E9F0E5] p-8 md:p-10">
      <p className="font-mono-eyebrow text-gold">{label}</p>
      <h3 className="font-display mt-5 text-4xl font-semibold text-ink">{title}</h3>
      <div className="mt-6 space-y-4 leading-relaxed text-ink/75">{children}</div>
    </article>
  );
}

function About() {
  return (
    <section id="sobre" className="border-y border-[#CFDDCB] bg-sand-dark py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-3xl">
          <Eyebrow>duas frentes, uma visão</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-semibold text-ink md:text-5xl">
            Quem constrói e a empresa que transforma ideias em produto.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <AboutCard label="fundador" title="Gabriel">
            <p>
              Desenvolvedor com visão de operação. Minha formação em Comércio Exterior pela Fatec
              Indaiatuba e o trabalho com suporte a expedições na Cipec me ensinaram a enxergar o
              processo inteiro, não apenas a tela.
            </p>
            <p>
              Hoje uno prompt engineering, Git e GitHub, desenvolvimento de produtos e automação de
              bots para tirar projetos do papel com clareza e velocidade.
            </p>
          </AboutCard>
          <AboutCard label="empresa" title="click.in">
            <p>
              A click.in nasceu como software house e evoluiu para uma empresa de tecnologia com
              identidade dupla.
            </p>
            <p>
              Construímos produtos próprios e também entregamos desenvolvimento, marketing e
              branding para empresas que precisam colocar uma ideia no mercado ou melhorar uma
              operação que já existe.
            </p>
          </AboutCard>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Toda Bela",
    badge: "projeto mais recente",
    description:
      "Plataforma de agendamento multi categoria de beleza, com pagamento e split integrados para conectar profissionais, estabelecimentos e clientes.",
    stack: ["Lovable", "Supabase", "Asaas", "Resend", "PWA"],
    featured: true,
  },
  {
    title: "Sistema de prospecção de leads",
    description:
      "Fluxo para organizar oportunidades, acompanhar contatos e automatizar etapas repetitivas da prospecção comercial.",
    stack: ["Automação", "CRM", "Bots"],
  },
  {
    title: "Sistema de gestão financeira",
    description:
      "Controle operacional de entradas, saídas e indicadores para transformar movimentações em decisões mais claras.",
    stack: ["Dashboard", "Dados", "Integrações"],
  },
  {
    title: "C.MED",
    description:
      "Plataforma de saúde privada pensada para organizar jornadas, dados e comunicação em uma experiência única.",
    stack: ["Plataforma", "Saúde", "Produto"],
  },
];

function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow>projetos</Eyebrow>
            <h2 className="font-display mt-5 text-4xl font-semibold text-ink md:text-5xl">
              Produtos e sistemas que saíram da ideia e viraram operação.
            </h2>
          </div>
          <p className="font-mono text-xs text-ink/55">seleção 2024 · 2026</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`reveal relative overflow-hidden border p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10 ${
                project.featured
                  ? "border-gold bg-ink-deep text-sand md:col-span-2"
                  : "border-[#CFDDCB] bg-[#E9F0E5] text-ink"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <span className={`font-mono text-xs ${project.featured ? "text-gold-soft" : "text-gold"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.badge && (
                  <span className="rounded-full border border-gold/50 bg-gold/10 px-3 py-1 font-mono text-[11px] text-gold-soft">
                    {project.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display mt-10 text-3xl font-semibold md:text-4xl">{project.title}</h3>
              <p className={`mt-5 max-w-3xl leading-relaxed ${project.featured ? "text-sand/70" : "text-ink/70"}`}>
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] ${
                      project.featured ? "border-sand/20 text-sand/70" : "border-ink/15 text-ink/60"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const technologyGroups = [
  ["Frontend", "React · TypeScript · Tailwind"],
  ["Backend e dados", "Supabase · PostgreSQL · APIs"],
  ["Pagamentos", "Asaas · split · webhooks"],
  ["Deploy", "Cloudflare · Vercel · PWA"],
  ["Automação", "Bots · integrações · workflows"],
  ["IA aplicada", "Prompt engineering · agentes"],
  ["Comunicação", "Resend · WhatsApp · CRM"],
  ["Prototipagem", "Lovable · Figma · validação"],
];

function Technologies() {
  return (
    <section className="bg-ink-deep py-24 text-sand md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-3xl">
          <p className="font-mono-eyebrow inline-flex items-center gap-3 text-gold-soft">
            <span aria-hidden className="inline-block h-px w-8 bg-gold" />
            tecnologias
          </p>
          <h2 className="font-display mt-5 text-4xl font-semibold md:text-5xl">
            A ferramenta certa para cada parte do produto.
          </h2>
          <p className="mt-6 text-lg text-sand/65">
            Da interface ao pagamento, cada escolha serve à experiência e à operação.
          </p>
        </div>
        <div className="mt-14 grid border-l border-t border-sand/15 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map(([title, tools], index) => (
            <article key={title} className="reveal min-h-44 border-r border-b border-sand/15 p-6">
              <span className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-7 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand/60">{tools}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["Planejamento", "Objetivo, contexto, prioridade e escopo definidos antes de construir."],
  ["Desenho", "Fluxos e telas organizam a experiência e tornam a solução visível."],
  ["Desenvolvimento", "O produto ganha vida em ciclos curtos, com decisões documentadas."],
  ["Teste", "Cenários reais validam funcionamento, clareza e segurança antes da publicação."],
  ["Entrega", "Publicação, orientação de uso e acompanhamento para a operação começar bem."],
];

function Process() {
  return (
    <section id="processo" className="border-b border-[#CFDDCB] bg-sand-dark py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-3xl">
          <Eyebrow>processo</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-semibold text-ink md:text-5xl">
            Da primeira conversa ao produto em uso.
          </h2>
        </div>
        <div className="grid gap-px bg-[#CFDDCB] sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, description], index) => (
            <article key={title} className="reveal min-h-64 bg-sand-dark p-7 transition-colors hover:bg-[#E9F0E5]">
              <div className="flex items-center justify-between">
                <span className="font-mono-eyebrow text-gold">{String(index + 1).padStart(2, "0")}</span>
                {index < steps.length - 1 && <span className="hidden text-gold/60 lg:block">→</span>}
              </div>
              <h3 className="font-display mt-10 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenStatusBadge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const compute = () => {
      const parts = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        weekday: "short",
        hour: "2-digit",
        hourCycle: "h23",
      }).formatToParts(new Date());
      const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
      const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
      setOpen(!weekday.startsWith("sáb") && !weekday.startsWith("dom") && hour >= 8 && hour < 18);
    };
    compute();
    const id = window.setInterval(compute, 60000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs ${open ? "bg-[#DCF1DF] text-[#245C32]" : "bg-[#F5E1DF] text-[#8A3029]"}`}>
      <span className={`inline-block h-2 w-2 rounded-full ${open ? "status-dot-live bg-[#3B8A4D]" : "bg-[#B84A40]"}`} />
      {open ? "Aberto agora" : "Fora do horário"}
    </span>
  );
}

function Contact() {
  const contacts = [
    { label: "WhatsApp", value: "19 97416 9516", href: WA_URL, external: true },
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, external: true },
  ];
  return (
    <section id="contato" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow>contato</Eyebrow>
            <h2 className="font-display mt-5 text-4xl font-semibold text-ink md:text-6xl">
              Tem uma ideia, um gargalo ou um produto para colocar no ar?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <OpenStatusBadge />
            <p className="font-mono text-xs text-ink/50">segunda a sexta · 8h às 18h · Brasília</p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              className="reveal group border border-[#CFDDCB] bg-[#E9F0E5] p-7 transition-colors hover:border-gold hover:bg-sand-dark"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono-eyebrow text-gold">{contact.label}</p>
                <span className="text-gold transition-transform group-hover:translate-x-1">↗</span>
              </div>
              <p className="mt-8 break-words font-display text-xl font-semibold text-ink">{contact.value}</p>
            </a>
          ))}
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
        <About />
        <Projects />
        <Technologies />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}