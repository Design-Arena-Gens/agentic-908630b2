export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-zinc-100">Settings</h1>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-sm font-medium text-zinc-300">Workspace</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs text-zinc-400">Name</span>
            <input
              defaultValue="Nova"
              className="h-9 w-full rounded-md border border-white/10 bg-black/40 px-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-white/20"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs text-zinc-400">Timezone</span>
            <select className="h-9 w-full rounded-md border border-white/10 bg-black/40 px-3 text-sm text-zinc-100 outline-none focus:border-white/20">
              <option>UTC</option>
              <option>America/Sao_Paulo</option>
              <option>Europe/Lisbon</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
