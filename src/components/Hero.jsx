import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-blue-100/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live revenue insights for SaaS and e‑commerce
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Take control of your subscriptions
          </h1>
          <p className="mt-4 text-blue-100/85 text-lg">
            Centralize billing, reduce churn, and ship pricing experiments fast. Built for modern fintech and digital commerce teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:bg-blue-50 transition-colors">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white px-5 py-3 font-medium hover:bg-white/15 transition-colors">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-blue-100/70 text-sm">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/48?img=${i+10}`} className="h-8 w-8 rounded-full ring-2 ring-slate-900"/>
              ))}
            </div>
            <p>
              Trusted by 1,200+ teams • Avg. +7.3% MRR in 90 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
