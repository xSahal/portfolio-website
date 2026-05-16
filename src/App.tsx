import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  User,
  ChevronDown,
  Linkedin,
  ExternalLink,
  Building2,
  Calendar,
  Award,
  Languages,
  CheckCircle2,
  ArrowRight,
  Layers,
  Database,
  Boxes,
  Wrench,
  FileCheck,
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const softwareSkills = [
    'AutoCAD', 'Civil 3D', 'Revit', 'Navisworks', '3Ds Max', 'V-Ray',
    'Lumion', 'Aconex', 'SAP', 'Microsoft Office'
  ]

  const professionalSkills = [
    'Infrastructure', 'BIM Coordination', 'Shop Drawings',
    '3D Modeling', 'Rendering', 'Communication', 'Team Collaboration'
  ]

  const personalSkills = [
    'Adaptable', 'Quick Learner', 'Self-learning', 'On-Time Task Completion',
    'Supervising', 'CAD'
  ]

  const featuredProjects = [
    {
      title: 'Diriyah Golf Course Infrastructure',
      category: 'BIM Coordination',
      description:
        'Managed the asset register and COBie asset register across a 700,000 m² golf course development in Diriyah. Coordinated irrigation, utilities, roadworks and landscape systems for the masterplan.',
      image:
        'https://images.unsplash.com/photo-1535132011086-b8818f016104?w=1200&auto=format&fit=crop&q=80',
      skills: ['Revit', 'Navisworks', 'Civil 3D', 'ACC', 'Dynamo', 'Aconex', 'Automation', 'Script'],
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
        'Coordinated multidisciplinary BIM models for a coastal village development along the Red Sea, supporting infrastructure delivery and constructible model coordination across disciplines.',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&auto=format&fit=crop&q=80',
      skills: ['Revit', 'Navisworks', 'Civil 3D', 'ACC', 'Aconex', 'Revizto'],
      features: [
        { icon: Boxes, label: 'Model Coordination' },
        { icon: AlertCircle, label: 'Issue Tracking' },
        { icon: Layers, label: 'Coordination' },
      ],
    },
    {
      title: 'Wadi Greening',
      category: 'BIM Modeling',
      description:
        'Produced detailed Revit models and generated IFC drawings for a wadi rehabilitation and desert-greening initiative, supporting design coordination and documentation.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80',
      skills: ['Revit', 'Navisworks', 'Civil 3D', 'Automation', 'Script'],
      features: [
        { icon: Boxes, label: 'Revit Modeling' },
        { icon: FileCheck, label: 'IFC Drawings' },
        { icon: Wrench, label: 'Design Support' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gradient font-serif">SA</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-amber-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-amber-500 hover:bg-amber-600 text-background"
              onClick={() => window.open('mailto:Alshethrisahal@gmail.com')}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={setRef('home')}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
              BIM Coordinator and Design Engineer with experience in infrastructure and
              landscape projects across Saudi Arabia. Skilled in multidisciplinary BIM
              coordination, asset information management, COBie workflows, shop drawings,
              and model integration using Revit, Navisworks, and AutoCAD. Contributed to
              mega projects through coordination, technical documentation, and BIM-based
              project delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-background"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                onClick={() => scrollToSection('experience')}
              >
                View Experience
              </Button>
            </div>
          </div>
          
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible['home'] ? 'opacity-100' : 'opacity-0'}`}>
            <ChevronDown className="w-8 h-8 text-amber-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={setRef('about')}
        className="py-20 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Software Skills */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <Code2 className="w-6 h-6 text-amber-400" />
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

              {/* Personal Skills */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <User className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Personal</h3>
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

      {/* Experience Section */}
      <section 
        id="experience" 
        ref={setRef('experience')}
        className="py-20 sm:py-32 bg-secondary/30"
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
                    Contributing to major projects through BIM coordination, asset register creation, 
                    and shop drawings, supporting multiple projects execution.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Managed asset information and COBie-related data for infrastructure projects during BIM coordination workflows.',
                      'Coordinated multidisciplinary BIM models using Revit and Navisworks for large-scale infrastructure developments.',
                      'Assisted in delivery of shop drawings and model coordination for mega projects including irrigation networks and landscape infrastructure.',
                      'Supported model integration, clash coordination, and asset data preparation across project disciplines.'
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

              {/* Volunteer Experience */}
              <Card className="bg-card/50 border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Volunteer Exhibitor</h3>
                      <div className="flex items-center gap-2 text-amber-400">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">Ministry of Environment, Water and Agriculture</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Represented the university by presenting university projects',
                      'Focused on combating desertification and promoting environmental preservation'
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

      {/* Featured Projects Section */}
      <section
        id="projects"
        ref={setRef('projects')}
        className="relative py-20 sm:py-32 overflow-hidden"
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
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold uppercase tracking-[0.15em] whitespace-nowrap self-center md:self-end"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group bg-card/50 border-border/50 hover:border-amber-500/40 transition-all duration-500 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
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
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 font-serif leading-snug group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

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

                    {/* Feature icons row */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {project.features.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground"
                        >
                          <Icon className="w-3.5 h-3.5 text-amber-400/80" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={setRef('education')}
        className="py-20 sm:py-32"
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
        className="py-20 sm:py-32 bg-secondary/30"
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
                  <span className="text-muted-foreground">
                    Riyadh, Al Olaya, SA
                  </span>
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
                      size="lg" 
                      className="bg-amber-500 hover:bg-amber-600 text-background"
                      onClick={() => window.open('mailto:alshethrisahal@gmail.com')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                      onClick={() => window.open('https://www.linkedin.com/in/sahal-alshethri-599186183', '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
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
              <span className="text-xl font-bold text-gradient font-serif">SA</span>
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
    </div>
  )
}

export default App
