import type { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { navItems, mobileNavItems } from '@/lib/mock-data';

export function AppShell({
  currentPath,
  children,
}: {
  currentPath: string;
  children: ReactNode;
}) {
  const normalized = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-violet-500 shadow-glow">
              <span className="text-lg font-black">L</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">LifeMindAI</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">HealthWorld</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const active = normalized === item.href || (item.href !== '/' && normalized.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'nav-pill',
                    active && 'border-brand-400/60 bg-brand-500/10 text-white shadow-glow',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="nav-pill">Search</button>
            <button className="nav-pill">Notifications</button>
            <Link href="/profile" className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-violet-500 text-sm font-bold ">A</div>
              <span className="text-sm">Amina</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/80 bg-slate-950/90 p-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-5 gap-2">
          {mobileNavItems.map((item) => {
            const active = normalized === item.href || (item.href !== '/' && normalized.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[10px] font-medium transition',
                  active ? 'bg-brand-500/15 text-brand-200' : 'text-slate-400',
                )}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
