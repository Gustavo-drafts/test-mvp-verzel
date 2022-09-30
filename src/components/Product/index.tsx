import Image from 'next/image'
import car from '../../../public/assets/car1.png'

export default function Product(props) {
  return (
    <>
      <div className="bg-gray100 box w-80 h-72 rounded-xl shadow-md shadow-black-500/50 m-8">
        <Image src={car} className="rounded-t-xl" />
        <div className='px-2' >
          <strong className='font-sans text-lg'>Mitsubishi Eclipse Cross HPE-S</strong>
          <p className='py-2 font-semibold text-gray500 font-sans text-base'>2021 • 24.377 km • Rio de Janeiro</p>
          <p className='font-semibold text-blue500 text-xl'>R$ 150.499</p>
        </div>
      </div>
    </>
  )
}