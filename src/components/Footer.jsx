export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-sm text-blue-100/70">© 2025 Subscriptly, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-blue-100/80 hover:text-white">Privacy</a>
            <a href="#" className="text-blue-100/80 hover:text-white">Terms</a>
            <a href="#" className="text-blue-100/80 hover:text-white">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
