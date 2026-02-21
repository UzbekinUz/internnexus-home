import React, { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
  Code,
  PenTool,
  BarChart3,
  Megaphone,
  Menu,
  X,
  DollarSign,
  Star,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

// --- Interfaces ---

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
  color: string;
}

interface JobCardProps {
  title: string;
  company: string;
  type: string;
  location: string;
  salary: string;
  tags: string[];
  logoColor: string;
}

// --- Components ---

const Navbar: React.FC<NavbarProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-none p-2 rounded-lg">
            <img src="/mini.png" alt="logo" className="rounded-sm w-7.5" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-600">
            InternNexus
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://internnexus-internships.vercel.app/"
            className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            Find Jobs
          </a>
          <a
            href="https://internnexus-internships.vercel.app/"
            className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            Companies
          </a>
          <a
            href="https://internnexus-internships.vercel.app/"
            className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            Resources
          </a>
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://internnexus-internships.vercel.app/"
              className="bg-white text-slate-950 px-4 py-2 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              Start now
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-slate-900 border-b border-slate-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="https://internnexus-internships.vercel.app/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Find Jobs
          </a>
          <a
            href="https://internnexus-internships.vercel.app/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Companies
          </a>
          <a
            href="https://internnexus-internships.vercel.app/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Resources
          </a>
          <div className="mt-4 flex flex-col gap-2 px-3">
            <a
              className="w-full text-center py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
              href="https://internnexus-internships.vercel.app/"
            >
              Start now
            </a>
          </div>
        </div>
      </div>
    )}
  </nav>
);

const Hero: React.FC = () => (
  <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 mb-8 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        <span className="text-xs font-medium text-slate-300">
          Over 500+ new internships added this week
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
        Launch Your Career in <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400">
          The Digital Age
        </span>
      </h1>

      <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
        Connect with top-tier companies and startups. Find internships that
        match your skills and aspirations.
      </p>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto bg-slate-900/80 p-2 rounded-2xl border border-slate-800 shadow-2xl shadow-violet-900/20 backdrop-blur-xl flex flex-col sm:flex-row gap-2">
        <div className="flex-1 flex items-center px-4 h-12 sm:h-auto border-b sm:border-b-0 sm:border-r border-slate-800">
          <Search className="text-slate-500 mr-3" size={20} />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="bg-transparent border-none outline-none text-white placeholder-slate-500 w-full"
          />
        </div>
        <div className="flex-1 flex items-center px-4 h-12 sm:h-auto">
          <MapPin className="text-slate-500 mr-3" size={20} />
          <input
            type="text"
            placeholder="City, state, or remote"
            className="bg-transparent border-none outline-none text-white placeholder-slate-500 w-full"
          />
        </div>
        <a
          href="https://internnexus-internships.vercel.app/"
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-violet-600/25"
        >
          Search
        </a>
      </div>

      {/* Trusted By */}
      <div className="mt-16 pt-8 border-t border-slate-800/50">
        <p className="text-slate-500 text-sm font-medium mb-6">
          TRUSTED BY INNOVATIVE TEAMS
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simple geometric logos as placeholders */}
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-6 h-6 bg-white rounded-full"></div>Acme Corp
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
            Global
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-6 h-6 bg-white rotate-45"></div>Nexus
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            Sphere
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  title,
  count,
  color,
}) => (
  <div className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all cursor-pointer">
    <div
      className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
    >
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-500 text-sm">{count} opportunities</p>
  </div>
);

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  type,
  location,
  salary,
  tags,
  logoColor,
}) => (
  <a href="https://internnexus-internships.vercel.app/"  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all group cursor-pointer hover:shadow-xl hover:shadow-violet-900/10">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4">
        <div
          className={`w-12 h-12 rounded-xl ${logoColor} flex items-center justify-center text-white font-bold text-xl`}
        >
          {company.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm">{company}</p>
        </div>
      </div>
      <button className="text-slate-500 hover:text-white transition-colors">
        <div className="p-2 rounded-full hover:bg-slate-800">
          <Star size={20} active:text-yellow-400/>
        </div>
      </button>
    </div>

    <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-sm text-slate-400">
      <div className="flex items-center gap-1">
        <Briefcase size={14} />
        <span>{type}</span>
      </div>
      <div className="flex items-center gap-1">
        <MapPin size={14} />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-1">
        <DollarSign size={14} />
        <span>{salary}</span>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"
        >
          {tag}
        </span>
      ))}
    </div>
  </a>
);

const FeatureSection: React.FC = () => (
  <div className="py-24 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stand out with a <br />
            <span className="text-violet-400">Dynamic Profile</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Ditch the boring resume. Create a profile that showcases your
            projects, skills, and personality to potential employers in a way
            that static PDFs can't.
          </p>

          <div className="space-y-4">
            {[
              "Showcase GitHub repositories and live projects",
              "Verify skills with mini-assessments",
              "Get discovered by top recruiters directly",
              "One-click applications to thousands of jobs",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-green-400" />
                </div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <a href='https://internnexus-internships.vercel.app/' className="mt-8 flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors">
            Create your profile <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-violet-600/20 to-cyan-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            {/* Mock Profile UI */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-pink-500 to-violet-500" />
              <div>
                <div className="h-4 w-32 bg-slate-700 rounded mb-2" />
                <div className="h-3 w-24 bg-slate-800 rounded" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-slate-800/50 rounded-xl border border-slate-800" />
              <div className="flex gap-3">
                <div className="h-24 flex-1 bg-slate-800/50 rounded-xl border border-slate-800" />
                <div className="h-24 flex-1 bg-slate-800/50 rounded-xl border border-slate-800" />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Offer Received</p>
                <p className="text-white font-bold">Software Intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br overflow-hidden  flex items-center justify-center">
              <span className="font-bold text-lg overflow-hidden"><img src="/mini.png" className="w-full rounded-sm" alt="" /></span>
            </div>
            <span className="text-xl font-bold text-white">InternNexus</span>
          </div>
          <p className="text-slate-500 text-sm">
            Empowering the next generation of tech talent to find meaningful
            work.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Browse Internships
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Browse Companies
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Salaries
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Success Stories
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                About Us
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Careers
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Blog
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href='https://internnexus-internships.vercel.app/' className="hover:text-violet-400">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-sm">
          © 2024 InternNexus Inc. All rights reserved.
        </p>
        <div className="flex gap-6">
          {/* Social icons would go here */}
          <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer"></div>
          <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer"></div>
          <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const categories: CategoryCardProps[] = [
    {
      title: "Engineering",
      count: "450+",
      icon: Code,
      color: "bg-blue-500/20",
    },
    { title: "Design", count: "120+", icon: PenTool, color: "bg-pink-500/20" },
    {
      title: "Marketing",
      count: "200+",
      icon: Megaphone,
      color: "bg-orange-500/20",
    },
    {
      title: "Finance",
      count: "80+",
      icon: BarChart3,
      color: "bg-green-500/20",
    },
  ];

  const jobs: JobCardProps[] = [
    {
      title: "Junior Economic Analyst Internship",
      company: "Oppurtunities.com",
      type: "Remote / Hybrid",
      location: "Canada",
      salary: "For free",
      tags: [ "World Bank & IMF datasets", "PowerPoint reporting","Analyze inflation", "GDP", "Market data"],
      logoColor: "bg-indigo-600",
    },{
      title: "Finance & Banking Operations Internship",
      company: "Opportunity.com",
      type: "Practical business internship",
      location: "Tokio, China",
      salary: "For free",
      tags: ["Loan/investment evaluation basics", "Financial documentation", "Company cash flow"],
      logoColor: "bg-amber-600",
    },{
      title: "Market Research Analyst Internship",
      company: "Opportunity.com",
      type: "Remote",
      location: "San Francisco, CA",
      salary: "$45 - $50 / hr",
      tags: ["Conduct surveys", "Market entry reports"],
      logoColor: "bg-indigo-600",
    },{
      title: "Business Data Analyst Internship",
      company: "TechFlow",
      type: "Remote",
      location: "San Francisco, CA",
      salary: "For free",
      tags: ["Clean datasets","Excel", "Charts & dashboards", "Google Data Studio", " Power BI "],
      logoColor: "bg-emerald-600",
    },{
      title: "Economic Consulting Internship (Project-Based)",
      company: "InternGo",
      type: "Remote",
      location: "San Francisco, CA",
      salary: "$25 - $35 / hr",
      tags: ["React", "TypeScript", "Tailwind"],
      logoColor: "bg-slate-700",
    },{
      title: "Frontend Developer Intern",
      company: "Opportunity.com",
      type: "Very realistic startup-style internship",
      location: "San Francisco, CA",
      salary: "$25 - $35 / hr",
      tags: ["Pricing strategy", "Cost reduction analysis", "Market expansion research"],
      logoColor: "bg-indigo-600",
    },
    {
      title: "UX/UI Design Intern",
      company: "CreativeBox",
      type: "Hybrid",
      location: "New York, NY",
      salary: "$22 - $30 / hr",
      tags: ["Figma", "Prototyping", "User Research"],
      logoColor: "bg-rose-600",
    },
    {
      title: "Data Science Intern",
      company: "DataMinds",
      type: "Remote",
      location: "Austin, TX",
      salary: "$30 - $45 / hr",
      tags: ["Python", "SQL", "Machine Learning"],
      logoColor: "bg-emerald-600",
    },
    {
      title: "Product Management Intern",
      company: "StartUp Inc",
      type: "On-site",
      location: "Seattle, WA",
      salary: "$28 - $40 / hr",
      tags: ["Strategy", "Agile", "Roadmapping"],
      logoColor: "bg-amber-600",
    },
    {
      title: "Marketing Growth Intern",
      company: "ViralLoop",
      type: "Remote",
      location: "Los Angeles, CA",
      salary: "$20 - $28 / hr",
      tags: ["SEO", "Content", "Analytics"],
      logoColor: "bg-violet-600",
    },
    {
      title: "Cybersecurity Intern",
      company: "SecureNet",
      type: "Hybrid",
      location: "Boston, MA",
      salary: "$35 - $50 / hr",
      tags: ["Network Security", "Python", "Linux"],
      logoColor: "bg-slate-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500/30">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Hero />

      {/* Categories Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Explore Opportunities
            </h2>
            <p className="text-slate-400">Browse internships by category</p>
          </div>
          <a
            href='https://internnexus-internships.vercel.app/'
            className="hidden sm:flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            View all categories <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Latest Internships
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hand-picked opportunities from the world's best companies. Updated
              hourly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href='https://internnexus-internships.vercel.app/' className="px-8 py-3 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-900 hover:border-violet-500 transition-all">
              Load More Opportunities
            </a>
          </div>
        </div>
      </section>

      <FeatureSection />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 to-violet-950/20" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to kickstart your career?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join 50,000+ students finding their dream internships on
            InternNexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://internnexus-internships.vercel.app/' className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors">
              Find an Internship
            </a>
            <a href='https://internnexus-internships.vercel.app/' className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors border border-slate-700">
              Post a Job (Free)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
