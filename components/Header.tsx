import { Button } from "@/components/ui/button";

export function Header() {
  return (
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
  );
}
