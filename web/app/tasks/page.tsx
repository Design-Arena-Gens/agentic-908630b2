"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Design auth screens", done: false },
    { id: 2, title: "API for tasks", done: true },
    { id: 3, title: "Setup CI", done: false },
  ]);

  const toggle = (id: number) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-zinc-100">Tasks</h1>
        <button className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10">
          New Task
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5">
        {tasks.map((task, idx) => (
          <button
            key={task.id}
            onClick={() => toggle(task.id)}
            className={
              "flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5" +
              (idx !== tasks.length - 1 ? " border-b border-white/10" : "")
            }
          >
            {task.done ? (
              <CheckCircle2 className="text-emerald-400" size={18} />
            ) : (
              <Circle className="text-zinc-500" size={18} />
            )}
            <span className={task.done ? "line-through text-zinc-500" : ""}>
              {task.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
