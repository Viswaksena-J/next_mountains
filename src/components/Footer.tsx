export const Footer = () => {
    return(
        <>
            <section className="bg-[rgb(11,29,38)] px-44 pt-36 pb-15 mt-[-1px]">
                <div className="flex justify-between">
                    <div>
                        <img src="/logo.svg" alt="logo" className="w-6.6"/>
                        <p className="mt-4 max-w-[250px] mb-24 leading-[1.6] text-[14px]">Get out there & discover your next slope, mountain & destination!</p>
                        <span className="text-[rgb(255,255,255,0.5)] font-thin">Copyright 2019 MNTN, Inc. Terms & Privacy</span>
                    </div>
                    <div className="flex gap-40">
                        <div>
                            <h4 className="mb-5 text-[16px] text-[#fbd784]">More on The Blog</h4>
                            <ul>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">About MNTN</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Contributors & Writers</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Write For Us</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Contact Us</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-5 text-[16px] text-[#fbd784]">More on The Blog</h4>
                            <ul>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">The Team</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Jobs</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Write For Us</a></li>
                                <li className="mb-4"><a href="#" className="text-[14px] font-thin text-white">Press</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}