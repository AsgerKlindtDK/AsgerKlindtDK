function Toolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/10 bg-background-light dark:bg-[#15282c] px-4 py-2">
      {/* Toolbar content will go here */}
    </div>
  );
}

function TaskList() {
  return (
    <div className="pr-2 relative">
      <div className="grid grid-cols-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pb-2 px-2 border-b border-gray-200/10 h-[41px] items-end">
        <span>Task Name</span>
      </div>
      <div className="mt-2 space-y-1 text-sm">
        <div className="flex items-center rounded-md bg-primary/20 text-white font-semibold h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base">expand_more</span> <span>Phase 1: Research</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-dark-accent/50 pl-8 bg-dark-accent text-gray-300 h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base invisible">expand_more</span> <span className="font-normal text-gray-400">Task 1.1: Market Analysis</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-dark-accent/50 pl-8 bg-dark-accent text-gray-300 h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base invisible">expand_more</span> <span className="font-normal text-gray-400">Task 1.2: Competitor Review</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-white/5 text-white font-semibold h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base">expand_more</span> <span>Phase 2: Design</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-dark-accent/50 pl-8 bg-dark-accent text-gray-300 h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-amber-400">star</span> <span className="font-normal text-gray-400">Milestone: UI Mockups Approved</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-white/5 text-white font-semibold h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base">chevron_right</span> <span>Phase 3: Development</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-dark-accent/50 pl-8 bg-dark-accent text-gray-300 h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base invisible">expand_more</span> <span className="font-normal text-gray-400">Task 3.1: Backend Setup</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-dark-accent/50 pl-8 bg-dark-accent text-gray-300 h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base invisible">expand_more</span> <span className="font-normal text-gray-400">Task 3.2: Frontend Integration</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-white/5 text-white font-semibold h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base">expand_more</span> <span>Phase 4: Testing</span></div>
        </div>
        <div className="flex items-center rounded-md hover:bg-dark-accent/50 pl-8 bg-dark-accent text-gray-300 h-[32px] px-2">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-amber-400">star</span> <span className="font-normal text-gray-400">Milestone: Pre-launch Review</span></div>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="pl-4 overflow-x-auto border-l border-gray-200/10">
      <div className="relative min-w-[1200px] h-full">
        <div className="grid grid-cols-12 h-10 border-b border-gray-200/10">
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Oct '23</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Nov '23</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Dec '23</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Jan '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Feb '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Mar '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Apr '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">May '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Jun '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Jul '24</div></div>
          <div className="col-span-1 border-r border-gray-200/10"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Aug '24</div></div>
          <div className="col-span-1"><div className="text-xs text-center p-2 text-gray-400 dark:text-gray-500 font-semibold h-full flex items-end justify-center">Sep '24</div></div>
        </div>
        <div className="absolute inset-x-0 top-10 flex flex-col justify-start -left-[300px] pointer-events-none">
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
          <div className="h-[32px] border-b border-gray-200/5"></div>
        </div>
        <div className="absolute top-10 mt-2 w-full space-y-1 pr-2">
          <div className="h-6 rounded flex items-center" style={{marginLeft: '2%', width: '22%'}}>
            <div className="h-full bg-indigo-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[70%] h-full bg-indigo-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '2%', width: '14%'}}>
            <div className="h-full bg-purple-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[90%] h-full bg-purple-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '17%', width: '7%'}}>
            <div className="h-full bg-purple-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-full h-full bg-purple-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '25%', width: '28%'}}>
            <div className="h-full bg-teal-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[40%] h-full bg-teal-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '45%', width: '0.5%'}}>
            <div className="h-full w-full flex items-center justify-center">
              <div className="size-4 bg-amber-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '48%', width: '20%'}}>
            <div className="h-full bg-blue-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[60%] h-full bg-blue-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '62%', width: '8%'}}>
            <div className="h-full bg-blue-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[80%] h-full bg-blue-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '70%', width: '15%'}}>
            <div className="h-full bg-green-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[30%] h-full bg-green-400 rounded"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '80%', width: '0.5%'}}>
            <div className="h-full w-full flex items-center justify-center">
              <div className="size-4 bg-amber-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="h-6 rounded flex items-center" style={{marginLeft: '85%', width: '4%'}}>
            <div className="h-full bg-red-500 rounded text-white text-xs flex items-center px-2 w-full">
              <div className="w-[30%] h-full bg-red-400 rounded"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-10 bottom-0 w-0.5 bg-primary" style={{left: '35%'}}>
          <div className="absolute -top-7 -ml-6 bg-primary text-[#111f22] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">TODAY</div>
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <main className="flex flex-1 flex-col bg-background-light dark:bg-background-dark">
      <Toolbar />
      <div className="flex-1 overflow-auto p-6">
        <div className="relative grid grid-cols-[300px_1fr] h-full text-sm">
          <TaskList />
          <Timeline />
        </div>
      </div>
    </main>
  );
}
