'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const SideBar = ({ user }: SiderbarProps) => {
    const pathName=usePathname()
    
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href="/" className='mb-12
     cursor-pointer
     items-center gap-2
    '>
        <Image src="/icons/logo.svg" width={34} height={34} className='size-[24px] max-xl:size-14' alt="Horizon Logo"/>
        <h1 className='sidebar-logo'>Horizon</h1>
    </Link>
    {sidebarLinks.map((item)=>{
        const isActive= pathName==item.route || pathName.startsWith(`${item.route}/`)
        return(
            <Link className={cn('sidebar-link',{    
                'bg-bankGradient':isActive
            })} href={item.route} key={item.label}>
                <div className="relative size-6" >
                    <Image src={item.imgURL} alt={item.label}  fill
                    className={cn({'brightness-[3] invert-0':isActive})}
                    />
                </div>
                <p className=''>
                {item.label}
                </p>
                </Link>
        )
    })}
            </nav>
        </section>
    )
}

export default SideBar