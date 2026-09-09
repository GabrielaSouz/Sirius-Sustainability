'use client';

import { useState } from 'react';

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

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
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
  );
}
