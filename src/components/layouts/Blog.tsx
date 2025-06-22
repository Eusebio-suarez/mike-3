import wifi from "../../assets/shape03.png"
import twitter from "../../assets/shape04.png"
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"

export const Blog = () => {
  return (
    <div className="flex px-15 max-lg:justify-center min-lg:justify-between max-lg:gap-10 max-lg:flex-col">
        <div className="flex flex-col max-lg:items-center max-lg:text-center gap-5 ">
            <div className="flex gap-3 items-center">
                <img className="w-[20px] h-[20px]" src={wifi} alt="" />
                <p className="text-2xl text-gray-600 font-semibold">From our blog</p>
            </div>
            <div className="flex flex-col max-lg:items-center gap-11">
                <div className="flex max-lg:flex-col max-lg:items-center gap-11">
                    <img className="max-lg:max-w-[400px] max-sm:max-w-[300px] max-w-[200px] min-xl:max-w-[280px] aspect-video" src={blog1} alt="" />
                    <div>
                        <h4 className="text-gray-500 text-lg font-semibold">Our work process reviewed</h4>
                        <p className="min-lg:max-w-[300px] text-gray-500">
                            Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus mauris.
                            <span className="text-blue-400 font-semibold">Read more...</span><br></br>
                            <span className="text-gray-400">01/01/13 - 10:21 AM</span>
                        </p>
                    </div>
                </div>
                <div className="flex max-lg:flex-col max-lg:items-center gap-11">
                    <img className="max-lg:max-w-[400px] max-sm:max-w-[300px] max-w-[200px] min-xl:max-w-[280px] aspect-video" src={blog2} alt="" />
                    <div>
                        <h4 className="text-gray-500 text-lg font-semibold">Who we are at Appcompany</h4>
                        <p className="min-lg:max-w-[300px] text-gray-500">
                            Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus mauris.
                            <span className="text-blue-400 font-semibold">Read more...</span><br></br>
                            <span className="text-gray-400">01/01/13 - 10:21 AM</span>
                        </p>
                    </div>
                </div>
            </div>
            <a className="text-blue-400 font-semibold underline" href="#">Order entries</a>
        </div>
        <div className="flex flex-col max-lg:items-center gap-5 max-lg:text-center">
            <div className="flex gap-3 items-center">
                <img className="w-[26px] h-[21px]" src={twitter} alt="" />
                <p className="text-2xl text-gray-600 font-semibold">Our Twitter feed</p>
            </div>
            <div>
                <p className="min-lg:max-w-[400px] text-gray-500">
                    <span className="text-gray-500 font-semibold">@Aptastico: </span>In pellentesque.com faucibus vestibulum. Nulla at nulla justo, eget Dulis aliquet egestas <span className="text-blue-400">#purus</span> in <span className="text-blue-400">#blandit</span>. <br/>
                    <span className="text-gray-400">01/01/13 - 10:21 AM</span>
                </p>
            </div>
             <div>
                <p className="min-lg:max-w-[400px] text-gray-500">
                    <span className="text-gray-500 font-semibold">@Aptastico: </span>In pellentesque.com faucibus vestibulum. Nulla at nulla justo, eget Dulis aliquet egestas <span className="text-blue-400">#purus</span> in <span className="text-blue-400">#blandit</span>. <br/>
                    <span className="text-gray-400">01/01/13 - 10:21 AM</span>
                </p>
            </div>
             <div>
                <p className="min-lg:max-w-[400px] text-gray-500">
                    <span className="text-gray-500 font-semibold">@Aptastico: </span>In pellentesque.com faucibus vestibulum. Nulla at nulla justo, eget Dulis aliquet egestas <span className="text-blue-400">#purus</span> in <span className="text-blue-400">#blandit</span>. <br/>
                    <span className="text-gray-400">01/01/13 - 10:21 AM</span>
                </p>
            </div>
            <a className="text-blue-400 font-semibold underline" href="#">Follow us on twitter</a>
        </div>
    </div>
  )
}
