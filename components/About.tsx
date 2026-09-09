export function About() {
  return (
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
  );
}
