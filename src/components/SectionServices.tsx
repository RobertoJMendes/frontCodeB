import { Container } from "./Container";
import Image from "next/image";
//import PhoneIcon from '@/assets/icon-phone.svg'
import SolutionsIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'
import ImagePhone from '@/assets/phone.png'

export function SectionServices(){
    return(
            <section className="relative flex w-full h-[600px] xl:h-[965px]">
        <Container>
            <div className="flex-1 max-w-[594px] xl:pt-32 px-2">
                <span className=" text-primary-orange text-sm font-bold uppercase mb-9"
                >SERVIÇOS EXCLUSIVOS</span>
                <h2 className="text-primary-gray text-2xl xl:text-[56px] font-bold leading-tight mb-6"
                >Gerencie suas finanças sem sair de casa</h2>
                <p className="text-base xl:text-lg max-w-[554px] mb-6 xl:mb-16 text-secondy-gray"
                >Veja comom você pode cuidar das suas finanças pelo app Itáu de 
                    forma segura, rápida e o melhor, no conforto da sua casa. </p>
                <ul className="flex flex-col gap-4 xl:gap-9 ">
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                        </div>
                        <p className="flex-1 text-txt-gray pr-2 "
                        >Acompanhar sua conta, fazer transferências e pagamentos onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                        <Image src={SolutionsIcon} alt="SolutionsIcon"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2 "
                        >Soluções de empréstimos e renegociação para a organizar suas finanças</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                        <Image src={OptionsIcon} alt="OptionsIcon"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2 "
                        >Diversas opções de investimentos, de acordo com o seu perfil de investidor</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                        <Image src={CardIcon} alt="CardIcon"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2 "
                        >Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
                    </li>
                </ul>
            </div>
        </Container>
        <div className="hidden absolute xl:static top-0 right-0 pt-36 xl:flex items-center w-[40%] h-full bg-gray-400 ">
            <Image src={ImagePhone} alt="ImagePhone" className="translate-x-[-50%]"/>
        </div>
            </section>
    )
}
//<Image src={PhoneIcon} alt="PhoneIcon"/>