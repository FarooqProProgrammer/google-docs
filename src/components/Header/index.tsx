import Image from "next/image";
import Link from "next/link";

export  default function Header() {
    return (
        <section className={'w-full container mx-auto flex py-3 justify-between items-center'}>
            <img src={'/images/google-docs.png'} className={''}  alt={'Google'}/>
            <ul className={'flex items-center gap-4'}>
                <li>
                    <Link href={"#!"} className={'text-gray-500 transition-all duration-500 ease-in-out hover:text-gray-800 relative after:absolute after:content-[""] after:w-0 after:transition-all after:duration-500 after:ease-in-out  hover:after:w-full after:h-[2px] after:bg-[#2196f3] after:bottom-0 after:left-0   text-sm'}>Home</Link>
                </li>
                <li>
                    <Link href={"#!"} className={'text-gray-500 transition-all duration-500 ease-in-out hover:text-gray-800 relative after:absolute after:content-[""] after:w-0 after:transition-all after:duration-500 after:ease-in-out  hover:after:w-full after:h-[2px] after:bg-[#2196f3] after:bottom-0 after:left-0   text-sm'}>Products</Link>
                </li>
                <li>
                    <Link href={"#!"} className={'text-gray-500 transition-all duration-500 ease-in-out hover:text-gray-800 relative after:absolute after:content-[""] after:w-0 after:transition-all after:duration-500 after:ease-in-out  hover:after:w-full after:h-[2px] after:bg-[#2196f3] after:bottom-0 after:left-0   text-sm'}>Industries</Link>
                </li>
                <li>
                    <Link href={"#!"} className={'text-gray-500 transition-all duration-500 ease-in-out hover:text-gray-800 relative after:absolute after:content-[""] after:w-0 after:transition-all after:duration-500 after:ease-in-out  hover:after:w-full after:h-[2px] after:bg-[#2196f3] after:bottom-0 after:left-0   text-sm'}>Industries</Link>
                </li>
                <li>
                    <Link href={"#!"} className={'text-gray-500 transition-all duration-500 ease-in-out hover:text-gray-800 relative after:absolute after:content-[""] after:w-0 after:transition-all after:duration-500 after:ease-in-out  hover:after:w-full after:h-[2px] after:bg-[#2196f3] after:bottom-0 after:left-0   text-sm'}>Resources</Link>
                </li>

            </ul>
        </section>
    )
}