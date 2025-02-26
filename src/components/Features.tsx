export const Features = () => {
    return(
        <>
            <section style={{background: "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 14.38%);"}} id="first" className="mt-[900px] pb-[85px]">
                <div className="flex justify-center items-center gap-20 pr-[100px] pl-[210px] relative">
                    <div className="max-w-[500px]">
                        <div className="absolute top-[-15px] left-[185px]">
                            <h1 className="text-[160px] text-white opacity-10">01</h1>
                            <span className="text-[14px] tracking-[4px] font-semibold text-[#fbd784] relative top-[-114px] left-[78px] before:content-[''] before:mb-[5px] before:mr-[32px] before:inline-block before:w-[72px] before:h-[2px] before:bg-[#fbd784]">GET STARTED</span>
                        </div>
                        <div>
                            <h2 className="max-w-[450px] text-[50px] font-medium leading-[1.2] font-['Chronicle_Display']">What level of hiker are you?</h2>
                            <p className="mt-[35px] mb-[32px] text-[15px]">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                        </div>
                        <div className="text-[#fbd784] flex items-center text-[14px]">
                            <a className="font-bold">read more</a>
                            <img 
                            src="https://prem24022000.github.io/Assessment-4-surveysparrow/dist/imgs/arrow.svg" 
                            alt="arrow" 
                            className="ml-[16px] animate-leftRight"
                        />
                        </div>
                    </div>
                    <div>
                        <img src="/01.png" alt="" className="w-[425px] h-[540px]"/>
                    </div>
                </div>
            </section>
            <section className="bg-[rgb(11,29,38)] pt-13 pb-0 mt-[-1px]" id="second">
                <div className="flex justify-center items-center gap-20 pr-[100px] pl-[210px] relative">
                    <div className="max-w-[500px]">
                        <img src="/02.png" alt="02" className="w-[425px] h-[540px]" />
                    </div>
                    <div className="max-w-[500px]">
                        <div className="absolute top-[10px] right-[435px]">
                            <h1 className="text-[160px] text-white opacity-10 absolute top-[-15px] left-[0px]">02</h1>
                            <span className="text-[14px] tracking-[4px] top-20 font-semibold text-[#fbd784] relative left-[78px] before:content-[''] before:mb-[5px] before:mr-[32px] before:inline-block before:w-[72px] before:h-[2px] before:bg-[#fbd784]">Hiking Essentials</span>
                        </div>
                        <div>
                            <h2 className="max-w-[450px] text-[50px] font-medium leading-[1.2] font-['Chronicle_Display']">
                                Picking the right Hiking Gear!
                            </h2>
                            <p className="mt-[35px] mb-[32px] text-[14px] pr-[30px]">
                                The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have.
                                Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.
                            </p>
                        </div>
                        <div className="text-[#fbd784] flex items-center text-[14px]">
                            <a className="font-bold">read more</a>
                            <img 
                                src="https://prem24022000.github.io/Assessment-4-surveysparrow/dist/imgs/arrow.svg" 
                                alt="arrow" 
                                className="ml-[16px] animate-leftRight"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="third" className="pt-[165px] pb-[0] bg-[rgb(11,29,38)] mt-[-1px]">
                <div className="flex justify-center items-center gap-20 pr-[100px] pl-[210px] relative">
                    <div className="max-w-[500px]">
                        <div className="absolute top-[-15px] left-[185px]">
                            <h1 className="text-[160px] text-white opacity-10">03</h1>
                            <span className="text-[14px] tracking-[4px] font-semibold text-[#fbd784] relative top-[-114px] left-[78px] before:content-[''] before:mb-[5px] before:mr-[32px] before:inline-block before:w-[72px] before:h-[2px] before:bg-[#fbd784]">GET STARTED</span>
                        </div>
                        <div>
                            <h2 className="max-w-[450px] text-[50px] font-medium leading-[1.2] font-['Chronicle_Display']">Understand Your Map & Timing</h2>
                            <p className="mt-[35px] mb-[32px] text-[15px]">To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction.</p>
                        </div>
                        <div className="text-[#fbd784] flex items-center text-[14px]">
                            <a className="font-bold">read more</a>
                            <img 
                            src="https://prem24022000.github.io/Assessment-4-surveysparrow/dist/imgs/arrow.svg" 
                            alt="arrow" 
                            className="ml-[16px] animate-leftRight"
                        />
                        </div>
                    </div>
                    <div>
                        <img src="/03.png" alt="" className="w-[425px] h-[540px]"/>
                    </div>
                </div>
            </section>
        </>
    )
}