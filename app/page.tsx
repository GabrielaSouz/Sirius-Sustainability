'use client';

import { Button } from "@/components/ui/button"
import { useState } from 'react';

export default function Page() {
   const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "A Sirius Sustainability transformou completamente nossa abordagem de desenvolvimento sustentável. A qualidade é incomparável.",
      time: "2h atrás",
      name: "Carlos Silva",
      handle: "@carlossilva",
      avatar: "CS",
    },
    {
      quote: "Finalmente, uma consultoria que realmente se preocupa com acessibilidade e performance. Altamente recomendado!",
      time: "5h atrás",
      name: "Ana Oliveira",
      handle: "@anaoliveira",
      avatar: "AO",
    },
    {
      quote: "Conseguimos nossa certificação B 3x mais rápido graças à Sirius. O acompanhamento é excepcional do início ao fim.",
      time: "1d atrás",
      name: "Ricardo Santos",
      handle: "@ricardosantos",
      avatar: "RS",
    },
    {
      quote: "O suporte em métricas ESG é incrível. Não há mais dúvidas sobre como medir e relatar nosso impacto.",
      time: "2d atrás",
      name: "Marina Costa",
      handle: "@marinacosta",
      avatar: "MC",
    },
    {
      quote: "Melhor investimento que fizemos para nossa governança. Nossa equipe ama e nossos stakeholders aprovam.",
      time: "3d atrás",
      name: "Pedro Almeida",
      handle: "@pedroalmeida",
      avatar: "PA",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-emerald-950 sm:text-xl">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-black text-xs sm:h-8 sm:w-8 sm:text-sm">
              S
            </span>
            <span className="hidden sm:inline">Sirius<span className="text-emerald-600">Sustainability</span></span>
            <span className="sm:hidden">Sirius</span>
          </div>

          <nav className="hidden md:flex gap-6 text-xs font-medium text-slate-600 lg:gap-8 lg:text-sm">
            <a href="#servicos" className="transition-colors hover:text-emerald-600">
              Certificações
            </a>
            <a href="#sobre" className="transition-colors hover:text-emerald-600">
              Sobre Nós
            </a>
            <a href="#processo" className="transition-colors hover:text-emerald-600">
              Metodologia
            </a>
            <a href="#depoimentos" className="transition-colors hover:text-emerald-600">
              Depoimentos
            </a>
            <a href="#contato" className="transition-colors hover:text-emerald-600">
              Contato
            </a>
          </nav>

          <Button className="hidden rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 sm:block sm:px-6">
            Falar com Consultor
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden border-b border-emerald-900/10 bg-emerald-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-28 lg:min-h-[680px] lg:py-32">
        {/* Glows de fundo sustentáveis */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            <span className="h-px w-8 bg-emerald-500/40" />
            Consultoria ESG & Certificações
            <span className="h-px w-8 bg-emerald-500/40" />
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Acelere a transformação <br />
            <span className="text-emerald-400">sustentável do seu negócio.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:mt-8 sm:text-base md:text-lg">
            Guiamos sua empresa na jornada rumo às principais certificações ambientais e sociais do mercado global, incluindo Sistema B, ISO 14001 e métricas ESG.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <button className="rounded-full bg-emerald-500 px-6 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 sm:px-8 sm:py-4 sm:text-sm">
              Obter Certificação B
            </button>

            <button className="rounded-full border border-emerald-700/60 bg-emerald-900/40 px-6 py-3 text-xs font-semibold text-white transition-all hover:border-emerald-500 hover:bg-emerald-800/50 sm:px-8 sm:py-4 sm:text-sm">
              Conhecer Nossas Soluções
            </button>
          </div>

          {/* Impact Stats */}
          <div className="mt-12 grid w-full max-w-3xl grid-cols-3 divide-x divide-emerald-800/60 border-y border-emerald-800/60 py-4 sm:mt-16 sm:py-6 md:mt-20">
            <div className="px-2 text-center sm:px-4">
              <p className="text-xl font-bold text-emerald-400 sm:text-2xl md:text-3xl">100%</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-emerald-200/70 sm:text-[11px]">
                Aprovação em Auditorias
              </p>
            </div>

            <div className="px-2 text-center sm:px-4">
              <p className="text-xl font-bold text-emerald-400 sm:text-2xl md:text-3xl">B Lab</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-emerald-200/70 sm:text-[11px]">
                Especialistas Treinados
              </p>
            </div>

            <div className="px-2 text-center sm:px-4">
              <p className="text-xl font-bold text-emerald-400 sm:text-2xl md:text-3xl">+50kt</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-emerald-200/70 sm:text-[11px]">
                CO2 Compensado
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Services */}
<section id="servicos" className="overflow-hidden border-b border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-28">
  <div className="mx-auto max-w-7xl">
    {/* Header */}
    <div className="mb-16 max-w-2xl">
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
        <span className="h-px w-8 bg-emerald-600" />
        Nossa Expertise
      </span>
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
        Soluções completas para sua jornada sustentável
      </h2>
      <p className="mt-4 text-base text-slate-600 md:text-lg">
        Acompanhamos sua empresa desde o diagnóstico inicial até a conquista e manutenção das principais certificações mundiais.
      </p>
    </div>

    {/* Services Grid */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1. Certificação Sistema B */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-3xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Certificação B Lab</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">
          Orientação no Avaliação de Impacto B (BIA), adequação societária e melhoria contínua para obter o selo de Empresa B.
        </p>
      </div>

      {/* 2. Inventário de Carbono */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-3xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.4M9 20h6M12 4a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Gestão de Carbono</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">
          Mapeamento dos Escopos 1, 2 e 3 (GHG Protocol), estratégias de redução de emissões e programas de compensação.
        </p>
      </div>

      {/* 3. Diagnóstico e Relatórios ESG */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-3xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Relatórios ESG (GRI & SASB)</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">
          Elaboração de relatórios de sustentabilidade transparentes e estruturados para investidores e partes interessadas.
        </p>
      </div>

      {/* 4. Normas ISO (14001, 5001, etc.) */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-3xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Sistemas de Gestão ISO</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">
          Preparação e auditoria interna para certificações de Gestão Ambiental (ISO 14001) e Energia (ISO 50001).
        </p>
      </div>

      {/* 5. Cadeia de Suprimentos Sustentável */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-3xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Cadeia de Suprimentos</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">
          Avaliação de riscos socioambientais em fornecedores e implementação de políticas de compras responsáveis.
        </p>
      </div>

      {/* 6. Treinamento e Cultura ESG */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-3xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Treinamento & Governança</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">
          Capacitação de lideranças e equipes para engajar a cultura corporativa na agenda ESG e de impacto social.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Workflow */}
{/* Workflow / Timeline */}
  <section className="relative overflow-hidden border-b border-emerald-800 bg-emerald-950 px-4 py-12 text-white sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-28">
    {/* Background Pattern */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
    </div>

    <div className="relative mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-px w-8 bg-emerald-500" />
          Jornada Completa
        </span>
        <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Do diagnóstico ao selo sustentável
        </h2>
        <p className="mt-6 text-base leading-7 text-slate-400 md:text-lg">
          Um caminho estruturado para transformar a maturidade ESG da sua empresa de forma ágil e segura.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-800 md:left-1/2" />

        {/* Step 1 */}
        <div className="relative mb-12 md:mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="md:hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                  01
                </div>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Mapeamento & Diagnóstico</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Avaliamos sua empresa frente aos requisitos das principais certificações (B Corp, ISO 14001, GHG Protocol) para identificar pontos críticos e oportunidades.
              </p>
            </div>
            <div className="hidden md:flex md:h-12 md:w-12 md:shrink-0 md:items-center md:justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                01
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative mb-12 md:mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12" />
            <div className="hidden md:flex md:h-12 md:w-12 md:shrink-0 md:items-center md:justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                02
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="md:hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                  02
                </div>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Plano de Transformação</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Desenhamos metas claras, adequamos governança e implementamos políticas sustentáveis e medição de emissões adaptadas à sua operação.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative mb-12 md:mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="md:hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                  03
                </div>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Auditoria & Submissão</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Acompanhamos todo o processo junto às bancas certificadoras e órgãos reguladores, garantindo conformidade e agilidade na auditoria.
              </p>
            </div>
            <div className="hidden md:flex md:h-12 md:w-12 md:shrink-0 md:items-center md:justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                03
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12" />
            <div className="hidden md:flex md:h-12 md:w-12 md:shrink-0 md:items-center md:justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                04
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="md:hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-emerald-400 border border-emerald-800">
                  04
                </div>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Certificação & Monitoramento</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Com o selo conquistado, estruturamos relatórios transparentes e acompanhamento contínuo para manter sua empresa em evolução.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <button className="rounded-full bg-emerald-500 px-6 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:px-8 sm:py-4 sm:text-sm">
          Agendar Reunião Inicial
        </button>
      </div>
    </div>
  </section>

  {/* Sobre Nós */}
  <section id="sobre" className="overflow-hidden border-b border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
        {/* Content */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            <span className="h-px w-8 bg-emerald-600" />
            Sobre Nós
          </span>
          <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Liderando a transformação sustentável na América Latina
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            Somos uma consultoria especializada em ESG e certificações sustentáveis, com mais de 4 anos de experiência guiando empresas em sua jornada de impacto positivo.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Nossa equipe é composta por especialistas treinados pelo B Lab, auditores ISO certificados e consultores com vasta experiência em implementação de sistemas de gestão ambiental e social.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:rounded-2xl sm:p-6">
              <p className="text-2xl font-bold text-emerald-600 sm:text-3xl">+150</p>
              <p className="mt-2 text-sm text-slate-600">Empresas Certificadas</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:rounded-2xl sm:p-6">
              <p className="text-2xl font-bold text-emerald-600 sm:text-3xl">4+</p>
              <p className="mt-2 text-sm text-slate-600">Anos de Experiência</p>
            </div>
          </div>
        </div>
        {/* Image/Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 sm:rounded-3xl sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-base lg:text-lg">B Lab Certified</h3>
                <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">Consultoria oficial credenciada</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-base lg:text-lg">ISO Experts</h3>
                <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">Auditores certificados</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.4M9 20h6M12 4a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-base lg:text-lg">GHG Protocol</h3>
                <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">Inventário de carbono</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-base lg:text-lg">ESG Reporting</h3>
                <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">GRI & SASB standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Depoimentos / Social Proof */}
  <section id="depoimentos" className="overflow-hidden border-b border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-28">
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          <span className="h-px w-8 bg-emerald-600" />
          Depoimentos
        </span>
        <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Reconhecido por líderes do setor
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Junte-se a empresas que estão transformando o mercado através do impacto positivo
        </p>
      </div>

      {/* Trusted By */}
      <div className="mb-12">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Confiança de executivos em
        </p>
        <div className="flex justify-center -space-x-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.handle}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-sm font-semibold text-slate-700 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-emerald-500 md:h-14 md:w-14"
              title={`${testimonial.name} ${testimonial.handle}`}
            >
              {testimonial.avatar}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-400 md:-translate-x-16"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-400 md:translate-x-16"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:rounded-2xl sm:p-6 ${
                index === 1 ? 'border-emerald-500 shadow-lg shadow-emerald-500/10' : 'border-slate-200'
              }`}
            >
              {/* Quote */}
              <blockquote className="mb-4 text-base leading-relaxed text-slate-700 sm:mb-6 sm:text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* View Case / Info */}
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 sm:mb-6">
                <span>CASO DE SUCESSO</span>
                <span>•</span>
                <span>{testimonial.time}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-700 shadow-sm sm:h-10 sm:w-10 sm:text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  

  {/* Contato */}
  <section id="contato" className="overflow-hidden border-b border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            <span className="h-px w-8 bg-emerald-600" />
            Contato
          </span>
          <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Entre em contato
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            Tem alguma dúvida ou quer trabalhar conosco? Envie uma mensagem e
            responderemos o mais breve possível.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-900">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/10"
                    placeholder="João"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-900">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/10"
                    placeholder="Silva"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/10"
                  placeholder="joao@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-900">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/10"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="certificacao">Certificação B Corp</option>
                  <option value="iso">ISO 14001</option>
                  <option value="esg">Relatórios ESG</option>
                  <option value="carbono">Gestão de Carbono</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-900">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/10 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 sm:px-6 sm:py-4 sm:text-sm"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Informações de Contato</h3>
              <p className="mt-2 text-sm text-slate-600">
                Entre em contato através de qualquer um destes canais
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <p className="mt-1 text-sm text-slate-600">contato@sirius-sustainability.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Telefone</p>
                  <p className="mt-1 text-sm text-slate-600">+55 (11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Localização</p>
                  <p className="mt-1 text-sm text-slate-600">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:rounded-2xl sm:p-6">
              <p className="text-sm font-medium text-slate-900">Horário de Atendimento</p>
              <p className="mt-2 text-sm text-slate-600">
                Segunda - Sexta: 9:00 - 18:00
              </p>
              <p className="text-sm text-slate-600">Sábado - Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    

      {/* Footer */}
      <footer className="border-t border-emerald-900/20 bg-emerald-950 py-12 px-4 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-emerald-50 mb-3 sm:text-xl sm:mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-black text-xs sm:h-8 sm:w-8 sm:text-sm">
                  S
                </span>
                Sirius<span className="text-emerald-400">Sustainability</span>
              </div>
              <p className="text-sm text-emerald-200/60 leading-relaxed">
                Liderando a transformação sustentável das empresas na América Latina através de consultoria ESG e certificações internacionais.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-emerald-50">Serviços</h4>
              <ul className="space-y-3 text-sm text-emerald-200/60">
                <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Certificação B Corp</a></li>
                <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Gestão de Carbono</a></li>
                <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Relatórios ESG</a></li>
                <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">ISO 14001</a></li>
                <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Cadeia de Suprimentos</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-emerald-50">Empresa</h4>
              <ul className="space-y-3 text-sm text-emerald-200/60">
                <li><a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#processo" className="hover:text-emerald-400 transition-colors">Metodologia</a></li>
                <li><a href="#depoimentos" className="hover:text-emerald-400 transition-colors">Depoimentos</a></li>
                <li><a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Carreiras</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-emerald-50">Legal</h4>
              <ul className="space-y-3 text-sm text-emerald-200/60">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-emerald-800/50 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-emerald-200/60">
              © 2026 Sirius Sustainability. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800 hover:text-emerald-300 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800 hover:text-emerald-300 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800 hover:text-emerald-300 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}