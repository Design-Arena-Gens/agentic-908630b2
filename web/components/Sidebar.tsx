"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ListCheck,
  Settings,
  Plus,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/tasks", label: "Tasks", icon: ListCheck },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="group/sidebar fixed inset-y-0 left-0 z-40 hidden w-64 shrink-0 border-r border-white/10 bg-black/60 px-3 py-4 backdrop-blur md:block">
      <div className="flex items-center justify-between px-2 py-2">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 to-blue-500" />
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            Nova
          </span>
        </Link>
        <button className="rounded-full p-1 text-zinc-400 hover:bg-white/5 hover:text-zinc-200">
          <Plus size={16} />
        </button>
      </div>

      <nav className="mt-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                active
                  ? "bg-white/10 text-zinc-50"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
              )}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6">
        <p className="px-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
          Projects
        </p>
        <div className="mt-2 space-y-1">
          {[
            "Website Redesign",
            "Mobile App",
            "Growth Experiments",
            "Infra",
          ].map((name) => (
            <button
              key={name}
              className="w-full truncate rounded-md px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-2">
          <div className="h-7 w-7 shrink-0 rounded-md bg-gradient-to-br from-rose-500 to-orange-400" />
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-zinc-100">You</p>
            <p className="truncate text-xs text-zinc-500">@you</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
