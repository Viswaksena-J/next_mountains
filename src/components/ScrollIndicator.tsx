'use client'

import { useEffect, useState, useMemo } from "react";

const ScrollIndicator = () => {
    const [activeSection, setActiveSection] = useState('start');
    
    const sections = useMemo(() => [
        { id: "start", label: "Start" },
        { id: "first", label: "01" },
        { id: "second", label: "02" },
        { id: "third", label: "03" },
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            let current = "start";

            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    return (
        <div className="fixed z-10 top-[250px] right-16 flex items-center">
            <div className="flex flex-col items-end mr-3">
                {sections.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`mb-6 text-lg font-semibold transition-all duration-300 ${
                            activeSection === id ? "text-white" : "text-gray-400"
                        }`}
                    >
                        {label}
                    </a>
                ))}
            </div>
            
            <div className="h-48 w-px bg-white opacity-50 relative">
                {sections.map(({ id }, index) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`
                            absolute w-1 h-12 rounded-sm transition-all duration-300
                            ${activeSection === id ? "bg-white" : "bg-transparent"}
                        `}
                        style={{ top: `${index * 48}px` }}
                    ></a>
                ))}
            </div>
        </div>
    );
};

export default ScrollIndicator;


// 'use client'

// import { useEffect, useState } from "react";

// const ScrollIndicator = () => {
//     const [activeSection, setActiveSection] = useState('start')

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ["start","first","second","third"]
//             let current = "start"

//             sections.forEach((id) => {
//                 const section = document.getElementById(id)
//                 if (section) {
//                     const rect = section.getBoundingClientRect()
//                     if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//                         current = id
//                     }
//                 }
//             });
//             setActiveSection(current);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         };
//     }, []);

//     return(
//         <>
//             <div className="h-[38px] w-[3px] fixed z-10 top-[250px] right-[62px]">
//             {["start","first","second","third"].map((id,index)=> (
//                 <a
//                 key={id}
//                 href={`#${id}`}
//                 className={`
//                     relative mt-[-5.9px] inline-block w-[100%] h-[100%] transition-all delay-0.5s ${activeSection === id ? "bg-white opacity-100" : "opacity-50 bg-white"}
//                     `}
//                 ></a>
//             ))}
//             </div>
//         </>
//     )
// }

// export default ScrollIndicator;
