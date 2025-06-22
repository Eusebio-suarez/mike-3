import projectImg from "../../assets/shape02.png"
import project1 from "../../assets/project01.jpg"
import project2 from "../../assets/project02.jpg"
import project3 from "../../assets/project03.jpg"
import project4 from "../../assets/project04.jpg"
export const Proyects = () => {
  return (
    <div className="flex flex-col px-15 pb-20 gap-7 max-lg:items-center">
        <div className="flex gap-3 items-center">
            <img className="w-[22px] h-[22px]" src={projectImg} alt="" />
            <p className="text-2xl text-gray-600 font-semibold">Selected projects</p>
        </div>
        <div className="w-full justify-between flex max-lg:gap-7 max-lg:flex-col max-lg:items-center">
            <img className="max-lg:max-w-[400px] max-sm:max-w-[300px] max-w-[220px] min-xl:max-w-[280px] aspect-video" src={project1} alt="" />
            <img className="max-lg:max-w-[400px] max-sm:max-w-[300px] max-w-[220px] min-xl:max-w-[300px] aspect-video" src={project2} alt="" />
            <img className="max-lg:max-w-[400px] max-sm:max-w-[300px] max-w-[220px] min-xl:max-w-[300px] aspect-video" src={project3} alt="" />
            <img className="max-lg:max-w-[400px] max-sm:max-w-[300px] max-w-[220px] min-xl:max-w-[300px] aspect-video" src={project4} alt="" />
        </div>
    </div>
  )
}
