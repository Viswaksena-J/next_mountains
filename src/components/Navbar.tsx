import Image from "next/image"

export const Navbar = () => {
    return(
        <>
            <div className="pt-12 py-4 px-[60px] text-white fixed w-full top-0 z-50">
                <div className="flex justify-between items-center">
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