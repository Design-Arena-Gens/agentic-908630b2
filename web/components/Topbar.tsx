"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function Topbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-30 -mx-4 mb-6 border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ( / )"
            className="h-9 w-full rounded-md border border-white/10 bg-white/5 pl-8 pr-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-white/20"
          />
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10">
            New Task
          </button>
          <button className="rounded-md border border-white/10 bg-white/0 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/5">
            Invite
          </button>
        </div>
      </div>
    </header>
  );
}
