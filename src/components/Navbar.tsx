export default function Navbar() {
    return(
        <div className="text-white w-full flex justify-between my-[2vw]">
            <strong className="ml-10">EuFilpeSilva</strong>
            <div className="flex">
                <button className="text-yellow-300" >Curriculo</button> 
                <button className="mr-10 ml-3 bg-gray-700 p-2 rounded-full w-[7vw] flex gap-3 items-center">
                    <div className="ml-2"> GitHub</div> 
                    <img src="https://github.com/euFilpeSilva/Portfolio-React/blob/main/src/assets/logo_github.svg" />
                </button>
            </div>
        </div>
    )
}