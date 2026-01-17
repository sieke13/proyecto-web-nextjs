'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import { 
  Leaf, 
  Droplets, 
  Recycle, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Clock,
  Sprout,
  Wind,
  Thermometer,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Calendar,
  Menu,
  X,
  ChevronRight,
  Zap
} from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ImpactSection />
      <BentoGridSection />
      <JustificacionSection />
      <AcopioSection />
      <IngenieriaProcesoSection />
      <MaquinariaSection />
      <ProcessSection />
      <FinancialSection />
      <InvestmentTable />
      <RiesgosSection />
      <CrecimientoSection />
      <CTASection />
      <Footer />
    </div>
  );
}

// Navbar con Glassmorphism y Menu Mobile Responsive
function Navbar({ scrolled, mobileMenuOpen, setMobileMenuOpen }: { 
  scrolled: boolean; 
  mobileMenuOpen: boolean; 
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const navLinks = [
    { href: '#impacto', label: 'Impacto', icon: TrendingUp },
    { href: '#proceso', label: 'Proceso', icon: Recycle },
    { href: '#inversion', label: 'Inversión', icon: DollarSign }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-emerald-500/5' 
          : 'bg-gradient-to-b from-white/80 to-transparent backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Mejorado */}
            <a href="#" className="flex items-center gap-4 lg:gap-5 group">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <Image
                  src="/assets/images/logo2.png"
                  alt="Bio-Fertilizantes Cuitzeo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                  Cuitzeo
                </span>
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-emerald-700 uppercase tracking-wider">
                  Bio-Fertilizantes
                </span>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="group relative px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-emerald-800 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <link.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </span>
                  <span className="absolute inset-0 bg-emerald-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white text-sm font-bold rounded-full overflow-hidden shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:shadow-emerald-900/40 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Contactar
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed top-20 right-0 w-full sm:w-80 h-[calc(100vh-5rem)] bg-white z-40 lg:hidden shadow-2xl transition-transform duration-500 ease-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 space-y-6">
          {/* Mobile Nav Links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-emerald-50 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <link.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <span className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    {link.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white text-base font-bold rounded-2xl shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:shadow-emerald-900/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contactar Ahora
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile Footer Info */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Leaf className="w-5 h-5 text-emerald-700" />
              <span className="font-medium">Inversión mínima: <strong className="text-gray-900">$20,000 MXN</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
              <Clock className="w-5 h-5 text-emerald-700" />
              <span className="font-medium">ROI: <strong className="text-gray-900">8-9 meses</strong></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-gray-50 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
                <Leaf className="w-4 h-4 text-emerald-700" />
                <span className="text-sm font-semibold text-emerald-900">Cuenca de Cuitzeo, México</span>
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Plan de Negocios 2026</div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
              Planta de Procesamiento de{' '}
              <span className="text-emerald-800">Biomasa</span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl font-bold text-gray-900">
                Bio-Fertilizantes Cuitzeo
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                <strong className="text-gray-900">Fertilizante Orgánico Sanitizado</strong> mediante transformación de lirio acuático y residuos agrícolas. 
                Tecnología mecánica de 7HP para recuperación ambiental con rentabilidad comprobada.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center gap-2">
                Ver Plan de Inversión
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-full hover:border-emerald-800 hover:text-emerald-800 transition-all">
                Descargar PDF
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-3xl font-black text-emerald-800">$20K</div>
                <div className="text-sm text-gray-600">Inversión Inicial</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-black text-emerald-800">8-9 meses</div>
                <div className="text-sm text-gray-600">Retorno ROI</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-black text-emerald-800">62%</div>
                <div className="text-sm text-gray-600">Margen</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/f768x1-807129_807256_5050.png"
                alt="Laguna de Cuitzeo"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Impact Section con Contadores
function ImpactSection() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1(prev => prev < 100 ? prev + 2 : 100);
    }, 30);
    const timer2 = setInterval(() => {
      setCount2(prev => prev < 85 ? prev + 2 : 85);
    }, 35);
    const timer3 = setInterval(() => {
      setCount3(prev => prev < 12 ? prev + 1 : 12);
    }, 100);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <section id="impacto" className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-black text-gray-900">
            Impacto Medible
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada tonelada procesada contribuye a la restauración del ecosistema
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Recycle className="w-8 h-8 text-emerald-800" />
            </div>
            <div className="text-5xl font-black text-gray-900 mb-2">{count1}+</div>
            <div className="text-lg font-semibold text-gray-600">Toneladas/mes procesadas</div>
          </div>

          <div className="group p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Droplets className="w-8 h-8 text-blue-800" />
            </div>
            <div className="text-5xl font-black text-gray-900 mb-2">{count2}%</div>
            <div className="text-lg font-semibold text-gray-600">Reducción contaminación</div>
          </div>

          <div className="group p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-amber-800" />
            </div>
            <div className="text-5xl font-black text-gray-900 mb-2">{count3}+</div>
            <div className="text-lg font-semibold text-gray-600">Familias beneficiadas</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bento Grid Section
function BentoGridSection() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl font-black text-gray-900">
            Ventajas Competitivas
          </h2>
          <p className="text-xl text-gray-600">
            Por qué somos diferentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Grande */}
          <div className="lg:col-span-2 lg:row-span-2 p-10 bg-gradient-to-br from-emerald-800 to-emerald-700 rounded-3xl text-white space-y-6 hover:scale-[1.02] transition-transform">
            <Leaf className="w-12 h-12" />
            <h3 className="text-3xl font-black">Materia Prima Infinita</h3>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Acceso ilimitado al lirio acuático de la Laguna de Cuitzeo. Compramos por kilo a pescadores locales, 
              generando ingreso para la comunidad mientras limpiamos el ecosistema.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-semibold">Costo de materia prima: $0</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white border-2 border-gray-200 rounded-3xl space-y-4 hover:border-emerald-800 transition-all">
            <Sprout className="w-10 h-10 text-emerald-800" />
            <h3 className="text-2xl font-bold text-gray-900">Rico en Nitrógeno</h3>
            <p className="text-gray-600">
              Nuestro compost supera fertilizantes químicos en contenido orgánico
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white border-2 border-gray-200 rounded-3xl space-y-4 hover:border-emerald-800 transition-all">
            <Target className="w-10 h-10 text-emerald-800" />
            <h3 className="text-2xl font-bold text-gray-900">Mercado Cautivo</h3>
            <p className="text-gray-600">
              Demanda local creciente por alternativas orgánicas
            </p>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-2 p-8 bg-gray-50 rounded-3xl space-y-4">
            <Droplets className="w-10 h-10 text-blue-800" />
            <h3 className="text-2xl font-bold text-gray-900">Saneamiento Activo</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada bulto producido equivale a 45kg de lirio extraído. Contribuimos directamente 
              a la recuperación de la Laguna de Cuitzeo, patrimonio ecológico de Michoacán.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Justificación del Negocio
function JustificacionSection() {
  const justificaciones = [
    {
      icon: Recycle,
      title: 'Suministro Inagotable',
      description: 'El lirio es una plaga persistente que se regenera continuamente, garantizando materia prima gratuita los 365 días del año.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Sustitución de Importaciones',
      description: 'Ante el alza de fertilizantes químicos, el mercado demanda alternativas orgánicas locales que mejoren la salud del suelo a largo plazo.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Impacto Social y Ambiental',
      description: 'El proyecto sanea el cuerpo de agua local y ofrece una fuente de ingresos extra a la comunidad de pescadores.',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <Target className="w-4 h-4 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-900">Fundamentos del Proyecto</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900">
            Justificación del Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tres pilares que garantizan la viabilidad y sostenibilidad del proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {justificaciones.map((item, index) => (
            <div key={index} className="group p-8 bg-gray-50 rounded-3xl hover:bg-white border-2 border-transparent hover:border-emerald-200 transition-all">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Plan de Acopio Section
function AcopioSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
                <Package className="w-4 h-4 text-emerald-700" />
                <span className="text-sm font-semibold text-emerald-900">Estrategia Operativa</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Plan de Operaciones
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Modelo de acopio que minimiza riesgos mediante la tercerización de la cosecha
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border-l-4 border-emerald-600">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Centro de Acopio</h3>
                  <p className="text-gray-600">
                    Tarifa de compra: <strong className="text-emerald-700">$0.50 - $1.00 MXN/kg</strong> de lirio escurrido entregado en planta. Sin necesidad de contratación masiva.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border-l-4 border-blue-600">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wind className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Procesamiento</h3>
                  <p className="text-gray-600">
                    Maquinaria de <strong>7 HP</strong> para triturar lirio con residuos de garbanzo y poda, optimizando Nitrógeno y Carbono.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border-l-4 border-amber-600">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Compostaje Controlado</h3>
                  <p className="text-gray-600">
                    Fermentación de <strong>3-4 meses</strong> con monitoreo de temperatura. Producto libre de patógenos y semillas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/499940957_122173430576351432_3165037581214291008_n.jpg"
                alt="Centro de Acopio"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-black text-emerald-800">365</div>
              <div className="text-sm text-gray-600 font-semibold">días/año operando</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ingeniería del Proceso - 5 Fases Técnicas
function IngenieriaProcesoSection() {
  const fases = [
    {
      fase: 'A',
      titulo: 'Acopio y Deshidratación',
      duracion: 'Días 1-3',
      descripcion: 'El lirio fresco tiene 90% de agua y no puede triturarse inmediatamente.',
      detalles: [
        'Recolección con pago directo a pescadores por kilo',
        'Oreado en plancha de cemento bajo el sol por 48-72 horas',
        'Pérdida del 40-50% de peso en agua, volviéndose fibroso'
      ],
      icon: Droplets,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      fase: 'B',
      titulo: 'Trituración Mecánica',
      duracion: 'Día 4',
      descripcion: 'La trituradora de 7 HP reduce el lirio a partículas óptimas para compostaje.',
      detalles: [
        'Reducción de partícula a trozos de 1-3 cm',
        'Aumenta superficie de contacto para bacterias',
        'Sin triturar: 1 año de compostaje. Triturado: 3-4 meses'
      ],
      icon: Wind,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      fase: 'C',
      titulo: 'Montaje de Pilas y Mezcla',
      duracion: 'Día 5',
      descripcion: 'Equilibrio estratégico de Carbono y Nitrógeno para compostaje acelerado.',
      detalles: [
        'Mezcla: 70% Lirio + 20% Garbanzo/rastrojo + 10% Estiércol',
        'Hileras de 1.5m de base × 1m de alto',
        'Balance C:N óptimo para fermentación'
      ],
      icon: Recycle,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      fase: 'D',
      titulo: 'Compostaje Controlado',
      duracion: 'Meses 2-4',
      descripcion: 'Fase de sanitización con control térmico estricto para producto certificable.',
      detalles: [
        'Termofilia: Temperatura entre 55°C y 65°C',
        'Monitoreo con termómetro de sonda',
        'Elimina patógenos (E. coli, Salmonella) y semillas de maleza'
      ],
      icon: Thermometer,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      fase: 'E',
      titulo: 'Control de Calidad',
      duracion: 'Mes 4',
      descripcion: 'Pruebas de laboratorio y empaque premium para garantía de producto.',
      detalles: [
        'Análisis NPK (Nitrógeno, Fósforo, Potasio)',
        'Screening de metales pesados',
        'Empaque en costales de 20kg con etiquetado'
      ],
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">Ingeniería del Proceso</span>
          </div>
          <h2 className="text-5xl font-black">
            Metodología de 5 Fases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proceso científico validado para transformar biomasa invasiva en fertilizante certificable. 
            <strong className="text-white"> No es simple pudrimiento</strong>, es manufactura biológica controlada.
          </p>
        </div>

        <div className="space-y-8">
          {fases.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Fase Number */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl font-black text-white">{item.fase}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl font-black">{item.titulo}</h3>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-bold text-emerald-300">
                        {item.duracion}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300">{item.descripcion}</p>
                  </div>

                  {/* Detalles List */}
                  <ul className="space-y-3">
                    {item.detalles.map((detalle, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl border-2 border-emerald-400/30">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-gray-900" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-3">Garantía de Calidad Industrial</h4>
              <p className="text-lg text-gray-200 leading-relaxed">
                El control térmico en la <strong className="text-emerald-300">Fase D (55-65°C)</strong> es crítico: 
                sanitiza el producto eliminando patógenos y garantiza que sea apto para 
                <strong className="text-white"> certificación OMRI</strong> en fase futura, 
                accediendo al mercado premium de exportación orgánica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Riesgos y Mitigación
function RiesgosSection() {
  const riesgos = [
    {
      riesgo: 'Desgaste de Maquinaria',
      mitigacion: 'Fondo de reserva para mantenimiento mensual y afilado de cuchillas',
      icon: Wind,
      color: 'border-orange-500 bg-orange-50'
    },
    {
      riesgo: 'Contaminantes en el Lirio',
      mitigacion: 'Enfoque inicial en mercado ornamental; análisis de laboratorio para mercado alimenticio en Fase 2',
      icon: CheckCircle2,
      color: 'border-blue-500 bg-blue-50'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-black text-gray-900">
            Gestión de Riesgos
          </h2>
          <p className="text-xl text-gray-600">
            Identificación proactiva y estrategias de mitigación
          </p>
        </div>

        <div className="space-y-6">
          {riesgos.map((item, index) => (
            <div key={index} className={`p-8 rounded-3xl border-l-4 ${item.color} transition-all hover:shadow-lg`}>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <item.icon className="w-7 h-7 text-gray-700" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Riesgo</div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.riesgo}</h3>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-1">Mitigación</div>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.mitigacion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Crecimiento Section
function CrecimientoSection() {
  const estrategias = [
    {
      title: 'Diversificación',
      description: 'Creación de mezclas especiales (Lirio-Garbanzo) para cultivos específicos',
      icon: Sprout,
      highlight: 'Producto Premium'
    },
    {
      title: 'Certificación OMRI',
      description: 'Búsqueda del sello para vender a productores de exportación (aguacate/berries)',
      icon: CheckCircle2,
      highlight: 'Mercado Premium'
    },
    {
      title: 'Resiliencia Operativa',
      description: 'En sequía, la maquinaria procesa rastrojo de maíz y otros residuos agrícolas',
      icon: Recycle,
      highlight: 'Negocio Activo 365 días'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-emerald-200" />
            <span className="text-sm font-semibold text-emerald-100">Visión a Futuro</span>
          </div>
          <h2 className="text-5xl font-black">
            Estrategia de Crecimiento
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Escalabilidad diseñada desde el día uno
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {estrategias.map((item, index) => (
            <div key={index} className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-emerald-200" />
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-500/30 rounded-full text-xs font-bold text-emerald-100 mb-4">
                {item.highlight}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-emerald-100 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-yellow-300" />
            <h3 className="text-3xl font-black">Conclusión</h3>
          </div>
          <p className="text-xl text-emerald-50 leading-relaxed">
            Este proyecto representa una inversión de <strong className="text-white">bajo riesgo</strong>, con 
            activos tangibles y una rentabilidad superior a los instrumentos financieros tradicionales. 
            No solo buscamos una ganancia económica, sino{' '}
            <strong className="text-yellow-300">liderar la recuperación ecológica de nuestra región</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// Especificaciones de Maquinaria
function MaquinariaSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-emerald-600 to-emerald-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen/Visual */}
          <div className="relative">
            <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-12 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wind className="w-20 h-20 text-emerald-700" />
                </div>
                <div className="text-white space-y-2">
                  <div className="text-6xl font-black">7 HP</div>
                  <div className="text-2xl font-bold text-emerald-200">Motor a Gasolina</div>
                  <div className="text-lg text-emerald-100">212cc Aprox.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Especificaciones */}
          <div className="text-white space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Target className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-semibold text-emerald-200">Activo Principal</span>
              </div>
              <h2 className="text-5xl font-black mb-4">
                Trituradora de Biomasa
              </h2>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Garantía de operación continua con mínimo mantenimiento. 
                Diseñada para procesar material orgánico de alta humedad.
              </p>
            </div>

            {/* Especificaciones Técnicas */}
            <div className="space-y-4">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Capacidad Operativa</h4>
                    <p className="text-emerald-100">
                      Diseñada para triturar <strong className="text-white">ramas verdes hasta 2-3 pulgadas</strong>. 
                      El lirio acuático es mucho más blando que madera, por lo que la máquina trabaja con holgura sin forzarse.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Seguridad del Activo</h4>
                    <ul className="space-y-2 text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span><strong className="text-white">Cuchillas reversibles</strong> de acero templado. Se afilan múltiples veces antes de requerir cambio.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span><strong className="text-white">Mantenimiento mínimo:</strong> Cambio de aceite cada 50 horas y limpieza de filtro.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span><strong className="text-white">Costo operativo:</strong> $2 MXN por bulto producido.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Versatilidad Estratégica</h4>
                    <p className="text-emerald-100">
                      Si no hay lirio, la máquina procesa <strong className="text-white">rastrojo de maíz y garbanzo</strong> sin modificaciones. 
                      Esto protege la inversión ante cambios climáticos o sequías, manteniendo el negocio activo 365 días al año.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Valor de Respaldo */}
            <div className="p-8 bg-yellow-400 text-gray-900 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="w-10 h-10 font-bold" />
                <h4 className="text-2xl font-black">Valor de Respaldo</h4>
              </div>
              <p className="text-lg font-semibold leading-relaxed">
                <strong className="text-3xl font-black">80%</strong> de la inversión está respaldado por maquinaria con 
                <strong> valor de reventa</strong>. En caso de liquidación, el activo mantiene su valor comercial en mercado secundario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Recolección',
      description: 'Compra directa a pescadores locales por kilo',
      icon: Droplets,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Trituración',
      description: 'Trituradora 7HP reduce a partículas finas',
      icon: Wind,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      number: '03',
      title: 'Compostaje',
      description: 'Mezcla con residuos de garbanzo local',
      icon: Recycle,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      title: 'Maduración',
      description: '60-90 días de proceso controlado',
      icon: Thermometer,
      color: 'from-amber-500 to-amber-600'
    },
    {
      number: '05',
      title: 'Empaque',
      description: 'Bultos de 40-50kg certificados',
      icon: Package,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="proceso" className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-5xl font-black text-gray-900">
            Proceso Industrial
          </h2>
          <p className="text-xl text-gray-600">
            De la laguna al campo en 5 etapas
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all space-y-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-black text-gray-400">{step.number}</div>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Financial Section
function FinancialSection() {
  const costos = [
    { concepto: 'Materia Prima (Lirio)', monto: '$20.00', detalle: '20-30kg de lirio oreado' },
    { concepto: 'Energía (Gasolina/Aceite)', monto: '$6.00', detalle: 'Por ciclo de trituración' },
    { concepto: 'Empaque (Costal)', monto: '$10.00', detalle: 'Polipropileno 20kg' },
    { concepto: 'Mantenimiento Máquina', monto: '$2.00', detalle: 'Prorrateado mensual' }
  ];

  const metrics = [
    { label: 'Costo Total Producción', value: '$38 MXN', sublabel: 'por bulto de 20kg', icon: DollarSign, color: 'text-red-600' },
    { label: 'Precio de Venta', value: '$100 MXN', sublabel: 'por bulto', icon: TrendingUp, color: 'text-emerald-600' },
    { label: 'Utilidad Bruta', value: '$62 MXN', sublabel: '62% de margen', icon: BarChart3, color: 'text-blue-600' },
    { label: 'Punto de Equilibrio', value: '322 bultos', sublabel: 'para recuperar inversión', icon: Target, color: 'text-purple-600' }
  ];

  return (
    <section id="inversion" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <DollarSign className="w-4 h-4 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-900">Análisis Financiero</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900">
            Estructura de Costos Detallada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparencia total en cada peso invertido. Costeo por bulto de 20kg de producto terminado.
          </p>
        </div>

        {/* Tabla de Costos */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
            <h3 className="text-2xl font-black text-white">Desglose de Costos por Bulto</h3>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              {costos.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-lg">{item.concepto}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.detalle}</div>
                  </div>
                  <div className="text-2xl font-black text-emerald-800">{item.monto}</div>
                </div>
              ))}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl mt-6">
                <div className="text-xl font-black text-white">COSTO TOTAL DE PRODUCCIÓN</div>
                <div className="text-3xl font-black text-emerald-400">$38.00 MXN</div>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas Clave */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="p-8 bg-white border-2 border-gray-200 rounded-3xl space-y-4 hover:border-emerald-600 hover:shadow-2xl transition-all group">
              <metric.icon className={`w-10 h-10 ${metric.color} group-hover:scale-110 transition-transform`} />
              <div>
                <div className={`text-4xl font-black ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-gray-500 mt-2">{metric.sublabel}</div>
              </div>
              <div className="text-sm font-bold text-gray-700">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Proyección de Ingresos */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl text-white shadow-2xl">
            <h3 className="text-3xl font-black mb-6">Proyección Mensual</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-lg font-semibold text-emerald-100">Producción</span>
                <span className="text-2xl font-black">100 bultos</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-lg font-semibold text-emerald-100">Ingreso Bruto</span>
                <span className="text-2xl font-black">$10,000 MXN</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-lg font-semibold text-emerald-100">Costos Totales</span>
                <span className="text-2xl font-black">$3,800 MXN</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <span className="text-xl font-black">Ganancia Neta</span>
                <span className="text-4xl font-black text-yellow-300">$6,200 MXN</span>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white border-2 border-gray-200 rounded-3xl">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Cronograma ROI</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-black text-emerald-700">1</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mes 1: Inversión Inicial</div>
                  <div className="text-sm text-gray-600">Compra de maquinaria y primera recolección</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-black text-blue-700">2-4</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Meses 2-4: Fermentación</div>
                  <div className="text-sm text-gray-600">Proceso de compostaje. Inventario en proceso.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-black text-purple-700">5-8</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Meses 5-8: Ventas Activas</div>
                  <div className="text-sm text-gray-600">Generación de $24,800 MXN. Inversión recuperada.</div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200">
              <div className="text-sm font-bold text-emerald-800 mb-1">TIEMPO DE RECUPERACIÓN</div>
              <div className="text-4xl font-black text-emerald-900">8-9 meses</div>
              <div className="text-sm text-gray-600 mt-1">Incluye etapa de maduración biológica</div>
            </div>
          </div>
        </div>

        {/* Respaldo del Activo */}
        <div className="mt-12 p-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-white">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-gray-900" />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-black">Capital Protegido</h3>
              <p className="text-xl text-gray-200 leading-relaxed">
                El <strong className="text-yellow-300">80% de la inversión</strong> está respaldado por maquinaria con valor de reventa. 
                Rentabilidad del <strong className="text-emerald-400">62%</strong> superior a cualquier instrumento bancario, 
                con el beneficio adicional de ser un <strong className="text-white">negocio sustentable</strong> que mejora la comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Investment Table Minimalista
function InvestmentTable() {
  const items = [
    { concept: 'Maquinaria', description: 'Trituradora Gasolina 7 HP', amount: 16000 },
    { concept: 'Herramientas', description: 'Báscula, Bieldos, Criba', amount: 2500 },
    { concept: 'Operación', description: 'Insumos y Seguridad', amount: 1500 }
  ];

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section id="inversion" className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl font-black text-gray-900">
            Desglose de Inversión
          </h2>
          <p className="text-xl text-gray-600">
            CAPEX inicial transparente
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg overflow-hidden">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-6 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="text-lg font-bold text-gray-900">{item.concept}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                </div>
                <div className="text-2xl font-black text-emerald-800">
                  ${item.amount.toLocaleString()} <span className="text-base font-normal text-gray-500">MXN</span>
                </div>
              </div>
            ))}
            
            <div className="flex items-center justify-between pt-6 mt-6 border-t-2 border-emerald-800">
              <div className="text-2xl font-black text-gray-900">Inversión Total</div>
              <div className="text-4xl font-black text-emerald-800">
                ${total.toLocaleString()} <span className="text-xl font-normal text-gray-500">MXN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-amber-700" />
            <p className="text-sm font-semibold text-amber-900">
              Propuesta vigente: Enero 2026 | Presentado por Gerardo Avendaño
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
          Invierte en el Futuro{' '}
          <span className="text-emerald-800">Sustentable</span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sé parte de la solución. Rentabilidad comprobada con impacto ambiental real.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <button className="group px-10 py-5 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center gap-3">
            Agendar Reunión
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-10 py-5 border-2 border-gray-300 text-gray-900 text-lg font-bold rounded-full hover:border-emerald-800 hover:text-emerald-800 transition-all">
            Ver Documentación
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/images/logo2.png"
                alt="Logo"
                fill
                className="object-contain invert"
              />
            </div>
            <span className="text-xl font-bold text-white">Bio-Fertilizantes Cuitzeo</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © 2026 Bio-Fertilizantes Cuitzeo. Economía Circular.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Cuitzeo, Guanajuato, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
