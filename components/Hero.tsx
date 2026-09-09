export function Hero() {
  return (
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
  );
}
