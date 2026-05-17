import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Cpu,
  ChevronDown,
  Linkedin,
  ExternalLink,
  Building2,
  Calendar,
  Award,
  Languages,
  CheckCircle2,
  ArrowRight,
  ArrowUp,
  Layers,
  Database,
  Boxes,
  Wrench,
  FileCheck,
  AlertCircle,
  Menu,
  X,
  Droplet,
  Sprout,
  Maximize2,
  Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [activeSection, setActiveSection] = useState<string>('home')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

  // Animate sections on enter + track active section for scroll-spy nav highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
            setActiveSection(entry.target.id)
          }
        })
      },
      // Low threshold so tall sections still trigger on small mobile viewports.
      // rootMargin pulls the active-section line up (under the fixed nav) and into mid-screen.
      { threshold: 0.05, rootMargin: '-80px 0px -40% 0px' }
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Show back-to-top button after user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el
  }

  const scrollToSection = (id: string) => {
    setMobileNavOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Education', 'Contact']

  const softwareSkills = [
    'AutoCAD', 'Civil 3D', 'Revit', 'Navisworks', '3Ds Max', 'V-Ray',
    'Lumion', 'Aconex'
  ]

  const professionalSkills = [
    'Infrastructure', 'BIM Coordination', 'Shop Drawings',
    '3D Modeling', 'Rendering', 'Communication', 'Team Collaboration'
  ]

  const personalSkills = [
    'Cross-team Coordination', 'Reliable Delivery', 'Continuous Learning',
    'Team Supervision', 'Process Documentation', 'Adaptability'
  ]

  const featuredProjects = [
    {
      title: 'Diriyah Golf Course',
      category: 'BIM Coordination',
      description:
        'Managed asset information and COBie workflows for a 780,000 m² golf course development in Diriyah, coordinating irrigation, utilities and landscape systems.',
      image:
        'https://images.unsplash.com/photo-1535132011086-b8818f016104?w=1200&auto=format&fit=crop&q=80',
      alt: 'Aerial view of a sweeping golf course coastline representing the Diriyah masterplan',
      skills: ['Revit', 'Navisworks', 'Civil 3D', 'ACC', 'Dynamo', 'Aconex', 'Automation', 'Script'],
      metrics: [
        { icon: Maximize2, value: '780,000 m²', label: 'Project Area' },
        { icon: Layers, value: 'Model Coordination', label: 'Scope' },
        { icon: FileCheck, value: 'Asset Information', label: 'Workflow' },
      ],
      features: [
        { icon: Database, label: 'Asset Register' },
        { icon: FileCheck, label: 'COBie Register' },
        { icon: Layers, label: 'Coordination' },
      ],
    },
    {
      title: 'Red Sea Coastal Village',
      category: 'BIM Coordination',
      description:
        'Coordinated BIM models for a 1.5 million m² coastal village development along the Red Sea, supporting infrastructure delivery and constructible workflows across multiple disciplines.',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&auto=format&fit=crop&q=80',
      alt: 'Aerial of coastal overwater villas representing a Red Sea coastal village development',
      skills: ['Revit', 'Navisworks', 'Civil 3D', 'ACC', 'Aconex', 'Revizto'],
      metrics: [
        { icon: Maximize2, value: '1.5M m²', label: 'Project Area' },
        { icon: FileCheck, value: 'Asset Information', label: 'Workflow' },
        { icon: Layers, value: 'Model Coordination', label: 'Scope' },
      ],
      features: [
        { icon: Boxes, label: 'Modeling' },
        { icon: AlertCircle, label: 'Issue Tracking' },
        { icon: Layers, label: 'Coordination' },
      ],
    },
    {
      title: 'Wadi Greening',
      category: 'BIM Modeling',
      description:
        'Delivered Revit models and IFC documentation for a 2.4M m² wadi rehabilitation and desert greening initiative.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80',
      alt: 'Desert valley landscape representing a wadi greening and rehabilitation project',
      skills: ['Revit', 'Navisworks', 'Civil 3D', 'Automation', 'Script'],
      metrics: [
        { icon: Maximize2, value: '2,416,033 m²', label: 'Project Area' },
        { icon: Sprout, value: 'Desert Greening', label: 'Initiative Type' },
        { icon: FileCheck, value: 'Revit + IFC', label: 'Deliverables' },
      ],
      features: [
        { icon: Boxes, label: 'Revit Modeling' },
        { icon: FileCheck, label: 'IFC Drawings' },
        { icon: Wrench, label: 'Design Support' },
      ],
    },
  ]

  const additionalProjects = [
    {
      title: 'Ashfur & Turbah Desalination Towers',
      role: 'Shop Drawings',
      icon: Droplet,
      description:
        'Produced shop drawings for two water desalination plant towers in Ashfur and Turbah, Saudi Arabia.',
      tools: ['AutoCAD'],
    },
    {
      title: 'Madinah Project',
      role: 'Shop Drawings',
      icon: Building2,
      description:
        'Contributed to shop drawing production as part of the project delivery team.',
      tools: ['AutoCAD'],
    },
    {
      title: 'Roshn Nursery — Riyadh & Jeddah',
      role: 'Shop Drawings + Site Supervision',
      icon: Sprout,
      description:
        'Produced shop drawings and visited the site to supervise nursery construction across Riyadh and Jeddah locations.',
      tools: ['AutoCAD', 'Site Supervision'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation — solid bg fallback so it stays visible even when adblockers
          / privacy extensions disable backdrop-filter for fingerprinting reasons */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo: plain anchor (no aria-label "Back to top" — that exact phrase
                gets caught by generic adblocker UI filters) */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              className="flex-shrink-0 text-2xl font-bold text-amber-400 font-serif tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded px-1"
            >
              SA
            </a>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => {
                  const id = item.toLowerCase()
                  const isActive = activeSection === id
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(id)}
                      className={`relative text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:text-amber-400 ${
                        isActive ? 'text-amber-400' : 'text-muted-foreground hover:text-amber-400'
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-px bg-amber-400 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right side: Hire Me + mobile hamburger */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-background"
              >
                <a href="mailto:alshethrisahal@gmail.com">Hire Me</a>
              </Button>
              <button
                className="md:hidden p-2 text-muted-foreground hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded"
                onClick={() => setMobileNavOpen((v) => !v)}
                aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-white/10 bg-background/95 backdrop-blur-xl ${
            mobileNavOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col py-3 px-4 sm:px-6">
            {navItems.map((item) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`py-3 text-left text-sm border-b border-border/30 last:border-0 transition-colors ${
                    isActive ? 'text-amber-400' : 'text-muted-foreground hover:text-amber-400'
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={setRef('home')}
        className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible['home'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30">
              Available for Opportunities
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-serif">
              Sahal Sameer <span className="text-gradient">Alshethri</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-light">
              BIM Coordinator – Infrastructure
            </p>
            <p className="text-lg sm:text-xl text-amber-400 mb-8 font-medium">
              Design Engineer
            </p>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-10 text-base sm:text-lg leading-relaxed">
              BIM coordination and asset information delivery for infrastructure and
              landscape mega-projects across Saudi Arabia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-background shadow-lg shadow-amber-500/20"
              >
                <a
                  href="/Sahal_Alshethri_CV.pdf"
                  download="Sahal_Alshethri_CV.pdf"
                  aria-label="Download Sahal Alshethri's CV as PDF"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </div>
          
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible['home'] ? 'opacity-100' : 'opacity-0'}`}>
            <ChevronDown className="w-8 h-8 text-amber-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Credibility Stats Band — two rows: scope/scale (top) + delivery output (bottom) */}
      <section
        aria-label="Credibility highlights"
        className="relative py-10 sm:py-14 bg-secondary/40 border-y border-border/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(() => {
            // Reusable stat cell renderer — keeps both rows visually consistent
            const StatCell = ({ icon: Icon, value, label, description }: {
              icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
              value: string
              label: string
              description: string
            }) => (
              <div className="flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                <div className="flex-shrink-0 p-3 rounded-lg border border-amber-500/30 bg-amber-500/5">
                  <Icon className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient font-serif leading-none mb-2">
                    {value}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground mb-1.5">
                    {label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug">
                    {description}
                  </div>
                </div>
              </div>
            )

            const scopeStats = [
              { icon: Calendar, value: '3+', label: 'Years Experience',
                description: 'Architecture, BIM Coordination & Design Engineering' },
              { icon: Building2, value: '3+', label: 'Mega Projects',
                description: 'Infrastructure & Landscape developments' },
              { icon: Layers, value: '4.7M', label: 'm² Coordinated',
                description: 'Across infrastructure & landscape mega-projects' },
              { icon: Cpu, value: '10+', label: 'BIM Tools',
                description: 'Revit, Navisworks, Civil 3D, Dynamo, COBie & more' },
            ]

            const outputStats = [
              { icon: Database, value: '70+', label: 'Asset & COBie Registers',
                description: 'Register files prepared & maintained' },
              { icon: Boxes, value: '75+', label: 'Models Coordinated',
                description: 'Multidisciplinary BIM models reviewed & coordinated' },
              { icon: FileCheck, value: '30+', label: 'IFC & Shop Drawings',
                description: 'Drawings and documentation delivered to projects' },
            ]

            return (
              <>
                {/* Top row: scope & scale (4 stats) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border/50">
                  {scopeStats.map((s) => <StatCell key={s.label} {...s} />)}
                </div>

                {/* Divider between the two stat rows */}
                <div className="my-10 border-t border-border/40" />

                {/* Bottom row: delivery output (3 stats) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-border/50 lg:max-w-5xl lg:mx-auto">
                  {outputStats.map((s) => <StatCell key={s.label} {...s} />)}
                </div>
              </>
            )
          })()}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={setRef('about')}
        className="py-20 sm:py-32 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                Skills & <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and professional capabilities
              </p>
            </div>

            {/* Personal intro — humanizes the skill chips below */}
            <div className="max-w-3xl mx-auto mb-14 text-center">
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                I'm an Architect-turned-BIM Coordinator with hands-on experience delivering
                complex infrastructure and landscape developments across Saudi Arabia. I bridge
                <span className="text-amber-400"> design intent </span>
                and
                <span className="text-amber-400"> constructible delivery </span>
                through structured BIM workflows, asset information management, and
                multidisciplinary coordination — supporting mega-projects from masterplan to handover.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Software Skills */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <Cpu className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Software</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 text-foreground hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Skills */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Professional</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {professionalSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 text-foreground hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strengths */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Strengths</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {personalSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 text-foreground hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Languages */}
            <div className="mt-12 flex justify-center">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-amber-400" />
                    <span className="text-white font-medium">Languages:</span>
                  </div>
                  <div className="flex gap-4">
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                      Arabic (Native)
                    </Badge>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                      English (Fluent)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        ref={setRef('projects')}
        className="relative py-20 sm:py-32 overflow-hidden scroll-mt-20"
      >
        {/* Subtle ambient amber glow + grid texture for a futuristic engineering feel */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(43 74% 52%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 74% 52%) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section header: title left, action right (reference layout) */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="text-center md:text-left">
                <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                  Featured Projects
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                  Projects I've <span className="text-gradient">Worked On</span>
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  A selection of infrastructure and BIM coordination work delivered across
                  mega developments in Saudi Arabia.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('additional-projects')}
                className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold uppercase tracking-[0.15em] whitespace-nowrap self-center md:self-end"
              >
                See More Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group h-full flex flex-col bg-card/50 border-border/50 hover:border-amber-500/40 transition-all duration-500 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay to blend image into card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    {/* Subtle amber accent line on hover */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all duration-700 group-hover:w-full" />
                    {/* Category chip on the image */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/70 text-amber-400 border border-amber-500/40 backdrop-blur-md uppercase tracking-[0.12em] text-[10px] font-semibold px-2.5 py-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="px-6 pt-6 pb-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4 font-serif leading-snug group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Mini metrics strip — quick scannable project facts */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {project.metrics.map(({ icon: Icon, value, label }) => (
                        <div
                          key={label}
                          className="p-2.5 rounded-md bg-secondary/40 border border-border/50 text-center"
                        >
                          <Icon className="w-4 h-4 text-amber-400 mx-auto mb-1.5" strokeWidth={1.75} />
                          <div className="text-[11px] font-bold text-white leading-tight mb-1 break-words">
                            {value}
                          </div>
                          <div className="text-[9px] uppercase tracking-[0.08em] text-muted-foreground leading-tight">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Entire bottom block pinned via mt-auto so skills + separator + features
                        all align at the same vertical position across cards regardless of
                        title / description length above */}
                    <div className="mt-auto">
                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-secondary/40 text-foreground/75 border-border/60 text-[11px] font-normal px-2.5 py-0.5 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Separator className="bg-border/40 mb-4" />

                      {/* Feature icons row — features take natural width and the whole
                          group is centered horizontally in the card */}
                      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
                        {project.features.map(({ icon: Icon, label }) => (
                          <div
                            key={label}
                            className="flex items-center gap-1.5 text-[11px] text-muted-foreground leading-tight"
                          >
                            <Icon className="w-3.5 h-3.5 text-amber-400/80 flex-shrink-0" />
                            <span>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional smaller contributions — compact cards, no images */}
            <div id="additional-projects" className="mt-16 sm:mt-20 pt-10 border-t border-border/40 scroll-mt-24">
              <div className="text-center mb-10">
                <Badge className="mb-3 bg-amber-500/15 text-amber-400 border-amber-500/30 text-[10px] uppercase tracking-[0.15em]">
                  Additional Contributions
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                  Other Projects I've <span className="text-gradient">Contributed To</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {additionalProjects.map(({ title, role, icon: Icon, description, tools }) => (
                  <div
                    key={title}
                    className="group bg-card/40 border border-border/40 rounded-lg p-5 hover:border-amber-500/40 hover:bg-card/60 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-amber-500/10 rounded-md flex-shrink-0 border border-amber-500/20">
                        <Icon className="w-4 h-4 text-amber-400" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-white leading-tight mb-1 group-hover:text-amber-400 transition-colors">
                          {title}
                        </h4>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/80 font-semibold">
                          {role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className="bg-secondary/40 text-foreground/75 border-border/60 text-[10px] font-normal px-2 py-0.5"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={setRef('experience')}
        className="py-20 sm:py-32 bg-secondary/30 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                Work Experience
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                Professional <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My career progression in architecture and BIM coordination
              </p>
            </div>

            <div className="space-y-8">
              {/* Current Position */}
              <Card className="bg-card/50 border-amber-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Design Engineer</h3>
                      <div className="flex items-center gap-2 text-amber-400">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">Citiscape</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Oct 2023 - Present</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Driving multidisciplinary BIM coordination and asset information management
                    across mega infrastructure and landscape projects.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Managed COBie and asset information workflows for infrastructure projects.',
                      'Coordinated multidisciplinary BIM models for large-scale infrastructure developments.',
                      'Delivered shop drawings and model coordination for irrigation and landscape infrastructure projects.',
                      'Supported model integration, clash coordination, and asset data delivery.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Previous Position */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Designer</h3>
                      <div className="flex items-center gap-2 text-amber-400">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">U. Oasis Consultant Engineering</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Jul 2023 - Sep 2023</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Khobar, Saudi Arabia</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Designed a coffee shop in Hail and contributed to palace design in Al Hizam Al Thahabi,
                    developing initial interior plans and concept visuals.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Designed a coffee shop in Hail from concept to completion',
                      'Took part in palace design in Al Hizam Al Thahabi',
                      'Developed initial interior plans and concept visuals'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={setRef('education')}
        className="py-20 sm:py-32 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['education'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                Education
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                Academic <span className="text-gradient">Background</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-card/50 border-amber-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <CardContent className="p-8 sm:p-10">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-amber-500/10 rounded-xl flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor's Degree in Interior Architecture
                      </h3>
                      <div className="flex items-center gap-2 text-amber-400 mb-4">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">Imam Abdulrahman Bin Faisal University</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Graduated June 2023</span>
                      </div>
                      <Separator className="my-4 bg-border/50" />
                      <p className="text-muted-foreground">
                        Completed comprehensive studies in interior architecture, gaining expertise in 
                        design principles, 3D modeling, and architectural visualization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setRef('contact')}
        className="py-20 sm:py-32 bg-secondary/30 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                Get in Touch
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm currently open to new opportunities in architecture, design engineering, and BIM coordination
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-amber-500/10 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="w-8 h-8 text-amber-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:alshethrisahal@gmail.com" 
                    className="text-muted-foreground hover:text-amber-400 transition-colors"
                  >
                    alshethrisahal@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-amber-500/10 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-8 h-8 text-amber-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a 
                    href="tel:+966531040088" 
                    className="text-muted-foreground hover:text-amber-400 transition-colors"
                  >
                    +966 53 104 0088
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-amber-500/10 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <MapPin className="w-8 h-8 text-amber-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <a
                    href="https://www.google.com/maps/place/Riyadh+Saudi+Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-amber-400 transition-colors"
                  >
                    Riyadh, SA
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border-amber-500/30 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to collaborate?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    I'm looking for opportunities in architecture, BIM coordination, and design engineering. 
                    Let's discuss how I can contribute to your team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-amber-500 hover:bg-amber-600 text-background"
                    >
                      <a href="mailto:alshethrisahal@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                    >
                      <a
                        href="https://www.linkedin.com/in/sahal-alshethri-599186183"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-amber-400 font-serif tracking-wider">SA</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground text-sm">Sahal Alshethri</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © 2026 Sahal Alshethri. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:alshethrisahal@gmail.com" 
                className="text-muted-foreground hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+966531040088" 
                className="text-muted-foreground hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sahal-alshethri-599186183" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating back-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-500 text-background shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:shadow-amber-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}

export default App
