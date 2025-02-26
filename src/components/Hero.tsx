import Image from "next/image"
import Link from "next/link"

export const Hero =() => {
    return(
        <>
            <section id="start" className="absolute top-0 z-[-1] h-[100vh]">
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
                        className="w-[100%] absolute top-0 left-0 -z-10"
                        height={1433}
                        width={830.69}
                    />
                    <img
                        src="/MG.png"
                        alt="hero"
                        className="w-[100%] absolute top-[375px]"
                        height={1061.31}
                        width={1433}
                    />
                    <img
                        src="/VG.png"
                        alt="hero"
                        className="w-[100%] absolute top-[600px] left-0"
                        height={691.12}
                        width={1433}
                    />
                </div>
                <div className="mt-[-670px]">
                    <span className="ml-[375px] text-[14px] tracking-[4px] font-semibold text-[#fbd784] top-[-114px] left-[78px] before:content-[''] before:w-[72px] before:h-[2px] before:bg-[#fbd784] before:inline-block before:mb-[5px] before:mr-[32px]">
                        A HIKING GUIDE
                    </span>
                    <h1 className="text-[65px] max-w-[690px] font-[600] leading-[1.2] mt-[20px] mb-[20px] font-['Chronicle_Display'] text-white m-auto">Be Prepared For The Mountains And Beyond</h1>
                    <div className="flex absolute ml-[375px] z-10 transition-all delay-0.5s">
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