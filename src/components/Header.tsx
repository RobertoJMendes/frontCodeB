import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { ButtonArrow } from './ButtonArrow'
import { Search } from './Search'
import { ButtonAcesar } from './ButtonAcesar'
import { Container } from './Container'

export function Header(){
    return(
<header className='flex items-center w-full h-20 pl-2 bg-primary-orange'>
        <div className='flex flex-1 items-center justify-between'>
            <Container>
            <div className='flex items-center gap-2 xl:gap-14'>
                <Image src={Logo} alt="Logo" />
                <ul className='flex items-center w-full 6xx:justify-between gap-2 600:gap-6 xl:gap-14'>
                    <li>
                        <ButtonArrow name='Para Você' />
                    </li>
                    <li>
                        <ButtonArrow name='Para Empresas' />
                    </li>
                    <li className='hidden 6xx:flex'>
                        <ButtonArrow name='Para Serviços' />
                    </li>
                    <li className='hidden xl:flex'>
                        <ButtonArrow name='Ajuda' />
                    </li>
                </ul>
            </div>
            <Search />
            </Container>
        </div>       
        <ButtonAcesar name='Acessar Conta'  />
</header>
    )
}
    //<div className='flex justify-between w-full max-w-[1246px] px-4 mx-auto'>
    //</div>