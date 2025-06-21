import { NavBar } from './NavBar'
import iphone from "../../assets/iphone.png"
export const Header = () => {
  return (
    <div className='bg-[#4c5a65] flex flex-col'>
        <NavBar></NavBar>
        <div className='flex w-full justify-evenly max-lg:gap-8 max-lg:flex-col-reverse max-lg:text-center items-center'>
            <div>
                <img src={iphone} alt="" />
            </div>
            <div className='max-w-[460px] w-full flex flex-col gap-2'>
                <h2 className='text-4xl text-white font-bold'>We desing IOS apps</h2>
                <p className='text-gray-200'>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis ut. In nulla enim. Phasellus molestie.</p>
                <p className='text-gray-400'>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus hhivglo  nibh porttitor. Ut in nulla enim. Phasellus molestie tempor. Suspendisse dictum feugiat</p>
            </div>
        </div>
    </div>
  )
}
