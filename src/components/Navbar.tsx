export default function Navbar() {
    return(
        <div className="text-white w-full flex justify-between my-[3vw] pl-20 pr-20">
            <strong className="ml-10 flex text-2xl"> <div className="text-yellow-300">Eu</div>FilpeSilva</strong>
            <div className="flex mr-3">
                <button className="text-yellow-300 text-lg ml-2 mr-4" >Curriculo</button> 
                <button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-[8vw] flex overflow-hidden">
                    <div className="ml-2"> GitHub</div> 
                    <div className=" w-10 ml-2">
                        <img src="https://raw.githubusercontent.com/euFilpeSilva/Portfolio-React/b448163e51261b964d7f61e05988158110166dee/src/assets/logo_github.svg" />
                    </div>
                </button>
            </div>
        </div>
    )
}