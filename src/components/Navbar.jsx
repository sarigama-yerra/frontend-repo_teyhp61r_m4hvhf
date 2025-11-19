import { Menu, CreditCard, Shield, LineChart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <CreditCard size={18} />
              </span>
              <div className="text-left">
                <p className="text-white font-semibold leading-none">Subscriptly</p>
                <p className="text-[11px] text-blue-200/70 leading-none mt-1">Subscription OS</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                Sign in
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-lg shadow-white/10 hover:bg-blue-50 transition-colors"
              >
                <LineChart size={16} /> Get started
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 bg-white/5 text-blue-100/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex gap-2">
                <a href="#" className="flex-1 rounded-lg bg-white/5 text-center py-2 text-blue-100/90">Sign in</a>
                <a href="#pricing" className="flex-1 rounded-lg bg-white text-slate-900 text-center py-2 font-semibold">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
