export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, usage‑aware pricing</h2>
          <p className="mt-3 text-blue-100/80">Start free. Scale only when your revenue does. No contracts.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6">
            <p className="text-sm text-blue-100/80">Starter</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">$0</h3>
            <p className="mt-2 text-blue-100/75 text-sm">Up to $1k MRR</p>
            <ul className="mt-4 space-y-2 text-blue-100/80 text-sm">
              <li>Hosted checkout</li>
              <li>Basic analytics</li>
              <li>Email receipts</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:bg-blue-50 transition-colors">Get started</a>
          </div>

          {/* Growth */}
          <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/0 border border-white/10 p-6 ring-2 ring-white/20">
            <p className="text-sm text-blue-100/80">Growth</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">2.9% + 30¢</h3>
            <p className="mt-2 text-blue-100/75 text-sm">Everything in Starter, plus</p>
            <ul className="mt-4 space-y-2 text-blue-100/80 text-sm">
              <li>Customer portal</li>
              <li>Coupons and trials</li>
              <li>Dunning & retries</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:bg-blue-50 transition-colors">Choose Growth</a>
          </div>

          {/* Scale */}
          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6">
            <p className="text-sm text-blue-100/80">Scale</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Custom</h3>
            <p className="mt-2 text-blue-100/75 text-sm">For high‑volume teams</p>
            <ul className="mt-4 space-y-2 text-blue-100/80 text-sm">
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>SOC2 reports</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:bg-blue-50 transition-colors">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
