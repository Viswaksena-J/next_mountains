import Image from "next/image"

export const Navbar = () => {
    return(
        <>
            <div className="pt-12 py-4 px-14 text-white fixed max-lg:absolute w-full top-0 z-50 max-sm:px-5 max-sm:pt-5">
                <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-7">
                    <div>
                        <Image
                            src='Logo.svg'
                            alt="logo"
                            width={80}
                            height={17.77}
                        />
                    </div>
                    <div>
                        <ul className="flex gap-6 font-bold text-sm text-white">
                            <li>Equipment</li>
                            <li>About us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src='cart.svg'
                            alt="account"
                            width={24}
                            height={24}
                        />
                        <p className="text-xs font-bold">Account</p>
                    </div>
                </div>
            </div>
        </>
    )
}