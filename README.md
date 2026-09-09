# Sirius Sustainability

Uma landing page moderna e responsiva para a Sirius Sustainability, uma consultoria especializada em ESG e certificações sustentáveis na América Latina.

## Objetivo

O objetivo deste projeto é apresentar de forma profissional os serviços de consultoria ESG da Sirius Sustainability, incluindo:
- Certificação B Lab (Sistema B)
- Gestão de Carbono (GHG Protocol)
- Relatórios ESG (GRI & SASB)
- Sistemas de Gestão ISO (14001, 50001)
- Cadeia de Suprimentos Sustentável
- Treinamento e Governança

A página foi projetada para converter visitantes em leads qualificados através de uma experiência visual atraente e conteúdo informativo.

## Estrutura do Projeto

```
sirius-sustainability/
├── app/
│   ├── layout.tsx          # Layout raiz da aplicação
│   └── page.tsx            # Página principal (landing page)
├── components/
│   └── ui/                 # Componentes reutilizáveis (shadcn/ui)
├── lib/                    # Utilitários e configurações
├── public/                 # Arquivos estáticos
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.ts      # Configuração Tailwind CSS
└── next.config.ts          # Configuração Next.js
```

### Seções da Landing Page

A página principal (`app/page.tsx`) contém as seguintes seções:

1. **Header** - Navegação fixa com logo e links para seções
2. **Hero** - Seção principal com chamada para ação e estatísticas de impacto
3. **Services** - Grid de 6 serviços oferecidos pela consultoria
4. **Workflow** - Timeline de 4 etapas do processo de certificação
5. **About** - Seção "Sobre Nós" com credenciais e estatísticas da empresa
6. **Testimonials** - Carrossel de depoimentos de clientes
7. **Contact** - Formulário de contato e informações de localização
8. **Footer** - Links organizados por categoria e redes sociais

## Tecnologias Utilizadas

### Frontend Framework
- **Next.js 16.2.6** - Framework React para aplicações web com Server Components e otimizações automáticas
- **React 19.2.4** - Biblioteca JavaScript para construção de interfaces de usuário

### Estilização
- **Tailwind CSS 4** - Framework de CSS utility-first para estilização rápida e responsiva
- **shadcn/ui** - Biblioteca de componentes UI reutilizáveis e acessíveis
- **Lucide React** - Biblioteca de ícones SVG modernos e customizáveis

### Ferramentas de Desenvolvimento
- **TypeScript 5** - Supertipo JavaScript para desenvolvimento type-safe
- **ESLint 9** - Linter para identificar e reportar problemas no código
- **Prettier 3.8.3** - Formatador de código automático
- **prettier-plugin-tailwindcss** - Plugin para ordenar classes do Tailwind CSS

### Bibliotecas Adicionais
- **class-variance-authority** - Gerenciamento de variantes de componentes
- **cn** - Utilitário para concatenação condicional de classes CSS
- **next-themes** - Suporte para temas claro/escuro
- **tw-animate-css** - Animações CSS para Tailwind

## Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Iniciar servidor de produção
npm run start

# Executar linter
npm run lint

# Formatar código
npm run format

# Verificar tipos TypeScript
npm run typecheck
```

## Responsividade

O site foi desenvolvido com abordagem mobile-first, garantindo uma experiência otimizada em todos os dispositivos:
- **Mobile** (< 640px) - Layout simplificado com elementos reduzidos
- **Tablet** (640px - 1024px) - Layout adaptado com 2 colunas
- **Desktop** (> 1024px) - Layout completo com 3-4 colunas

## Paleta de Cores

- **Primary**: Emerald (verde sustentável)
- **Background**: Slate (tons neutros)
- **Accent**: Emerald-400 para destaques
- **Dark**: Emerald-950 para seções escuras

## Funcionalidades

- Navegação suave com âncoras para seções
- Carrossel interativo de depoimentos
- Formulário de contato com validação visual
- Animações e transições sutis
- Header fixo com backdrop blur
- Design totalmente responsivo
