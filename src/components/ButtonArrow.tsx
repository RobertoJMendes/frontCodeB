import Arrow from '@/assets/arrow-down.svg'
import Image from 'next/image'
import IconUser from '@/assets/icon-user.svg'

type Props = {
    name: string
}

export function ButtonArrow({name}:Props){
    return(
        <button className='flex items-center gap-3'>
          <span className='text-white font-bold'>{name}</span>
          <Image
          src={Arrow}
          alt="Arrow"
          />
        </button>
    )
}