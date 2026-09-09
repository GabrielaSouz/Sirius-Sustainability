export function Contact() {
  return (
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
                  <p className="mt-1 text-sm text-slate-600">+55 (19) 99790-2466</p>
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
  );
}
