export function Workflow() {
  return (
    <section id="processo" className="relative overflow-hidden border-b border-emerald-800 bg-emerald-950 px-4 py-12 text-white sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-28">
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
  );
}
