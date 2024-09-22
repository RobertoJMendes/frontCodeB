import { Container } from "./Container";
import ImgAppleStore from '@/assets/btn-apple-store.svg'
import ImgGooglePlay from '@/assets/btn-google-play.svg'
import ArrowExplore from '@/assets/arrow-explorer.svg'
import Woman from '@/assets/woman.png'
import Image from "next/image";

export function SectionHero(){
    return(
    <section className="w-full xl:h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
        <Container>
            <div className="flex flex-1 flex-col xl:max-w-[500px] relative xl:static px-2 mb-10 xl:h-[745px]">

                    <h1 className="text-3xl xl:text-7xl text-white font-bold mb4 w-[400px] xl:static absolute 8xx:w-[300px]"
                    >Tenha seu banco na palma da mão.</h1>
                    
                    <p className="text-white text-xl max-w-[408px] mb-8
                    pt-20 xl:pt-6"
                    >Todas as operações que vocês precisa em um só lugar. 
                        Simples, completo e feito pra voçê.</p>
                
                <div className="flex gap-4 absolute xl:static xl:mb-4
                pt-[370px] 6xx:pt-[440px] w-[250px] ml-24 8xx:flex-col 8xx:ml-2 8xx:pt-[430px] xl:pt-0">
                    <button>
                        <Image
                        src={ImgAppleStore}
                        alt="AppleStore"
                        />
                    </button>
                    <button>
                        <Image
                        src={ImgGooglePlay}
                        alt="GooglePlay"
                        />
                    </button>
            </div>
                    <button className="hidden xl:flex items-center gap-1 xl:gap-3">
                        <Image src={ArrowExplore} alt="ArrowExplore" />
                        <span className="text-white text-xs xl:text-sm font-bold">Continue Explorando</span>
                    </button>
            </div>
            <Image src={Woman} alt="Woman"
            className="bg-transparent z-10 mb-26 6xx:mb-20 pr-24 6xx:pr-0" />
        </Container>
    </section>
    )
}