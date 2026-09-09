export function Services() {
  return (
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
  );
}
