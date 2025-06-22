
interface service{
    img?:string,
    title:string
}

export const Service:React.FC<service> = ({img,title}) => {

  return (
    <div className="flex flex-col items-center gap-8">
        <img src={img} alt="" />
        <div className="flex flex-col items-center gap-1">
            <h3 className="text-2xl text-gray-600 font-semibold">{title}</h3>
            <p className="text-gray-500 max-lg:max-w-[450px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reprehenderit modi autem officiis dolorum.</p>
        </div>
        <button className="py-1.5 px-5 bg-[#5298cd] hover:bg-[#3e7fd3]  active:scale-105 transition duration-300 text-white rounded">Read more</button>
    </div>
  )
}
