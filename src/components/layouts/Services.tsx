import { Service } from "./Service"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
export const Services = () => {
  return (
    <div className="flex max-lg:flex-col text-center gap-8 max-lg:gap-20 max-lg:p-10 p-20">
        <Service img={img1} title="Engaging interfaces"></Service>
        <Service img={img2} title="Usable desingn"></Service>
        <Service img={img3} title="Solid development"></Service>
    </div>
  )
}
