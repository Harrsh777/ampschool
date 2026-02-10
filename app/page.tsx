'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function AshutoshMemorialSchool() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const navItems = [
    {
      title: 'Home',
      href: '#home',
    },
    {
      title: 'Messages',
      submenu: [
        { title: "Chairman's Message", href: '#chairman-message' },
        { title: "Director's Desk", href: '#director-desk' },
        { title: "Principal's Message", href: '#principal-message' },
        { title: "Coordinator's Message", href: '#coordinator-message' },
      ],
    },
    {
      title: 'About Us',
      submenu: [
        { title: 'About AMS', href: '#about-ams' },
        { title: 'Mission & Vision', href: '#mission-vision' },
        { title: 'Indexed School Information', href: '#school-info' },
      ],
    },
    {
      title: 'Academics',
      submenu: [
        { title: 'Syllabi', href: '#syllabi' },
        { title: 'Medium of Instructions', href: '#medium' },
        { title: 'Academic Calendar', href: '#calendar' },
        { title: 'Fee Structure', href: '#fee-structure' },
      ],
    },
    {
      title: 'Facilities',
      submenu: [
        { title: 'Infrastructure Facility', href: '#infrastructure' },
        { title: 'Faculty Profile', href: '#faculty' },
      ],
    },
    {
      title: 'Activities',
      submenu: [
        { title: 'Co-Curriculum', href: '#co-curriculum' },
        { title: 'Games & Sports', href: '#sports' },
        { title: 'Houses of School', href: '#houses' },
        { title: 'Event Gallery', href: '#gallery' },
      ],
    },
    {
      title: 'Rules',
      submenu: [
        { title: 'General Rules', href: '#general-rules' },
        { title: 'Admission Rules', href: '#admission-rules' },
        { title: 'Withdrawal Rules', href: '#withdrawal-rules' },
        { title: 'School Uniform', href: '#uniform' },
        { title: 'School Timing', href: '#timing' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF7] dark:bg-[#121212] text-slate-800 dark:text-slate-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#800020] to-red-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="material-icons text-white text-2xl">school</span>
              </div>
              <div className="leading-tight">
                <h1 className="font-serif text-xl font-bold tracking-tight text-[#800020]">
                  AMS
                </h1>
                <p className="text-[9px] tracking-widest uppercase opacity-70">
                  Ashutosh Memorial School
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href || '#'}
                    className="hover:text-[#800020] transition-colors py-2 cursor-pointer flex items-center gap-1"
                  >
                    {item.title}
                    {item.submenu && (
                      <span className="material-icons text-xs">keyboard_arrow_down</span>
                    )}
                  </a>
                  {item.submenu && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl py-2 min-w-[220px] z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-[#800020] transition-colors text-sm"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-700 dark:text-slate-300"
            >
              <span className="material-icons">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.href || '#'}
                    className="block py-2 font-medium hover:text-[#800020] transition-colors"
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-[#800020] transition-colors"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80"
          alt="Ashutosh Memorial School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        <div className="relative max-w-7xl mx-auto px-6 w-full text-white z-10">
          <div className="max-w-3xl">
            <p className="text-[#C5A059] flex items-center gap-2 mb-4 font-medium tracking-wide text-sm">
              <span className="material-icons text-sm">auto_awesome</span>
              Excellence in Education Since Establishment
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-4">
              Ashutosh Memorial School
            </h2>
            <p className="text-lg md:text-xl mb-8 text-slate-200 max-w-2xl">
              Dhanaicha-Malkhanpur, Prayagraj, UP
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-[#800020] hover:bg-red-900 transition-all text-white px-8 py-4 flex items-center gap-3 rounded shadow-lg">
                Get Started Now
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 transition-all text-white px-8 py-4 flex items-center gap-3 rounded">
                Enquiry
                <span className="material-icons text-sm">contact_mail</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info Banner */}
      <div className="bg-[#800020] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <h3 className="text-4xl font-serif font-bold">CBSE</h3>
              <p className="text-sm opacity-90 uppercase tracking-widest">
                Affiliated School - 2133851
              </p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/20 py-6 md:py-0">
              <h3 className="text-4xl font-serif font-bold">Nursery - X</h3>
              <p className="text-sm opacity-90 uppercase tracking-widest">
                Comprehensive Education
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-serif font-bold">English</h3>
              <p className="text-sm opacity-90 uppercase tracking-widest">
                Medium of Instruction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About AMS Section */}
      <section id="about-ams" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#800020] flex items-center gap-2 font-semibold tracking-wide uppercase text-xs mb-4">
                <span className="material-icons text-sm">auto_stories</span>
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                Ashutosh Memorial School
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-4">
                Ashutosh Memorial School is located amidst lush green natural and rural environment
                of Dhanaicha Malkhanpur. It is on the roadside of Kotwa, Hanumanganj Marg and very
                close to the world-famous pilgrimage and heritage site of our country, The Durvasa
                Ashram.
              </p>
              <p className="text-slate-500 dark:text-slate-500 leading-relaxed">
                The school is established and run by Ashutosh Memorial Trust, Prayagraj. Currently
                it is recognized and affiliated from Central Board of Secondary Education (CBSE) -
                New Delhi as a Secondary School bearing the affiliation number 2133851.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative w-full h-64 shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                  alt="School Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-12">
              <div className="relative w-full h-[380px] shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                  alt="Students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="bg-white dark:bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#800020] to-red-900 text-white p-12 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-[#C5A059]">rocket_launch</span>
                <h3 className="text-3xl font-serif font-bold">Our Mission</h3>
              </div>
              <p className="text-slate-100 leading-relaxed">
                Our mission is to develop future citizens of our great country with active and
                creative minds, a sense of understanding and compassion for others and the courage
                to act on their beliefs. We emphasize on development of each child with spiritual,
                moral, intellectual, social, emotional and physical faculties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-zinc-900 dark:to-zinc-800 p-12 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-700">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-[#800020]">visibility</span>
                <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                A center of excellence molding responsible future citizens with outstanding life
                skills to meet all needs of the globe. A symbol of innovation committed to provide
                education blending head and heart and nurturing human qualities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section id="chairman-message" className="py-24 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Chairman's Message */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#800020] to-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-white text-4xl">person</span>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-2">Chairman's Message</h3>
                  <p className="text-sm text-[#800020] font-semibold">Prof. J P N Mishra</p>
                  <p className="text-xs text-slate-500">
                    Currently Registrar, National Institute of Pharmaceutical Education and
                    Research, Hyderabad
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Ever since ages we have a rich heritage of cultural values. To propagate those
                  values in our society and to humanity at global level, education is the best
                  medium. With this aim Ashutosh Memorial Trust was established.
                </p>
                <p>
                  Through Ashutosh Memorial School we have envisaged to inculcate ethical, moral
                  and cultural values in the children, specifically coming from villages and rural
                  areas. The mandate of both the trust and the school, is to groom our next
                  generation in such a way that when they come at the stage of ready to serve the
                  society, they are not only bearing the ocean of innate human values but also full
                  of patriotic enthusiasm.
                </p>
                <p className="text-[#800020] font-semibold italic">
                  I wish and extend all good wishes for the new height of success in their academic
                  endeavor.
                </p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-[#800020] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
              <h4 className="text-2xl font-serif font-bold mb-6">School Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-[#C5A059]">location_on</span>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-sm opacity-90">
                      Dhanaicha-Malkhanpur, Post-Kotwa
                      <br />
                      Pin code- 221505, Prayagraj, UP
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-icons text-[#C5A059]">email</span>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-sm opacity-90">grishpandey2006@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-icons text-[#C5A059]">phone</span>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-sm opacity-90">9415278868, 7007050611</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Desk */}
      <section id="director-desk" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 bg-gradient-to-br from-[#800020] to-red-900 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="material-icons text-white text-5xl">school</span>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-serif font-bold mb-2">Director's Desk</h3>
              <p className="text-sm text-[#800020] font-semibold mb-6">
                Dr. Girish Kumar Pandey - Director, Ashutosh Memorial School
              </p>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  It was envisaged to establish an educational institution which may cater the need
                  of providing modern education imbibed with innate human values. Ashutosh Memorial
                  School is a dream come true for all those who aspire for good education and
                  integrated development of personality of their children.
                </p>
                <p>
                  The school is driven by its vision of achieving excellence in providing basic
                  education to our kids through knowledge skills and values, which will lead to the
                  making of responsive and committed future citizen of our motherland.
                </p>
                <p>
                  Through the School we mean to serve the society and nation by serving our public
                  and making them empowered, skilled, proud and patriotic citizen of the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal-message" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#800020] to-red-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-[#C5A059]">record_voice_over</span>
                <div>
                  <h3 className="text-3xl font-serif font-bold">Principal's Message</h3>
                  <p className="text-sm opacity-90">Mrs. Ragini Verma - Principal</p>
                </div>
              </div>
              <div className="space-y-4 leading-relaxed text-slate-100">
                <p>
                  A good educational institute is made of good teachers and students, and then it is
                  further strengthened by standard teaching pedagogy as well as standard syllabi and
                  curriculum. In our school both curriculum and teaching schedules are designed in
                  such a way that students are always relaxed when they are put to shift from one
                  subject to other.
                </p>
                <p>
                  Our teachers are not only equipped with modern IT based teaching-learning
                  technology but also are inclined to mentor all the students with a feeling of
                  personalized attention. Co-Curricular activities, Celebration of all the 'Days and
                  Festivals' of national importance, sports activities and participation in in-house
                  and external scientific and academic debates have been an integral components of
                  round the year academic calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator's Message */}
      <section id="coordinator-message" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 dark:bg-zinc-900 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#800020] to-red-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-icons text-white text-3xl">supervisor_account</span>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold mb-2">Coordinator's Message</h3>
              <p className="text-sm text-[#800020] font-semibold">Amit Kumar - Coordinator</p>
            </div>
          </div>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              The process of academic activities in Ashutosh Memorial School starts from
              notification of admission through flexi banners, pamphlets, print media and social
              media platforms, to reach up to far-reach and distant places and to attract good
              students.
            </p>
            <p>
              For us every single student is most valuable, hence, all the students are given due
              attention and care so that they could progress with all-round excellent performance
              and could achieve every success in their future career.
            </p>
          </div>
        </div>
      </section>

      {/* School Information */}
      <section id="school-info" className="py-24 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">School Information</h2>
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
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fee-structure" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Fee Structure</h2>
          <p className="text-slate-600 dark:text-slate-400">Academic Year 2024-25</p>
        </div>

        <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#800020] to-red-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Class</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Total Fee (in Rs) <br />
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
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                      {row.admission}
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Syllabi Section */}
      <section id="syllabi" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Syllabi</h2>
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
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                        {row.compulsory}
                      </td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                        {row.skills}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Note:</strong> EVS – Environmental Studies | SST – Social Studies | GK –
              General Knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Medium of Instructions */}
      <section id="medium" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#800020] to-red-900 text-white p-12 rounded-2xl shadow-xl text-center">
          <span className="material-icons text-6xl mb-6 text-[#C5A059]">translate</span>
          <h2 className="text-4xl font-serif font-bold mb-6">Medium of Instructions</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            The medium of instructions for all the subjects is <strong>English</strong> except the
            two language subjects that are <strong>Hindi</strong> and <strong>Sanskrit</strong>.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section id="infrastructure" className="py-24 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Facilities</h2>
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
                  <span className={`material-icons text-4xl ${facility.color}`}>
                    {facility.icon}
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-[#800020]">
                    {facility.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Houses of School */}
      <section id="houses" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Houses of School</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The house system is a traditional feature of schools. Students are divided into four
            houses, each competing in sports, academics, and various activities to foster team
            spirit and healthy competition.
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
              <div className={`w-20 h-20 ${house.bg} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                <span className="material-icons text-white text-4xl">home</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-center mb-2">{house.name}</h3>
              <p className="text-center text-slate-600 dark:text-slate-400">
                {house.color} House
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* School Timing */}
      <section id="timing" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">School Timing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-orange-600">wb_sunny</span>
                <h3 className="text-2xl font-serif font-bold">Summer Timing</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Nursery to UKG:</span>
                  <span className="text-orange-700 dark:text-orange-400">
                    7:50 AM to 12:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Class I to X:</span>
                  <span className="text-orange-700 dark:text-orange-400">
                    7:50 AM to 01:30 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-blue-600">ac_unit</span>
                <h3 className="text-2xl font-serif font-bold">Winter Timing</h3>
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
        </div>
      </section>

      {/* Admission Rules */}
      <section id="admission-rules" className="py-24 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Admission Rules</h2>
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
                'Transfer Certificate in original issued by the previous school if applicable',
                'Progress report of the previous school if applicable',
                'Indemnity bond by the parents (format available in application form)',
                'Medical Certificate duly signed by Medical Officer',
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-icons text-[#800020] mt-1">check_circle</span>
                  <span className="text-slate-700 dark:text-slate-300">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* General Rules */}
      <section id="general-rules" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">General Rules & Information</h2>
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
                No electronic gadgets (Transistor, Camera, Cell phone, etc.)
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
                Children are supposed to speak English in school campus
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-xs mt-1">arrow_right</span>
                Regular participation in co-curricular activities expected
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Withdrawal Rules */}
      <section id="withdrawal-rules" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-700">
            <h2 className="text-3xl font-serif font-bold mb-8">Withdrawal Rules</h2>
            <div className="space-y-6 text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] flex-shrink-0">info</span>
                <p>
                  <strong>Notice Period:</strong> One calendar month notice in writing is required.
                  In case of failure, one month fee will be charged.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] flex-shrink-0">info</span>
                <p>
                  <strong>Mid-Session Withdrawal:</strong> If the child is withdrawn after the
                  beginning of the academic session, one clear calendar month extra fees will be
                  charged.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] flex-shrink-0">info</span>
                <p>
                  <strong>Transfer Certificate:</strong> Not issued until all dues related to
                  accounts, class teacher, library and sports sections are settled.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-[#800020] flex-shrink-0">warning</span>
                <p>
                  <strong>Grounds for Dismissal:</strong> Indisciplinary behaviour, repeated
                  detentions, or as a rule - only students who can take the school leaving
                  examination and are under 18 years of age will be retained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Event Gallery</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Capturing moments of learning and celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Annual Day Celebration',
                image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&q=80',
              },
              {
                title: 'Sports Day',
                image: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&q=80',
              },
              {
                title: 'Science Exhibition',
                image: 'https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?w=800&q=80',
              },
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#800020] to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Join Our Educational Family
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Enroll your child today and give them the gift of quality education rooted in values
            and excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-[#800020] px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-lg">
              Apply for Admission
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-[#800020] transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#800020] to-red-900 rounded-full flex items-center justify-center">
                <span className="material-icons text-white text-xl">school</span>
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold tracking-tight text-white">AMS</h1>
                <p className="text-[8px] tracking-wider uppercase opacity-70">
                  Ashutosh Memorial School
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Preparing the leaders of tomorrow through rigorous academic programs rooted in values
              and a supportive community environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-serif font-bold mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              {['About AMS', 'Admission Policy', 'Fee Structure', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#800020] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h5 className="text-lg font-serif font-bold mb-6">Academics</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Syllabi', 'Academic Calendar', 'School Timing', 'Houses of School'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-[#800020] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-serif font-bold mb-6">Contact Info</h5>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <span className="material-icons text-xs mt-1 text-[#C5A059]">location_on</span>
                <p>Dhanaicha-Malkhanpur, Post-Kotwa, Prayagraj, UP - 221505</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-icons text-xs mt-1 text-[#C5A059]">phone</span>
                <p>9415278868, 7007050611</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-icons text-xs mt-1 text-[#C5A059]">email</span>
                <p>grishpandey2006@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2024 Ashutosh Memorial School. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>

      {/* Material Icons & Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Material+Icons&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        body {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }

        .material-icons {
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  );
}