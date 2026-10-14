/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ExternalLink,
  UploadCloud,
  CheckCircle,
  MessageSquare,
  Award,
  Menu,
  X,
  GraduationCap,
  Building2,
  Code2,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';

import fypLogo from './assets/fyp_system_logo.png';
import heroBgGif from './assets/hero-bg.gif';
import abdulRehmanImg from './assets/images/creator_abdul_rehman.png';
import sohaibImg from './assets/images/creator_sohaib.png';

interface Creator {
  id: string;
  name: string;
  regNo: string;
  role: string;
  university: string;
  campus: string;
  image: string;
  fallbackImg: string;
  summary: string;
  skills: string[];
  tasks: string[];
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const systemUrl = 'https://fypmanagement.ai.studio/login';

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCreator(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const creators: Creator[] = [
    {
      id: 'abdul-rehman',
      name: 'Abdul Rehman',
      regNo: '7923',
      role: 'Full Stack Developer',
      university: 'Abasyn University',
      campus: 'Islamabad Campus',
      image: abdulRehmanImg,
      fallbackImg: '/creator_abdul_rehman.png',
      summary:
        'Worked on both frontend and backend of the FYP Management System. Built responsive user interfaces and connected them to server APIs.',
      skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'API Integration', 'UI Design'],
      tasks: [
        'Designed easy and modern user pages for students and teachers',
        'Connected frontend components with backend database endpoints',
        'Added smooth animations and mobile responsive layouts',
        'Handled client-side validation and secure login states'
      ]
    },
    {
      id: 'sohaib-maqsood',
      name: 'Sohaib Maqsood',
      regNo: '7941',
      role: 'Backend Developer',
      university: 'Abasyn University',
      campus: 'Islamabad Campus',
      image: sohaibImg,
      fallbackImg: '/creator_sohaib.png',
      summary:
        'Built the backend architecture and server logic. Managed database schemas, authentication security, and file upload endpoints for project documents.',
      skills: ['Node.js', 'Express', 'Database Architecture', 'REST APIs', 'Server Security', 'Data Validation'],
      tasks: [
        'Engineered core backend server routes and data models',
        'Implemented milestone submission workflows and file upload logic',
        'Configured authentication checks and role-based permissions',
        'Structured evaluation grading logic and database storage'
      ]
    }
  ];

  const features = [
    {
      icon: UploadCloud,
      title: 'Submit Project',
      desc: 'Upload your topic and project files easily in one place.'
    },
    {
      icon: CheckCircle,
      title: 'Track Progress',
      desc: 'Check your deadlines and see what is done and what is next.'
    },
    {
      icon: MessageSquare,
      title: 'Teacher Feedback',
      desc: 'Get comments and quick approvals directly from your supervisor.'
    },
    {
      icon: Award,
      title: 'Final Grading',
      desc: 'See your viva score and final results clearly and quickly.'
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100 p-1 flex items-center justify-center shadow-xs"
            >
              <img
                src={fypLogo}
                alt="FYP System Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/fyp-logo.png';
                }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                FYP Management System
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-1">
                Abasyn University Islamabad Campus
              </span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#creators" className="hover:text-blue-600 transition-colors">Developers</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={systemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-colors"
            >
              <span>Go to System</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 flex flex-col gap-3 shadow-lg"
            >
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#creators"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                Developers
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                Features
              </a>
              <a
                href={systemUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
              >
                <span>Go to System (Login)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroBgGif}
            alt="Animated tech background"
            className="w-full h-full object-cover opacity-70 mix-blend-multiply"
            onError={(e) => {
              e.currentTarget.src = '/hero-bg.gif';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-blue-100/40 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="mb-6 p-3 rounded-3xl bg-white/95 backdrop-blur-sm border border-blue-100 shadow-xl shadow-blue-500/10"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <img
                src={fypLogo}
                alt="FYP System Emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/fyp-logo.png';
                }}
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight"
          >
            FYP Management <span className="text-blue-600">System</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed font-normal"
          >
            A simple online portal for students and teachers to submit, manage, and grade Final Year Projects easily.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={systemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[220px] px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-colors"
            >
              <span>Go to System</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-sm text-slate-600 font-medium"
          >
            Created by{' '}
            <button
              onClick={() => setSelectedCreator(creators[0])}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Abdul Rehman (7923)
            </button>{' '}
            &{' '}
            <button
              onClick={() => setSelectedCreator(creators[1])}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Sohaib Maqsood (7941)
            </button>
            <span className="block text-xs text-slate-500 mt-1">
              Students at Abasyn University Islamabad Campus
            </span>
          </motion.p>
        </div>
      </section>

      <section id="creators" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Project Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Meet the Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Students at <span className="font-semibold text-slate-900">Abasyn University Islamabad Campus</span>
            </p>
            <p className="text-xs text-blue-600 font-medium mt-1">
              Click on any developer card to see their full profile
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {creators.map((creator, i) => (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCreator(creator)}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/15 transition-all flex flex-col items-center text-center cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCreator(creator);
                  }
                }}
              >

                <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>

                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-100 shadow-md mb-5 bg-slate-100 group-hover:border-blue-500 transition-colors">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = creator.fallbackImg;
                    }}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {creator.name}
                </h3>

                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs font-mono mb-2">
                  Reg No: {creator.regNo}
                </div>
                <p className="text-sm font-bold text-blue-600 mb-1">
                  {creator.role}
                </p>

                <p className="text-xs text-slate-500 font-medium">
                  {creator.university} · {creator.campus}
                </p>

                <div className="mt-5 pt-3 border-t border-slate-100 w-full text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center justify-center gap-1">
                  <span>Tap to open details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCreator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCreator(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
            >
     
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            
                <button
                  onClick={() => setSelectedCreator(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close profile modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg shrink-0 bg-white">
                    <img
                      src={selectedCreator.image}
                      alt={selectedCreator.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = selectedCreator.fallbackImg;
                      }}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-blue-50 text-xs font-mono font-bold mb-2">
                      Reg No: {selectedCreator.regNo}
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {selectedCreator.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-100 mt-0.5">
                      {selectedCreator.role}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-blue-100/90 mt-2 font-medium">
                      <GraduationCap className="w-4 h-4 shrink-0 text-blue-200" />
                      <span>{selectedCreator.university}</span>
                      <span>·</span>
                      <span>{selectedCreator.campus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* University Details Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 text-xs text-blue-900 font-medium">
                  <Building2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold block text-blue-950">Student Profile</span>
                    <span>Abasyn University Islamabad Campus</span>
                  </div>
                </div>

                {/* About Role */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    About Role & Work
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {selectedCreator.summary}
                  </p>
                </div>

                {/* Key Tasks in Project */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Project Work
                  </h4>
                  <div className="space-y-2">
                    {selectedCreator.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCreator.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Close Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedCreator(null)}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Simple 4-Feature Cards */}
      <section id="features" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What You Can Do
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Everything made easy for your final year project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple CTA Box */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-blue-600 p-8 sm:p-12 text-center text-white shadow-xl shadow-blue-600/25 flex flex-col items-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Ready to Log In?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-md mb-8">
              Open the system to submit your work and view your project progress.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={systemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-bold text-base shadow-md transition-colors"
            >
              <span>Go to System</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-slate-100 bg-slate-50/50 py-8 text-center text-xs sm:text-sm text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div></div>
          <p className="font-medium text-slate-700">
            <span className="font-semibold text-slate-900">Abdul Rehman</span> (7923) · Full Stack &{' '}
            <span className="font-semibold text-slate-900">Sohaib Maqsood</span> (7941) · Backend
            <span className="block text-[11px] text-slate-400">Abasyn University Islamabad Campus</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
