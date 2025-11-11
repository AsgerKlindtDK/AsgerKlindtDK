export default function Header() {
  return (
    <header className="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-gray-200/10 bg-[#111f22] px-6 py-3 text-white">
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ganttify</h2>
      </div>
      <div className="flex-1 px-8">
        <p className="text-white tracking-light text-xl font-bold leading-tight text-center">New Project - Q3 Marketing Campaign</p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div className="hidden items-center gap-6 md:flex">
          <a className="text-white text-sm font-medium leading-normal" href="#">Save</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Load</a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#111f22] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Add Task</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#234248] text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Export</span>
        </button>
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#234248] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <span className="material-symbols-outlined text-white text-[20px]">notifications</span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar with an abstract gradient" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu25JI2K4m5Vh1rZmiFIek8bdoz7R-cgV23qSm__UoZENGBE6KRDfjCJgiEIThugFCA9cV2mvqZjsWfCbkSwolnNyj7fyTpbBzT777FEF5ZNZV7tVEGYdB33OXJv7VqhjSYDBpN4ByrtmAoeGy_36YXug3Rr4jJr4Iw_cs-FaOFHVpNVWvlxmbhPk2O_VT48e0_8ULiFiKuQWDS7Q3dfkyUHpVwSoK9S_nByDL0wB4EvURpAYMIkNGXH2afogWY0UPKr1mffjjwaI")'}}></div>
      </div>
    </header>
  );
}
