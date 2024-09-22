import Image from 'next/image'
import IconUser from '@/assets/icon-user.svg'

type Props = {
    name: string
}

export function ButtonAcesar({name}:Props){
    return(
    <button 
    className='flex flex-col-reverse items-center gap-4 bg-primary-blue h-20
    xl:pr-[40px] xl:pl-10' >
      
      <span className='text-white
       font-bold text-xs pb-2 px-2'>{name}</span>
      <Image
      src={IconUser}
      alt="IconUser"
      className=''
      />
    </button>
    )
}