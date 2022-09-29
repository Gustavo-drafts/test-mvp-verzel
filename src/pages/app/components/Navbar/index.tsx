import Image from "next/image";
import Logo from '../../../../assets/logo.png';

export function Navbar() {
  return (
    <div className="p-8 bg-white flex container-xl h-20 justify-between items-center">
      <div className='flex-none w-28 h-7'>
        <Image src={Logo} />
      </div>
      <div className="flex gap-10 text-gray700 font-semibold font-sans text-lg justify-between">
        <button className="shadow-md shadow-black-500/50 flex-1 rounded hover:text-white hover:bg-blue500 hover:duration-700 w-36 h-10">Cadastrar</button>
        <button className="shadow-md shadow-black-500/50 flex-1 rounded hover:text-white hover:bg-blue500 hover:duration-700 w-36 h-10">Editar</button>
        <button className="shadow-md shadow-black-500/50 flex-1 rounded hover:text-white hover:bg-blue500 hover:duration-700 w-36 h-10">Deletar</button>
      </div>
    </div>
  )
}