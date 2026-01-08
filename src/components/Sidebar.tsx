export default function Sidebar() {
  return (
    <aside className="w-80 shrink-0 border-l border-gray-200/10 bg-[#15282c] p-6 flex flex-col gap-6">
      <h3 className="text-lg font-bold text-white">Task Details</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-300" htmlFor="task-name">Task Name</label>
          <input className="mt-1 block w-full bg-[#111f22] border-none rounded-md text-white focus:ring-primary focus:ring-2" id="task-name" type="text" value="Phase 1: Research"/>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300" htmlFor="progress">Progress</label>
          <div className="flex items-center gap-2 mt-1">
            <input className="w-full h-2 bg-[#234248] rounded-lg appearance-none cursor-pointer accent-primary" id="progress" type="range" value="70"/>
            <span className="text-sm text-white">70%</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300" htmlFor="start-date">Start Date</label>
            <input className="mt-1 block w-full bg-[#111f22] border-none rounded-md text-white text-sm focus:ring-primary focus:ring-2" id="start-date" type="date" value="2023-10-15"/>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300" htmlFor="end-date">End Date</label>
            <input className="mt-1 block w-full bg-[#111f22] border-none rounded-md text-white text-sm focus:ring-primary focus:ring-2" id="end-date" type="date" value="2024-01-10"/>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300">Color</label>
          <div className="mt-2 grid grid-cols-8 gap-2">
            <button className="size-6 rounded-full bg-indigo-500 ring-2 ring-primary ring-offset-2 ring-offset-dark-accent"></button>
            <button className="size-6 rounded-full bg-purple-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-teal-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-pink-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-orange-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-sky-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-green-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-yellow-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-red-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-gray-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-fuchsia-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-lime-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-cyan-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full bg-rose-500 hover:ring-2 hover:ring-white/50"></button>
            <button className="size-6 rounded-full flex items-center justify-center bg-dark-accent hover:bg-dark-accent/80">
              <span className="material-symbols-outlined text-base text-gray-300">add</span>
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300" htmlFor="dependencies">Dependencies</label>
          <div className="mt-1 flex items-center justify-between p-2 bg-[#111f22] rounded-md">
            <span className="text-sm text-gray-400">Depends on: Task 0.0</span>
            <button className="text-gray-400 hover:text-white"><span className="material-symbols-outlined text-base">close</span></button>
          </div>
          <button className="mt-2 w-full text-sm text-primary hover:text-primary/80">+ Add Dependency</button>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300" htmlFor="notes">Notes</label>
          <textarea className="mt-1 block w-full bg-[#111f22] border-none rounded-md text-white focus:ring-primary focus:ring-2" id="notes" placeholder="Add a description..." rows={4}></textarea>
        </div>
      </div>
    </aside>
  );
}
