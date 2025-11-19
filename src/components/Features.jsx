import { BarChart3, Layers, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Unified analytics",
    desc: "Revenue, churn, LTV and cohorts in one place, updated in real‑time.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Plan & pricing engine",
    desc: "Experiment with tiers, trials, coupons and add‑ons without code deploys.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Bank‑grade security",
    desc: "PCI‑compliant vault, role‑based access and audit logs by default.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Automations",
    desc: "Dunning, receipts, proration and revenue recognition handled for you.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything to run subscriptions</h2>
          <p className="mt-3 text-blue-100/80">A modern operating system for subscriptions — from checkout to revenue reporting.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6">
              <div className="h-9 w-9 rounded-lg bg-white/10 text-white inline-flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
