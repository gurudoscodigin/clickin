import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <p className="font-mono-eyebrow reveal text-gold">gabriel · fundador da click.in</p>
          <h1 className="font-display reveal mt-7 text-5xl font-semibold leading-[1.03] tracking-tight text-ink md:text-7xl">
            Desenvolvimento e automação de quem já colocou <span className="shine-text">produto próprio</span> no ar
          </h1>
          <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
            Sou Gabriel, fundador da click.in. Construo sistemas, automações e plataformas do zero,
            incluindo os meus próprios produtos, do banco de dados até o cliente final pagando por eles.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-sand transition-colors hover:bg-ink/85"
            >
              Ver projetos
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-medium text-ink transition-colors hover:border-ink hover:bg-ink/5"
            >
              Falar comigo
            </a>
          </div>
        </div>

        <div className="reveal mt-16 grid max-w-3xl gap-px bg-ink/15 sm:grid-cols-3">
          {[
            ["01", "Produto e operação"],
            ["02", "Código e automação"],
            ["03", "Entrega ponta a ponta"],
          ].map(([number, label]) => (
            <div key={number} className="group bg-sand px-5 py-4 transition-colors duration-300 hover:bg-white">
              <span className="font-mono text-xs text-gold">{number}</span>
              <p className="mt-1 text-sm font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>

        <a
          href="#sobre"
          aria-label="Rolar para a seção Sobre"
          className="reveal absolute bottom-0 left-6 hidden items-center gap-2 pb-2 text-xs text-ink/40 transition-colors hover:text-ink/70 md:inline-flex"
        >
          <span className="font-mono-eyebrow">rolar</span>
          <span aria-hidden className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}

function AboutCard({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <article className="reveal group border border-ink/15 bg-white p-8 transition-colors duration-300 hover:border-ink/40 md:p-10">
      <p className="font-mono-eyebrow text-gold">{label}</p>
      <h3 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink">{title}</h3>
      <div className="mt-6 h-px w-10 bg-ink/15 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
      <div className="mt-6 space-y-4 leading-relaxed text-ink/75">{children}</div>
    </article>
  );
}

function About() {
  return (
    <section id="sobre" className="border-y border-ink/15 bg-sand-dark py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-3xl">
          <Eyebrow>duas frentes, uma visão</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Quem constrói e a empresa que transforma ideias em produto.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <AboutCard label="fundador" title="Gabriel">
            <p>
              com mais de 4 anos de atuação no desenvolvimento de software, combino uma base sólida
              em tecnologia com especializações em segurança da informação, UX/UI design, engenharia
              de prompts e arquitetura de bancos de dados. Minha formação pela Fatec me deu uma
              perspectiva analítica e sistêmica para enxergar o processo inteiro, da concepção à
              entrega. Domino práticas modernas de desenvolvimento, automação de bots e
              versionamento, transformando ideias complexas em produtos digitais funcionais, seguros
              e centrados no usuário.
            </p>
          </AboutCard>
          <AboutCard label="empresa" title="click.in">
            <p>
              A click.in nasceu com um propósito claro: transformar problemas complexos em software
              de alta performance. Atuamos no desenvolvimento de produtos digitais robustos,
              automação de processos e criação de soluções sob medida. Combinamos rigor técnico com
              forte base em arquitetura de dados, segurança da informação e experiência do usuário
              para tirar projetos do papel e otimizar operações. Mais do que escrever código, unimos
              velocidade, clareza e eficiência para entregar tecnologia que realmente funciona e
              escala negócios.
            </p>
          </AboutCard>
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string;
  badge?: string;
  description: string;
  details: string;
  stack: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Toda Bela",
    badge: "projeto mais recente",
    description:
      "Plataforma de agendamento multi categoria de beleza, com pagamento e split integrados para conectar profissionais, estabelecimentos e clientes.",
    details:
      "Nosso maior projeto até hoje. Atende lash design, nail design, cabelo e sobrancelha em um único app, com autenticação segura, assinatura para profissionais e um modelo de taxa que muda conforme a forma de pagamento. Construída em blocos, com teste real antes de cada etapa entrar no ar.",
    stack: ["Supabase", "Asaas", "Resend", "PWA"],
    featured: true,
  },
  {
    title: "Sistema de prospecção de leads",
    description:
      "Fluxo para organizar oportunidades, acompanhar contatos e automatizar etapas repetitivas da prospecção comercial.",
    details:
      "Ferramenta interna que encontra, organiza e prioriza leads automaticamente, reduzindo o trabalho manual de prospecção e entregando ao time uma fila de contatos qualificados prontos para abordagem.",
    stack: ["Automação", "CRM", "Bots"],
  },
  {
    title: "Sistema de gestão financeira",
    description:
      "Controle operacional de entradas, saídas e indicadores para transformar movimentações em decisões mais claras.",
    details:
      "Painel para controle de entradas, saídas e fluxo de caixa da própria click.in, construído para dar visibilidade real do negócio sem depender de planilha solta.",
    stack: ["Dashboard", "Dados", "Integrações"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`reveal relative overflow-hidden border p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10 ${
        project.featured
          ? "border-ink bg-ink-deep text-sand md:col-span-2"
          : "border-ink/15 bg-white text-ink"
      }`}
    >
      {project.featured && (
        <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-sand/40 md:inset-x-10" />
      )}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <span className={`font-mono text-xs ${project.featured ? "text-gold-soft" : "text-gold"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.badge && (
          <span className="rounded-full border border-sand/50 bg-sand/10 px-3 py-1 font-mono text-[11px] text-gold-soft">
            {project.badge}
          </span>
        )}
      </div>
      <h3 className="font-display mt-10 text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
      <p className={`mt-5 max-w-3xl leading-relaxed ${project.featured ? "text-sand/70" : "text-ink/70"}`}>
        {project.description}
      </p>
      {open && (
        <p className={`mt-4 max-w-3xl leading-relaxed ${project.featured ? "text-sand/70" : "text-ink/70"}`}>
          {project.details}
        </p>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`mt-6 inline-flex items-center gap-1.5 font-mono text-xs underline underline-offset-4 ${
          project.featured ? "text-gold-soft" : "text-gold"
        }`}
      >
        {open ? "ver menos" : "ver mais"}
        <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>↓</span>
      </button>
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
  );
}

function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow>projetos</Eyebrow>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Produtos e sistemas que saíram da ideia e viraram operação.
            </h2>
          </div>
          <p className="font-mono text-xs text-ink/55">seleção 2024 · 2026</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
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
        <div className="reveal max-w3xl">
          <p className="font-mono-eyebrow inline-flex items-center gap-3 text-gold-soft">
            <span aria-hidden className="inline-block h-px w-8 bg-sand" />
            tecnologias
          </p>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            A ferramenta certa para cada parte do produto.
          </h2>
          <p className="mt-6 text-lg text-sand/65">
            Da interface ao pagamento, cada escolha serve à experiência e à operação.
          </p>
        </div>
        <div className="mt-14 grid border-l border-t border-sand/15 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map(([title, tools], index) => (
            <article key={title} className="reveal min-h-44 border-r border-b border-sand/15 p-6 transition-colors duration-300 hover:bg-white/[0.03]">
              <span className="font-mono text-xs text-gold-soft">{String(index + 1).padStart(2, "0")}</span>
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
    <section id="processo" className="border-b border-ink/15 bg-sand-dark py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-3xl">
          <Eyebrow>processo</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Da primeira conversa ao produto em uso.
          </h2>
        </div>
        <div className="grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, description], index) => (
            <article key={title} className="reveal min-h-64 bg-sand-dark p-7 transition-colors hover:bo-white">
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

function Contact() {
  const contacts = [
    { label: "WhatsApp", value: "19 97416 9516", href: WA_URL, external: true },
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, external: true },
  ];
  return (
    <section id="contato" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-3xl">
          <Eyebrow>contato</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Tem uma ideia, um gargalo ou um produto para colocar no ar?
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              className="reveal group border border-ink/15 bg-white p-7 transition-colors hover:border-ink hover:bg-sand-dark"
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
