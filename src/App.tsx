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
  CheckCircle2
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
                {['Home', 'About', 'Experience', 'Education', 'Contact'].map((item) => (
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
                      'Produced and assisted in producing shop drawings for mega projects',
                      'Coordinated BIM workflows across major projects',
                      'Prepared and managed asset registers and asset information',
                      'Implemented COBie standards for data exchange',
                      'Developed irrigation network designs'
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
              © 2024 Sahal Alshethri. All rights reserved.
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
