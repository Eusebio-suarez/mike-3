import logo from "../../assets/logo.png"

export const NavBar = () => {
  return (
    <nav className='flex text-sm max-[650px]:flex-col max-[650px]:gap-7 min-lg: text-[#ebeef3] py-10 px-20 items-center justify-between'>
        <img src={logo} alt="" />
        <ul className='flex gap-4 min-lg:gap-10'>
            <li><a className="py-0.5 px-3 bg-[#3a464e] rounded-2xl transition duration-400" href="#">Home</a></li>
            <li><a className="py-0.5 px-3 hover:bg-[#3a464e] rounded-2xl transition duration-400" href="#">About</a></li>
            <li><a className="py-0.5 px-3 hover:bg-[#3a464e] rounded-2xl transition duration-400" href="#">Work</a></li>
            <li><a className="py-0.5 px-3 hover:bg-[#3a464e] rounded-2xl transition duration-400" href="#">Contact</a></li>
        </ul>
    </nav>
  )
}
