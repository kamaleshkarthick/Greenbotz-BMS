import { useContext } from "react";
import{MenuData} from "../App"


export default function Sidebar() {
  const {menuItems} = useContext(MenuData)

   
  return (
    <aside className="bg-[#fbfbfb] w-[15%] flex-shrink-0 hidden xl:block ">
      <div className="  p-8">

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <img
          className=" h-32  w-full object-cover rounded-t-lg"
          src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          alt=""
          />

        <div className="p-5">
          <h5 className="mb-3 text-xl font-bold tracking-tight text-black">
            Cebu Towers
          </h5>

          <li className="mb-1 font-normal text-gray-700 list-none">
            200 George Street
          </li>
          <li className="font-normal text-gray-700 list-none">
            Sydney NSW 2000
          </li>
          </div>
        </div>
      </div>

      <nav className="mt-3 flex-col [&>*]:mb-2  ">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center py-3  pl-8 text-lg font-medium text-[#515151] group hover:bg-[#dedcffe6] hover:text-black focus:bg-[#cdcaffe6]   focus:text-black  focus:border-l-4 border-indigo-500 `}
          >
            <item.icon className="h-8 w-8 mr-4 stroke-[#515151] group-hover:stroke-[#8f8ffe] focus:stroke-[#5858fa]" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
