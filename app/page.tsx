'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AshutoshMemorialSchool() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const navItems = [
    {
      title: 'Home',
      href: 'home',
    },
    {
      title: 'Messages',
      submenu: [
        { title: "Chairman's Message", href: 'chairman-message' },
        { title: "Director's Desk", href: 'director-desk' },
        { title: "Principal's Message", href: 'principal-message' },
        { title: "Coordinator's Message", href: 'coordinator-message' },
      ],
    },
    {
      title: 'About Us',
      submenu: [
        { title: 'About AMS', href: 'about-ams' },
        { title: 'Mission & Vision', href: 'mission-vision' },
        { title: 'School Information', href: 'school-info' },
      ],
    },
    {
      title: 'Academics',
      submenu: [
        { title: 'Syllabi', href: 'syllabi' },
        { title: 'Medium of Instructions', href: 'medium' },
        { title: 'Fee Structure', href: 'fee-structure' },
        { title: 'General Rules', href: 'general-rules' },
        { title: 'Admission Rules', href: 'admission-rules' },
        { title: 'Withdrawal Rules', href: 'withdrawal-rules' },
        { title: 'School Timing', href: 'timing' },
      ],
    },
    {
      title: 'Facilities',
      submenu: [
        { title: 'Infrastructure', href: 'infrastructure' },
        { title: 'Faculty Profile', href: 'faculty' },
        { title: 'Co-Curriculum', href: 'co-curriculum' },
        { title: 'Games & Sports', href: 'sports' },
        { title: 'Houses of School', href: 'houses' },
        { title: 'Event Gallery', href: 'gallery' },
      ],
    },
  
    { title: 'Mandatory Disclosure', href: 'docs' },
    { title: 'Contact', href: 'contact' },
  ];

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Render different pages based on currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case 'chairman-message':
        return <ChairmanMessage />;
      case 'director-desk':
        return <DirectorDesk />;
      case 'principal-message':
        return <PrincipalMessage />;
      case 'coordinator-message':
        return <CoordinatorMessage />;
      case 'about-ams':
        return <AboutAMS />;
      case 'mission-vision':
        return <MissionVision />;
      case 'school-info':
        return <SchoolInfo />;
      case 'syllabi':
        return <Syllabi />;
      case 'medium':
        return <MediumOfInstructions />;
      case 'fee-structure':
        return <FeeStructure />;
      case 'infrastructure':
        return <Infrastructure />;
      case 'houses':
        return <HousesOfSchool />;
      case 'sports':
        return <SportsActivities />;
      case 'general-rules':
        return <GeneralRules />;
      case 'admission-rules':
        return <AdmissionRules />;
      case 'withdrawal-rules':
        return <WithdrawalRules />;
      case 'timing':
        return <SchoolTiming />;
      case 'gallery':
        return <EventGallery />;
      case 'contact':
        return <ContactPage />;
      case 'faculty':
        return <FacultyProfile />;
      case 'co-curriculum':
        return <CoCurriculum />;
      case 'docs':
        return <DocsPage />;
      default:
        return <HomePage navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] dark:bg-[#0A0A0A] text-slate-800 dark:text-slate-200 selection:bg-[#800020] selection:text-white">
      {/* Navigation - reference style */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ml-[0.5cm] md:pr-6">
          <button
            onClick={() => navigateToPage('home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">school</span>
            </div>
            <div className="leading-tight">
              <h1 className="font-serif text-xl font-bold tracking-tight text-[#800020] uppercase">AMS</h1>
              <p className="text-[6px] tracking-widest uppercase opacity-70">Ashutosh Memorial School</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveDropdown(activeDropdown === item.title ? null : item.title);
                    } else if (item.href) {
                      navigateToPage(item.href);
                      setActiveDropdown(null);
                    }
                  }}
                  className="flex items-center gap-1 py-2 hover:text-[#800020] transition-colors"
                >
                  {item.title}
                  {item.submenu && (
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  )}
                </button>
                {item.submenu && activeDropdown === item.title && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden py-2"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.title}
                        onClick={() => { navigateToPage(subItem.href); setActiveDropdown(null); }}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-[#800020] transition-colors"
                      >
                        {subItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-700 dark:text-slate-300"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="lg:hidden bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-slate-800">
      <div className="px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => {
                if (item.submenu) {
                  setActiveDropdown(
                    activeDropdown === item.title ? null : item.title
                  );
                } else if (item.href) {
                  navigateToPage(item.href);
                  setIsMenuOpen(false);
                }
              }}
              className="w-full text-left py-2 font-medium hover:text-[#800020]"
            >
              {item.title}
            </button>

            {item.submenu && activeDropdown === item.title && (
              <div className="pl-4 space-y-1">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.title}
                    onClick={() => {
                      navigateToPage(subItem.href);
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                    className="block w-full text-left py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-[#800020]"
                  >
                    {subItem.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )}
</nav>


      {/* Page Content */}
      {renderContent()}

      {/* Footer - reference: pt-32, accent-gold titles, link lines, Accessibility */}
      <footer className="bg-slate-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white">school</span>
              </div>
              <h1 className="font-serif text-2xl font-bold tracking-tight text-white uppercase">AMS</h1>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              Preparing the leaders of tomorrow through rigorous academic programs and a commitment to values.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] transition-all group" aria-label="Facebook">
                <span className="material-symbols-outlined text-white/70 group-hover:text-white">share</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] transition-all group" aria-label="Twitter">
                <span className="material-symbols-outlined text-white/70 group-hover:text-white">chat</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] transition-all group" aria-label="Instagram">
                <span className="material-symbols-outlined text-white/70 group-hover:text-white">photo_camera</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-serif font-bold mb-10 text-[#C5A059]">Quick Links</h5>
            <ul className="space-y-5 text-base text-slate-400">
              {[
                { label: 'About AMS', page: 'about-ams' },
                { label: 'Admission Policy', page: 'admission-rules' },
                { label: 'Fee Structure', page: 'fee-structure' },
                { label: 'Contact Us', page: 'contact' },
              ].map(({ label, page }) => (
                <li key={label}>
                  <button onClick={() => navigateToPage(page)} className="hover:text-[#800020] transition-colors flex items-center gap-2 text-left">
                    <span className="w-4 h-px bg-white/20 shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-serif font-bold mb-10 text-[#C5A059]">Academic Resources</h5>
            <ul className="space-y-5 text-base text-slate-400">
              <li><button onClick={() => navigateToPage('syllabi')} className="hover:text-[#800020] transition-colors flex items-center gap-2 text-left"><span className="w-4 h-px bg-white/20 shrink-0" /> Syllabi</button></li>
              <li><button onClick={() => navigateToPage('infrastructure')} className="hover:text-[#800020] transition-colors flex items-center gap-2 text-left"><span className="w-4 h-px bg-white/20 shrink-0" /> Facilities</button></li>
              <li><button onClick={() => navigateToPage('gallery')} className="hover:text-[#800020] transition-colors flex items-center gap-2 text-left"><span className="w-4 h-px bg-white/20 shrink-0" /> Event Gallery</button></li>
              <li><button onClick={() => navigateToPage('contact')} className="hover:text-[#800020] transition-colors flex items-center gap-2 text-left"><span className="w-4 h-px bg-white/20 shrink-0" /> Contact</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-serif font-bold mb-10 text-[#C5A059]">Newsletter</h5>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">Receive the latest news and updates from Ashutosh Memorial School.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-[#800020] focus:ring-0 text-sm py-4 px-6 outline-none transition-all focus:bg-white/10 text-white placeholder-slate-500"
                placeholder="Your email address"
                required
              />
              <button type="submit" className="w-full bg-[#800020] py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-red-900 transition-all shadow-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-slate-500 uppercase tracking-[0.2em]">
          <p>© 2024 Ashutosh Memorial School. All Rights Reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>

      {/* Floating TC Verification button - bottom right */}
      <a
        href="http://ams.schoolerpsolution.in/tc.php"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-[#800020] text-white font-semibold text-sm uppercase tracking-wide rounded-lg shadow-lg hover:bg-red-900 hover:shadow-xl transition-all active:scale-[0.98]"
      >
        <span className="material-symbols-outlined text-xl">verified</span>
        TC Verification
      </a>

      {/* Fonts & hero overlays */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        body {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }

        .material-symbols-outlined,
        .material-icons {
          font-family: 'Material Symbols Outlined';
          font-weight: 400;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          -webkit-font-smoothing: antialiased;
        }

        .hero-vignette {
          background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
        }
        .hero-overlay {
          background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%);
        }
      `}</style>
    </div>
  );
}

// Hero carousel images (Unsplash + /public)
const HERO_CAROUSEL_IMAGES = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1681505336207-cea25b6cf0ea?w=1600&auto=format&fit=crop&q=80',
    alt: 'Ashutosh Memorial School - Excellence in Education',
  },
  { src: '/AMS.jpg', alt: 'AMS Campus' },
  { src: '/AMS2.jpg', alt: 'AMS Students' },
  { src: '/aps.jpeg', alt: 'Ashutosh Memorial School' },
];

// HOME PAGE COMPONENT
function HomePage({ navigateToPage }: { navigateToPage: (page: string) => void }) {
  const [heroIndex, setHeroIndex] = useState(0);

  // Auto-advance hero carousel every 5.5s
  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero - carousel background, overlay, content */}
      <header className="relative h-[92vh] flex items-center overflow-hidden bg-black">
        {/* Carousel layer - stacked images with crossfade */}
        <div className="absolute inset-0">
          {HERO_CAROUSEL_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === heroIndex ? 1 : 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-center scale-105 saturate-[1.05] contrast-[1.1] brightness-[0.9]"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15 pointer-events-none" />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.35))]" />

        {/* Content */}
        <div className="max-w-3xl pl-5 sm:pl-10 lg:pl-16 relative z-20">
          <p className="flex items-center gap-3 font-semibold tracking-[0.3em] uppercase text-[11px] text-[#C5A059] mb-4">
            <span className="w-10 h-px bg-[#C5A059]" />
            Excellence in Education
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.15] mb-5 tracking-tight text-white">
            Ashutosh Memorial <br />
            <span className="italic font-normal">School</span>
          </h1>

          <p className="text-base md:text-lg mb-7 text-white/90 max-w-xl">
            Dhanaicha-Malkhanpur, Prayagraj, UP
          </p>

          <button
            onClick={() => navigateToPage('contact')}
            className="bg-[#800020] hover:bg-[#6a001a] text-white px-7 py-3.5 inline-flex items-center gap-2.5 font-semibold uppercase tracking-widest text-[11px] shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Request Info
            <span className="material-symbols-outlined text-base">
              arrow_right_alt
            </span>
          </button>
        </div>

        {/* Carousel dots - bottom center */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {HERO_CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className="rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                  i === heroIndex
                    ? 'bg-[#C5A059] w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
      </header>


      {/* Stats bar - reference: dot grid, accent-gold numbers */}
      <div className="bg-[#800020] py-12 relative overflow-hidden">
  <div
    className="absolute inset-0 opacity-10 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    }}
  />
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
      
      <div className="space-y-2">
        <h3 className="text-5xl font-serif font-bold text-[#C5A059]">CBSE</h3>
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          Affiliated School
        </p>
      </div>

      <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/20 py-6 md:py-0">
        <h3 className="text-5xl font-serif font-bold text-[#C5A059]">Nursery–X</h3>
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          Classes Offered
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-5xl font-serif font-bold text-[#C5A059]">English</h3>
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          Medium
        </p>
      </div>

    </div>
  </div>
</div>

      {/* About - reference: py-32, grayscale images, Established badge, border-b-4 cards */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="relative w-full h-96 overflow-hidden shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <Image src="/AMS.jpg" alt="Campus" fill className="object-cover" />
            </div>
            <div className="relative w-full h-72 overflow-hidden shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <Image src="/aps.jpeg" alt="School" fill className="object-cover" />
            </div>
          </div>
          <div className="pt-16 space-y-6 relative">
            <div className="relative w-full h-[520px] overflow-hidden shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <Image src="/AMS2.jpg" alt="Students" fill className="object-cover" />
            </div>
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-40 h-40 bg-[#800020] rounded-full border-[10px] border-[#FCFAF7] dark:border-[#0A0A0A] flex items-center justify-center text-center p-4 shadow-2xl transform hover:scale-110 transition-transform">
              <p className="text-white text-[11px] uppercase font-bold tracking-widest leading-none">Established <br /> <span className="text-2xl block mt-1">CBSE</span></p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-[#800020] flex items-center gap-3 font-bold tracking-[0.2em] uppercase text-xs">
              <span className="material-symbols-outlined text-lg">auto_stories</span>
              Heritage of Learning
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              Excellence in Education for Every Child
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light italic">
              &ldquo;At Ashutosh Memorial School, we cultivate the intellect and character of our students, preparing them for a life of purpose and service.&rdquo;
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-base leading-relaxed">
              Located amidst lush green natural and rural environment of Dhanaicha Malkhanpur, very close to the world-famous Durvasa Ashram. Recognized and affiliated from CBSE (Affiliation No. 2133851).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => navigateToPage('mission-vision')}
              className="p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-4 group hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl transition-all border-b-4 hover:border-b-[#800020] text-left"
            >
              <span className="material-symbols-outlined text-[#800020] text-4xl">lightbulb</span>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1">Our Mission</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Transforming Lives</p>
              </div>
            </button>
            <button
              onClick={() => navigateToPage('school-info')}
              className="p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-4 group hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl transition-all border-b-4 hover:border-b-[#800020] text-left"
            >
              <span className="material-symbols-outlined text-[#800020] text-4xl">rocket_launch</span>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1">Our Vision</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Values &amp; Achievement</p>
              </div>
            </button>
          </div>

          <button
            onClick={() => navigateToPage('about-ams')}
            className="bg-[#800020] text-white px-12 py-5 hover:bg-red-900 transition-colors uppercase text-sm tracking-[0.2em] font-bold shadow-lg"
          >
            Our Academic Portfolio
          </button>
        </div>
      </section>

      {/* Academics & Programs - reference 3-col with middle scaled */}
      <section className="bg-white dark:bg-zinc-950 py-32 border-y border-slate-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#800020] font-bold tracking-[0.2em] uppercase text-xs">Excellence across disciplines</p>
            <h2 className="text-5xl font-serif font-bold">Academics &amp; Programs</h2>
            <div className="w-24 h-1 bg-[#800020] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-14 bg-[#FCFAF7] dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 flex flex-col h-full">
              <h3 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                <span className="w-8 h-px bg-[#800020]" />
                Primary
              </h3>
              <div className="space-y-4 flex-grow">
                <button onClick={() => navigateToPage('syllabi')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  Nursery to Class V <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('medium')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  English Medium <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('fee-structure')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  Fee Structure <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('mission-vision')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  Mission &amp; Vision <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </div>
            </div>

            <div className="p-14 bg-[#800020] text-white shadow-2xl transform md:scale-105 z-10 flex flex-col">
              <h3 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                <span className="w-8 h-px bg-[#C5A059]" />
                Middle School
              </h3>
              <div className="space-y-4">
                <button onClick={() => navigateToPage('syllabi')} className="block w-full p-5 border border-white/20 text-sm font-medium hover:bg-white hover:text-[#800020] transition-all flex justify-between items-center group text-left">
                  Class VI–VIII <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('infrastructure')} className="block w-full p-5 border border-white/20 text-sm font-medium hover:bg-white hover:text-[#800020] transition-all flex justify-between items-center group text-left">
                  Facilities <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('co-curriculum')} className="block w-full p-5 border border-white/20 text-sm font-medium hover:bg-white hover:text-[#800020] transition-all flex justify-between items-center group text-left">
                  Co-Curriculum <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('admission-rules')} className="block w-full p-5 border border-white/20 text-sm font-medium hover:bg-white hover:text-[#800020] transition-all flex justify-between items-center group text-left">
                  Admissions <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </div>
            </div>

            <div className="p-14 bg-[#FCFAF7] dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 flex flex-col h-full">
              <h3 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                <span className="w-8 h-px bg-[#800020]" />
                Secondary
              </h3>
              <div className="space-y-4 flex-grow">
                <button onClick={() => navigateToPage('syllabi')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  Class IX–X <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('fee-structure')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  Fee &amp; Exam <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('school-info')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  School Information <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
                <button onClick={() => navigateToPage('timing')} className="block w-full p-5 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-[#800020] hover:text-white hover:border-[#800020] transition-all flex justify-between items-center group text-left">
                  School Timing <span className="material-symbols-outlined text-lg group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life - reference: 300px watermarks, huge title, grayscale hover */}
      <section className="bg-[#800020] py-32 text-white  overflow-hidden relative">
        <span className="material-symbols-outlined absolute  left-10 text-white/5 text-[300px] pointer-events-none select-none">auto_stories</span>
        <span className="material-symbols-outlined absolute bottom-10 right-10 text-white/5 text-[300px] pointer-events-none select-none">architecture</span>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center md:text-right mb-24 space-y-6">
            <h2 className="text-5xl md:text-[80px] mt-[-2cm] font-serif font-bold opacity-90 leading-none tracking-tighter">Campus <br /> Life</h2>
            <p className="max-w-md ml-auto text-base opacity-80 leading-relaxed italic font-light">
              Discover a vibrant community of scholars, artists, and athletes dedicated to excellence in every endeavor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <button onClick={() => navigateToPage('about-ams')} className="group cursor-pointer text-left">
              <div className="overflow-hidden mb-8 aspect-[4/5] shadow-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                <Image src="/AMS2.jpg" alt="Student Life" width={400} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex justify-between items-end border-b border-white/20 pb-4">
                <h4 className="text-3xl font-serif font-bold">Student Life</h4>
                <span className="material-symbols-outlined text-[#C5A059] text-3xl group-hover:rotate-45 transition-transform">arrow_outward</span>
              </div>
            </button>
            <button onClick={() => navigateToPage('gallery')} className="group cursor-pointer text-left">
              <div className="overflow-hidden mb-8 aspect-[4/5] shadow-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                <Image src="/AMS1.jpg" alt="Arts & Culture" width={400} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex justify-between items-end border-b border-white/20 pb-4">
                <h4 className="text-3xl font-serif font-bold">Arts &amp; Culture</h4>
                <span className="material-symbols-outlined text-[#C5A059] text-3xl group-hover:rotate-45 transition-transform">arrow_outward</span>
              </div>
            </button>
            <button onClick={() => navigateToPage('sports')} className="group cursor-pointer text-left">
              <div className="overflow-hidden mb-8 aspect-[4/5] shadow-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                <Image src="/AMS.jpg" alt="Sports & Wellness" width={400} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex justify-between items-end border-b border-white/20 pb-4">
                <h4 className="text-3xl font-serif font-bold">Sports &amp; Wellness</h4>
                <span className="material-symbols-outlined text-[#C5A059] text-3xl group-hover:rotate-45 transition-transform">arrow_outward</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid - reference: border-l-8, accent-gold second box */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">Invest in Your Future</h3>
            <p className="text-slate-500 max-w-lg leading-relaxed">We are committed to making quality education accessible to every child, regardless of background.</p>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-slate-50 dark:bg-zinc-900 border-l-8 border-[#800020] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Primary &amp; Upper Primary</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Fees starting from ₹1,080 per month (Class I). Payable in 12 installments. Includes lab and student materials.</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-zinc-900 border-l-8 border-[#C5A059] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Secondary (IX–X)</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Fees vary by class. Concessions for siblings and merit-based support where applicable. See Fee Structure for details.</p>
            </div>
          </div>
          <button onClick={() => navigateToPage('fee-structure')} className="bg-[#800020] text-white px-12 py-5 font-bold hover:bg-red-900 transition-colors uppercase text-sm tracking-[0.2em] shadow-lg">
            View Fee Structure
          </button>
        </div>
        <div className="relative bg-zinc-900 p-16 text-white flex flex-col justify-center overflow-hidden shadow-2xl min-h-[360px]">
          <div className="absolute inset-0">
            <Image src="/Director.jpg" alt="Support" fill className="object-cover opacity-20 saturate-[0.5]" />
          </div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl font-serif font-bold leading-tight">Scholarships &amp; <br /> Financial Aid</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Talent knows no borders. Fee concessions and support are available for deserving students. Contact the office for details.
            </p>
            <button
              onClick={() => navigateToPage('contact')}
              className="inline-flex items-center gap-4 bg-[#800020] px-12 py-5 text-sm font-bold tracking-[0.2em] hover:bg-red-900 transition-all uppercase shadow-xl"
            >
              Start Your Application
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </section>

    </>
  );
}

// CHAIRMAN'S MESSAGE PAGE
function ChairmanMessage() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#800020]/20">
            <Image src="/AshutoshMishra.png" alt="Prof. J P N Mishra" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">Chairman's Message</h1>
            <p className="text-sm text-[#800020] font-semibold">Prof. J P N Mishra</p>
            <p className="text-xs text-slate-500">
              Ex. Professor and Dean, School of Life Sciences, Central University of Gujarat
              <br />
              Currently Registrar, National Institute of Pharmaceutical Education and Research,
              Hyderabad
            </p>
          </div>
        </div>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            Ever since ages we have a rich heritage of cultural values. To propagate those values in
            our society and to humanity at global level, education is the best medium. With this aim
            Ashutosh Memorial Trust was established. Ashutosh Memorial School is one venture from
            among various multifarious activities of the trust.
          </p>
          <p>
            Through Ashutosh Memorial School we have envisaged to inculcate ethical, moral and
            cultural values in the children, specifically coming from villages and rural areas. The
            mandate of both the trust and the school, is to groom our next generation in such a way
            that when they come at the stage of ready to serve the society, they are not only bearing
            the ocean of innate human values but also full of patriotic enthusiasm.
          </p>
          <p>
            It is our commitment for the future, that we shall not leave any stone unturned for the
            cause of value based social reconstruction and nurturing the upcoming citizens of society
            with positive zeal and feeling of selflessness.
          </p>
          <p className="text-[#800020] font-semibold italic text-xl">
            I wish and extend all good wishes for the new height of success in their academic
            endeavor.
          </p>
        </div>
      </div>
    </section>
  );
}

// DIRECTOR'S DESK PAGE
function DirectorDesk() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#800020]/20 shadow-lg">
            <Image src="/Director.jpg" alt="Dr. Girish Kumar Pandey" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">Director's Desk</h1>
            <p className="text-sm text-[#800020] font-semibold">
              Dr. Girish Kumar Pandey - Director, Ashutosh Memorial School
            </p>
          </div>
        </div>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            It was envisaged to establish an educational institution which may cater the need of
            providing modern education imbibed with innate human values. Ashutosh Memorial School is
            a dream come true for all those who aspire for good education and integrated development
            of personality of their children.
          </p>
          <p>
            The school is driven by its vision of achieving excellence in providing basic education
            to our kids through knowledge skills and values, which will lead to the making of
            responsive and committed future citizen of our motherland.
          </p>
          <p>
            The school endeavors to set a new benchmark in teaching up to primary, upper primary and
            senior secondary level for creation of new generation of assets, who will in future, work
            for the creation of healthy, happy and prosperous society.
          </p>
          <p>
            Ashutosh Memorial School is also committed to its mission of providing opportunities,
            occasions and avenues for access to contemporary quality education to empower the
            children with courage and zeal. Through the School we mean to serve the society and
            nation by serving our public and making them empowered, skilled, proud and patriotic
            citizen of the country.
          </p>
        </div>
      </div>
    </section>
  );
}

// PRINCIPAL'S MESSAGE PAGE
function PrincipalMessage() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="bg-gradient-to-r from-[#800020] to-red-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-icons text-6xl text-[#C5A059]">record_voice_over</span>
          <div>
            <h1 className="text-4xl font-serif font-bold">Principal's Message</h1>
            <p className="text-sm opacity-90">Mrs. Ragini Verma - Principal</p>
          </div>
        </div>
        <div className="space-y-6 leading-relaxed text-slate-100 text-lg">
          <p>
            A good educational institute is made of good teachers and students, and then it is
            further strengthened by standard teaching pedagogy as well as standard syllabi and
            curriculum. In our school both curriculum and teaching schedules are designed in such a
            way that students are always relaxed when they are put to shift from one subject to
            other.
          </p>
          <p>
            Our teachers are not only equipped with modern IT based teaching-learning technology but
            also are inclined to mentor all the students with a feeling of personalized attention.
            Co-Curricular activities, Celebration of all the 'Days and Festivals' of national
            importance, sports activities and participation in in-house and external scientific and
            academic debates have been an integral components of round the year academic calendar.
          </p>
          <p>
            This has ensured the integrated and dynamic personality development of our students. The
            parents are always been a most valuable part of the good education system. We have kept
            our doors open for all kinds of constructive suggestions and seek cooperation from the
            guardians/parents regarding their active participation in exchange of communications in
            between them and school management.
          </p>
        </div>
      </div>
    </section>
  );
}

// COORDINATOR'S MESSAGE PAGE
function CoordinatorMessage() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="bg-slate-50 dark:bg-zinc-900 p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#800020] to-red-900 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-white text-3xl">supervisor_account</span>
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">Coordinator's Message</h1>
            <p className="text-sm text-[#800020] font-semibold">Amit Kumar - Coordinator</p>
          </div>
        </div>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            The process of academic activities in Ashutosh Memorial School starts from notification
            of admission through flexi banners, pamphlets, print media and social media platforms, to
            reach up to far-reach and distant places and to attract good students. We also ensure
            that parents of all the students are well briefed about curriculum, teaching – learning
            processes and other facilities available for their wards.
          </p>
          <p>
            Utmost care is being taken while selecting the study material for different level of
            studies. Time table of routine teaching and extracurricular activities are adhered to in
            letter and spirit. We also ensure to conduct unit tests, quarterly and midterm tests
            followed by annual examination.
          </p>
          <p>
            The progress of every student is regularly communicated to the parents to apprise them
            about the academic achievement level of their wards. For us every single student is most
            valuable, hence, all the students are given due attention and care so that they could
            progress with all-round excellent performance and could achieve every success in their
            future career.
          </p>
        </div>
      </div>
    </section>
  );
}

// Add all other page components here (I'll show a few key ones)

// ABOUT AMS PAGE
function AboutAMS() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">About AMS</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Ashutosh Memorial School - Excellence in Education
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-950 p-12 rounded-2xl shadow-lg">
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              Ashutosh Memorial School is located amidst lush green natural and rural environment of
              Dhanaicha Malkhanpur. It is on the roadside of Kotwa, Hanumanganj Marg and very close
              to the world-famous pilgrimage and heritage site of our country, The Durvasa Ashram.
            </p>
            <p>
              The school is established and run by Ashutosh Memorial Trust, Prayagraj. Currently it
              is recognized and affiliated from Central Board of Secondary Education (CBSE) - New
              Delhi as a Secondary School bearing the affiliation number 2133851.
            </p>
            <p>
              Medium of instruction in all classes from first to 10th is English. We follow the
              syllabi by National Council of Education Research and Trainings (NCERT). School timing
              vary according to seasonal variations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                <h3 className="text-xl font-bold text-[#800020] mb-3">Our Focus</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    Value-based education
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    Modern teaching methods
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    Holistic development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    Cultural awareness
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                <h3 className="text-xl font-bold text-[#800020] mb-3">Key Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    CBSE Affiliated
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    English Medium
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    Experienced Faculty
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-xs text-[#800020] mt-1">check_circle</span>
                    Modern Infrastructure
                  </li>
                </ul>
              </div>
            </div>

            <p className="italic text-center text-xl text-[#800020] mt-8">
              School celebrates all the important National Days and organizes special classes for
              music, dance and yoga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// MISSION & VISION PAGE
function MissionVision() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Mission & Vision</h1>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-[#800020] to-red-900 text-white p-12 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-icons text-6xl text-[#C5A059]">rocket_launch</span>
            <h2 className="text-4xl font-serif font-bold">Our Mission</h2>
          </div>
          <p className="text-slate-100 leading-relaxed text-lg">
            Our mission is to develop future citizens of our great country with active and creative
            minds, a sense of understanding and compassion for others and the courage to act on their
            beliefs. We emphasize on development of each child with spiritual, moral, intellectual,
            social, emotional and physical faculties.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-zinc-900 dark:to-zinc-800 p-12 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-700">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-icons text-6xl text-[#800020]">visibility</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
              Our Vision
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            A center of excellence molding responsible future citizens with outstanding life skills
            to meet all needs of the globe. A symbol of innovation committed to provide education
            blending head and heart and nurturing human qualities.
          </p>
        </div>
      </div>
    </section>
  );
}

// SCHOOL INFO PAGE
function SchoolInfo() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">School Information</h1>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#800020] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">S/No.</th>
                <th className="px-6 py-4 text-left font-semibold">Particulars</th>
                <th className="px-6 py-4 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800">
              {[
                { no: 1, particular: 'Name of School', detail: 'Ashutosh Memorial School' },
                { no: 2, particular: 'CBSE Affiliation No.', detail: '2133851' },
                { no: 3, particular: 'School Number', detail: '71908' },
                {
                  no: 4,
                  particular: 'Complete Address',
                  detail: 'Dhanaicha-Malkhanpur, Post-Kotwa, Pin code- 221505',
                },
                { no: 5, particular: 'E-mail', detail: 'grishpandey2006@gmail.com' },
                { no: 6, particular: 'Contact No.', detail: '9415278868, 7007050611' },
              ].map((row) => (
                <tr key={row.no} className="hover:bg-slate-50 dark:hover:bg-zinc-900">
                  <td className="px-6 py-4 font-medium">{row.no}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                    {row.particular}
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// FEE STRUCTURE PAGE
function FeeStructure() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Fee Structure</h1>
        <p className="text-slate-600 dark:text-slate-400">Academic Year 2024-25</p>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#800020] to-red-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Class</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Total Fee (in Rs)
                  <br />
                  <span className="text-xs font-normal opacity-90">
                    (Payable in 12 installments)
                  </span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  Admission Fee
                  <br />
                  <span className="text-xs font-normal opacity-90">(For new students)</span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">Exam Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800">
              {[
                { class: 'I', fee: '1080×12 = 12960', admission: '2000', exam: '250×3=750' },
                { class: 'II', fee: '1150×12 = 13800', admission: '2000', exam: '250×3=750' },
                { class: 'III', fee: '1190×12 = 14200', admission: '2000', exam: '250×3=750' },
                { class: 'IV', fee: '1230×12 = 14770', admission: '2100', exam: '250×3=750' },
                { class: 'V', fee: '1290×12 = 15480', admission: '2100', exam: '250×3=750' },
                { class: 'VI', fee: '1390×12 = 16680', admission: '2250', exam: '300x3=900' },
                { class: 'VII', fee: '1480×12 = 17760', admission: '2250', exam: '300x3=900' },
                { class: 'VIII', fee: '1590×12 = 19080', admission: '2250', exam: '300x3=900' },
                { class: 'IX', fee: '1780×12 = 21360', admission: '2800', exam: '350×3=1050' },
                { class: 'X', fee: '1850×12 = 22200', admission: 'NA', exam: '350×3=1050' },
              ].map((row) => (
                <tr key={row.class} className="hover:bg-slate-50 dark:hover:bg-zinc-900">
                  <td className="px-6 py-4 font-bold text-[#800020]">{row.class}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.fee}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.admission}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// SYLLABI PAGE
function Syllabi() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Syllabi</h1>
        <p className="text-slate-600 dark:text-slate-400">NCERT Curriculum - CBSE Board</p>
      </div>

      <div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#800020] to-red-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Class</th>
                <th className="px-6 py-4 text-left font-semibold">Compulsory Subjects</th>
                <th className="px-6 py-4 text-left font-semibold">Skill-Based Subjects</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800">
              {[
                {
                  class: 'I - IV',
                  compulsory: 'English, Hindi, Math, EVS',
                  skills: 'Computer, GK, Art, Moral Education',
                },
                {
                  class: 'V',
                  compulsory: 'English, Hindi, Math, EVS, Sanskrit',
                  skills: 'Computer, GK, Art, Moral Education',
                },
                {
                  class: 'VI - VIII',
                  compulsory: 'English, Hindi, Math, SST, Sanskrit',
                  skills: 'Computer, GK, Art',
                },
                {
                  class: 'IX - X',
                  compulsory: 'English, Hindi, Math, Science, SST',
                  skills: 'Information Technology',
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white dark:hover:bg-zinc-950">
                  <td className="px-6 py-4 font-bold text-[#800020]">{row.class}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.compulsory}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          <strong>Note:</strong> EVS – Environmental Studies | SST – Social Studies | GK – General
          Knowledge
        </p>
      </div>
    </section>
  );
}

// MEDIUM OF INSTRUCTIONS PAGE
function MediumOfInstructions() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="bg-gradient-to-br from-[#800020] to-red-900 text-white p-12 rounded-2xl shadow-xl text-center">
        <span className="material-icons text-6xl mb-6 text-[#C5A059]">translate</span>
        <h1 className="text-5xl font-serif font-bold mb-6">Medium of Instructions</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          The medium of instructions for all the subjects is <strong>English</strong> except the two
          language subjects that are <strong>Hindi</strong> and <strong>Sanskrit</strong>.
        </p>
      </div>
    </section>
  );
}

// INFRASTRUCTURE PAGE
function Infrastructure() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Our Facilities</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Comprehensive infrastructure for holistic development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: 'forest', title: 'Peaceful Environment', color: 'text-green-600' },
          { icon: 'chair', title: 'Well-equipped Classrooms', color: 'text-blue-600' },
          { icon: 'water_drop', title: 'Drinking Water', color: 'text-cyan-600' },
          { icon: 'sports_soccer', title: 'Sports Equipment', color: 'text-orange-600' },
          { icon: 'wc', title: 'Separate Washrooms', color: 'text-purple-600' },
          { icon: 'computer', title: 'Computer Learning', color: 'text-indigo-600' },
          { icon: 'music_note', title: 'Music Learning', color: 'text-pink-600' },
          { icon: 'tv', title: 'LED Television with OHP', color: 'text-red-600' },
          { icon: 'directions_bus', title: 'Transportation', color: 'text-yellow-600' },
          { icon: 'local_library', title: 'Library', color: 'text-brown-600' },
          { icon: 'videocam', title: 'CCTV Surveillance', color: 'text-slate-600' },
          { icon: 'medical_services', title: 'Medical Facilities', color: 'text-red-500' },
        ].map((facility, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-zinc-800 group hover:border-[#800020]"
          >
            <div className="flex items-center gap-4">
              <span className={`material-icons text-4xl ${facility.color}`}>{facility.icon}</span>
              <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-[#800020]">
                {facility.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// HOUSES OF SCHOOL PAGE
function HousesOfSchool() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Houses of School</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          The house system is a traditional feature of schools. Students are divided into four
          houses, each competing in sports, academics, and various activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Vaayu', color: 'Red', bg: 'bg-red-600', border: 'border-red-600' },
          { name: 'Prithvi', color: 'Green', bg: 'bg-green-600', border: 'border-green-600' },
          { name: 'Agni', color: 'Yellow', bg: 'bg-yellow-500', border: 'border-yellow-500' },
          { name: 'Akash', color: 'Blue', bg: 'bg-blue-600', border: 'border-blue-600' },
        ].map((house) => (
          <div
            key={house.name}
            className={`bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-lg border-4 ${house.border} hover:scale-105 transition-transform`}
          >
            <div
              className={`w-20 h-20 ${house.bg} rounded-full mx-auto mb-6 flex items-center justify-center`}
            >
              <span className="material-icons text-white text-4xl">home</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-center mb-2">{house.name}</h3>
            <p className="text-center text-slate-600 dark:text-slate-400">{house.color} House</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// SPORTS ACTIVITIES PAGE
function SportsActivities() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Games & Sports</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Physical education for holistic development
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-950 p-12 rounded-2xl shadow-lg">
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            Games and sports are a part of students daily routine which brings physical and
            psychological health to them. The school maintains well-equipped courts and facilities
            for various sports activities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Outdoor Sports</h3>
              <ul className="space-y-2">
                {['Volleyball', 'Handball', 'Kho-Kho', 'Cricket', 'Football'].map((sport) => (
                  <li key={sport} className="flex items-center gap-2">
                    <span className="material-icons text-sm text-[#800020]">sports</span>
                    {sport}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Indoor Sports</h3>
              <ul className="space-y-2">
                {['Chess', 'Caroms', 'Table Tennis', 'Board Games'].map((sport) => (
                  <li key={sport} className="flex items-center gap-2">
                    <span className="material-icons text-sm text-[#800020]">casino</span>
                    {sport}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SCHOOL TIMING PAGE
function SchoolTiming() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">School Timing</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-icons text-5xl text-orange-600">wb_sunny</span>
            <h2 className="text-2xl font-serif font-bold">Summer Timing</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Nursery to UKG:</span>
              <span className="text-orange-700 dark:text-orange-400">7:50 AM to 12:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Class I to X:</span>
              <span className="text-orange-700 dark:text-orange-400">7:50 AM to 01:30 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-icons text-5xl text-blue-600">ac_unit</span>
            <h2 className="text-2xl font-serif font-bold">Winter Timing</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Nursery to UKG:</span>
              <span className="text-blue-700 dark:text-blue-400">8:50 AM to 01:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Class I to X:</span>
              <span className="text-blue-700 dark:text-blue-400">8:50 AM to 02:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-100 dark:bg-zinc-900 rounded-lg text-center">
        <p className="text-slate-700 dark:text-slate-300">
          <strong>School Office Hours:</strong> 8:00 AM to 3:00 PM (Monday to Saturday)
        </p>
      </div>
    </section>
  );
}

// GENERAL RULES PAGE
function GeneralRules() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">General Rules & Information</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="material-icons text-red-600">rule</span>
            Code of Conduct
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Strict regularity, implicit obedience, and courtesy in speech and conduct
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Cleanliness of dress and person are expected from every pupil
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Wearing of school uniform is obligatory
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="material-icons text-blue-600">block</span>
            Prohibited Items
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              No electronic gadgets (Camera, Cell phone, etc.)
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              No jewellery or valuables in school campus
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Money/articles should not be lent, borrowed or exchanged
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="material-icons text-green-600">event_available</span>
            Attendance & Leave
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Late comers require Principal's written permission
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Leave requires written application from parents
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Mandatory attendance on National Days
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="material-icons text-purple-600">school</span>
            Academic Expectations
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              All pupils must possess a school diary
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Children should speak English in school campus
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-xs mt-1">arrow_right</span>
              Regular participation in co-curricular activities
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ADMISSION RULES PAGE
function AdmissionRules() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Admission Rules</h1>
        <p className="text-slate-600 dark:text-slate-400">Age criteria as on 1st April</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { class: 'Nursery', age: '4 years' },
          { class: 'L.K.G.', age: '5 years' },
          { class: 'U.K.G.', age: '6 years' },
          { class: 'Class I', age: '6+ years' },
        ].map((item) => (
          <div
            key={item.class}
            className="bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-md text-center border border-slate-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-bold text-[#800020] mb-2">{item.class}</h3>
            <p className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
              {item.age}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-serif font-bold mb-6">
          Documents Required at the Time of Admission
        </h3>
        <ul className="space-y-3">
          {[
            'Recent coloured passport size photograph of the child (4)',
            'Recent coloured passport size photograph of the Parents/Guardian',
            'Age proof (Aadhar Card or Birth Certificate)',
            'Transfer Certificate in original (if applicable)',
            'Progress report of the previous school (if applicable)',
            'Indemnity bond by the parents',
            'Medical Certificate duly signed by Medical Officer',
          ].map((doc, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="material-icons text-[#800020] mt-1">check_circle</span>
              <span className="text-slate-700 dark:text-slate-300">{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// WITHDRAWAL RULES PAGE
function WithdrawalRules() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-700">
        <h1 className="text-4xl font-serif font-bold mb-8">Withdrawal Rules</h1>
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-4">
            <span className="material-icons text-[#800020] flex-shrink-0">info</span>
            <p>
              <strong>Notice Period:</strong> One calendar month notice in writing is required. In
              case of failure, one month fee will be charged.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="material-icons text-[#800020] flex-shrink-0">info</span>
            <p>
              <strong>Mid-Session Withdrawal:</strong> If the child is withdrawn after the beginning
              of the academic session, one clear calendar month extra fees will be charged.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="material-icons text-[#800020] flex-shrink-0">info</span>
            <p>
              <strong>Transfer Certificate:</strong> Not issued until all dues related to accounts,
              class teacher, library and sports sections are settled.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="material-icons text-[#800020] flex-shrink-0">warning</span>
            <p>
              <strong>Grounds for Dismissal:</strong> Indisciplinary behaviour, repeated detentions,
              or failure to meet academic standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// EVENT GALLERY PAGE
function EventGallery() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Event Gallery</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Capturing moments of learning and celebration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Annual Day Celebration', image: '/AMS2.jpg' },
          { title: 'Sports Day', image: '/AMS1.jpg' },
          { title: 'Science Exhibition', image: '/AMS.jpg' },
          {
            title: 'Cultural Program',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
          },
          {
            title: 'Independence Day',
            image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800&q=80',
          },
          {
            title: 'Parent-Teacher Meeting',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
          },
        ].map((event, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="relative h-64">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <h3 className="text-white font-serif font-bold text-xl p-6">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// CONTACT PAGE
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-[#800020] font-semibold tracking-wide uppercase text-sm mb-2">
          Get in Touch
        </p>
        <h1 className="text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Reach out for admissions, enquiries, or any assistance. We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 dark:border-zinc-800">
          <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-[#800020] bg-white dark:bg-zinc-900 text-slate-900 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-[#800020] bg-white dark:bg-zinc-900 text-slate-900 dark:text-white"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-[#800020] bg-white dark:bg-zinc-900 text-slate-900 dark:text-white"
                placeholder="Your phone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-[#800020] bg-white dark:bg-zinc-900 text-slate-900 dark:text-white resize-none"
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#800020] hover:bg-red-900 text-white font-bold py-4 px-6 rounded-lg transition-colors uppercase tracking-widest text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-[#FCFAF7] dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800">
            <h3 className="text-xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
              Visit Us
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] mt-1">location_on</span>
                <p>Dhanaicha-Malkhanpur, Post-Kotwa, Prayagraj, UP - 221505</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] mt-1">phone</span>
                <p>9415278868, 7007050611</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] mt-1">email</span>
                <p>grishpandey2006@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-[#800020] text-white rounded-2xl">
            <h3 className="text-xl font-serif font-bold mb-4">Office Hours</h3>
            <p className="text-slate-100 text-sm">Monday – Saturday: 8:00 AM to 3:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// PDF documents config: add your PDFs to /public and list them here (path = filename in public)
const DOCS_PDF_LIST = [
  { file: 'doc1.pdf', title: 'Admission Fees', description: 'School document' },
  { file: 'doc2.pdf', title: 'Academic Calendar', description: 'School document' },
  { file: 'doc3.pdf', title: 'Staff Info', description: 'School document' },
  { file: 'doc4.pdf', title: 'Letter', description: 'School document' },
  { file: 'doc5.pdf', title: 'Deed of Trust', description: 'School document' },
  { file: 'doc6.pdf', title: 'Campus Info', description: 'School document' },
  { file: 'doc7.pdf', title: 'Chemical Analysis', description: 'School document' },
  { file: 'doc8.pdf', title: 'Parent Teacher Association', description: 'School document' },
  { file: 'doc9.pdf', title: 'School Management Committee', description: 'School document' },
  { file: 'doc10.pdf', title: 'Document', description: 'School document' },
];

// DOCS PAGE - view & download PDFs from /public (box cards)
function DocsPage() {
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
            Documents
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm md:text-base">
            View or download school documents.
          </p>
        </div>

        {/* Box grid - responsive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {DOCS_PDF_LIST.map((doc) => (
            <div
              key={doc.file}
              className="group flex flex-col rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md hover:border-[#800020]/20 transition-all duration-200 overflow-hidden"
            >
              <div className="p-5 flex flex-col flex-1 min-h-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-[#800020]/10 transition-colors">
                    <span className="material-symbols-outlined text-[#800020] text-xl">description</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight line-clamp-2 min-w-0">
                    {doc.title}
                  </h3>
                </div>
                <div className="flex gap-1.5 mt-auto pt-2 min-w-0">
                  <button
                    onClick={() => setPreviewPdf(doc.file)}
                    className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 py-1.5 px-2 text-[11px] font-semibold text-[#800020] bg-[#800020]/10 hover:bg-[#800020]/20 rounded-md transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm shrink-0">visibility</span>
                    
                  </button>
                  <a
                    href={`/${doc.file}`}
                    download={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 py-1.5 px-2 text-[11px] font-semibold bg-[#800020] text-white hover:bg-red-900 rounded-md transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm shrink-0">download</span>
                   
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {previewPdf && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setPreviewPdf(null)}
          >
            <div
              className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50">
                <h3 className="font-serif font-bold text-slate-900 dark:text-white truncate pr-4">
                  {DOCS_PDF_LIST.find((d) => d.file === previewPdf)?.title ?? previewPdf}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`/${previewPdf}`}
                    download={previewPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300"
                    title="Download"
                  >
                    <span className="material-symbols-outlined">download</span>
                  </a>
                  <a
                    href={`/${previewPdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300"
                    title="Open in new tab"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                  <button
                    onClick={() => setPreviewPdf(null)}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300"
                    title="Close"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-0 relative">
                <iframe
                  src={`/${previewPdf}#toolbar=1`}
                  title="PDF Preview"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// FACULTY PROFILE PAGE
function FacultyProfile() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Faculty Profile</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Dedicated educators committed to excellence
        </p>
      </div>
      <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-lg p-12 border border-slate-200 dark:border-zinc-800">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-center">
          Our faculty comprises experienced and qualified teachers who are committed to nurturing
          every student. Detailed profiles and subject-wise information can be obtained from the
          school office. For specific enquiries, please use the Contact page.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:grishpandey2006@gmail.com"
            className="inline-flex items-center gap-2 bg-[#800020] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
          >
            <span className="material-icons text-sm">email</span>
            Contact Office
          </a>
        </div>
      </div>
    </section>
  );
}

// CO-CURRICULUM PAGE
function CoCurriculum() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Co-Curriculum</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Beyond the classroom – holistic development
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: 'science',
            title: 'Science & Debates',
            desc: 'Participation in in-house and external scientific and academic debates.',
          },
          {
            icon: 'music_note',
            title: 'Music, Dance & Yoga',
            desc: 'Special classes for music, dance and yoga as part of the annual calendar.',
          },
          {
            icon: 'celebration',
            title: 'National Days & Festivals',
            desc: 'Celebration of all important National Days and festivals.',
          },
          {
            icon: 'groups',
            title: 'Activities',
            desc: 'Co-curricular activities integrated into the round-the-year academic calendar.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-8 bg-[#FCFAF7] dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-[#800020] transition-colors"
          >
            <span className="material-icons text-4xl text-[#800020] mb-4">{item.icon}</span>
            <h3 className="text-xl font-serif font-bold mb-2 text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}