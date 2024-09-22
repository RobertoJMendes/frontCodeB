import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

export function Search(){
    return(
        <div className='hidden sm:flex items-center gap-2 xl:gap-4' >
        <Image 
        src={IconSearch}
        alt='Search'
        />
        <input type='text' placeholder='Buscar' 
        className='bg-transparent outline-none font-bold text-white placeholder:text-primary-blue'/>
        </div>
    )


}
// teste git