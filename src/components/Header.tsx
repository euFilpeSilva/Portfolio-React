


export default function Header() {
    let titulo = 'Meus projetos';
   
        const array = titulo.split('')
        array.forEach((letra, i) => {
            setTimeout(() => {
                titulo += letra
            }, 75 * i)
        })

    return(
        <div className="text-center flex flex-col mt-[10vw]">
            <strong className="text-6xl text-white"> {titulo}
            </strong>
            <div className="mt-5 mb-3 text-yellow-300">
                <strong className="text-xs">Alguns projetos desenvolvidos por mim</strong>
            </div>
        </div>
    )
}