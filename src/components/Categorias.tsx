import { Code, Desktop, DeviceMobile } from "phosphor-react";


export default function Categorias() {
    return(
        <div className="mt-20 ">
            <ul className="text-white flex items-center justify-center gap-10">
                <li className="w-[15vw] h-[15vw] bg-gray-700 rounded-xl flex flex-col justify-center items-center transform motion-safe:hover:scale-110 ... transition-all shadow-md">
                    <Desktop size={50} color="#FFFF00" weight="light" />
                    <strong>Vazio</strong>
                </li>
                <li className="w-[15vw] h-[15vw] bg-gray-700 rounded-xl flex flex-col justify-center items-center transform motion-safe:hover:scale-110 ... transition-all shadow-md">
                    <Code size={50} color="#FFFF00" weight="fill" />
                    <strong>Vazio</strong>
                </li>
                <li className="w-[15vw] h-[15vw] bg-gray-700 rounded-xl flex flex-col justify-center items-center transform motion-safe:hover:scale-110 ... transition-all shadow-md">
                    <DeviceMobile size={50} color="#FFFF00" weight="thin" />
                    <strong>Vazio</strong>
                </li>
               
            </ul>
        </div>
    )
}