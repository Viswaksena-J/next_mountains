import Image from "next/image"
import Link from "next/link"

export const Hero =() => {
    return(
        <>
            <section id="start" className="absolute top-0 z-[-1] h-[100vh] max-sm:overflow-hidden">
                <div>
                    <img
                        src="/BG Hero.png"
                        alt="hero"
                        className="w-[100%]"
                        height={895.63}
                        width={1433}
                    />
                    <img
                        src="/HG.png"
                        alt="hero"
                        className="w-[100%] absolute top-0 left-0 -z-10 max-sm:h-[400px] max-sm:w-[600px]"
                        height={1433}
                        width={830.69}
                    />
                    <img
                        src="/MG.png"
                        alt="hero"
                        className="w-[100%] absolute top-[375px] max-sm:top-[189px] max-sm:w-[600px] max-sm:h-[600px] max-md:top-[340px]"
                        height={1061.31}
                        width={1433}
                    />
                    <img
                        src="/VG.png"
                        alt="hero"
                        className="w-[100%] absolute top-[600px] left-0 max-sm:top-[345px] max-sm:w-[800px] max-sm:h-[400px] max-md:top-[621px]"
                        height={691.12}
                        width={1433}
                    />
                </div>
                <div className="mt-[-670px] max-lg:mt-[495px] max-md:mt-[-350px] max-sm:top-[565px] max-sm:w-full max-sm:absolute">
                    <span className="
                    ml-[375px] text-[14px] tracking-[4px] font-semibold text-[#fbd784] top-[-114px] left-[78px] before:content-[''] before:w-[72px] before:h-[2px] before:bg-[#fbd784] before:inline-block before:mb-[5px] before:mr-[32px]
                    max-lg:ml-[230px] max-md:ml-[160px] max-sm:ml-[70px] max-sm:shadow-2xs max-sm:before:w-0 max-sm:before:h-0
                    ">
                        A HIKING GUIDE
                    </span>
                    <h1 className="
                    text-[65px] max-w-[690px] font-[600] leading-[1.2] mt-[20px] mb-[20px] font-['Chronicle_Display'] text-white m-auto
                    max-lg:max-w-[565px] max-md:max-w-[455px] max-md:text-[50px] max-sm:w-[195px] max-sm:shadow-sm max-sm:text-[35px]
                    ">Be Prepared For The Mountains And Beyond</h1>
                    <div className="flex absolute ml-[375px] z-10 transition-all delay-0.5s max-lg:ml-[230px] max-md:ml-[160px] max-sm:ml-[135px]">
                        <Link href="#first"  className="text-sm font-semibold text-white">
                            scroll down
                        </Link>
                        <Image 
                            src="/arrow1.svg"
                            alt="arrow_down"
                            width={20}
                            height={16}
                            className="h-5 text-white rotate-90 animate-upDown"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}