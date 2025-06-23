import facebook from "../../assets/Facebook.png"
import twitter from "../../assets/Twitter.png"
import linkedin from "../../assets/Linkedin.png"
import dribbble from "../../assets/Dribbble.png"
export const Footer = () => {
  return (
    <div className="w-full absolute text-gray-500 max-sm:py-10 px-15 pt-20 pb-10 flex flex-col gap-4">
        <hr/>
        <div className="w-full flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-between">
            <p>© Cristoffer jersen 2013 </p>
            <div className="flex gap-2">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={dribbble} alt="" />
            </div>
        </div>
    </div>
  )
}
