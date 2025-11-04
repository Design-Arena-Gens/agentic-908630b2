export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
        <h1 className="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-2xl font-semibold text-transparent">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Here's a quick overview of your workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {["Active Tasks", "Upcoming", "Completed"].map((title, i) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <h2 className="text-sm font-medium text-zinc-300">{title}</h2>
            <div className="mt-3 space-y-2">
              {Array.from({ length: 4 - (i % 3) }).map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-zinc-300"
                >
                  Task {idx + 1} ? improve onboarding flow
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
