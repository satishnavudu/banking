
import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const BankCard = ({account,userName,showBalance}:CreditCardProps) => {
 

  return (
    <div className="flex flex-col">
        <Link href="/" className='bank-card'>
            <div className="bank-card_content">
                <div>
                    <h1 className="text-16 font-semibold text-white">
                        {account.name || userName}
                    </h1>
                    <p className="font-item-flex-serif fomt-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                   
                </div>
                <article className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <h1 className="text-12 font-semibold text-white">
                            {userName}
                        </h1>
                        <h2 className="text-12 font-semibold text-white">
                        ●●/●●
                        </h2>
                        </div>
                        <p className='text-14 font-semibold text-white tracking-[1.1px] '>
                            ●●●● ●●●● ●●●●
                             {/* <span className='text-16'>${account.mask}</span> */}
                             <span className='text-16'>1234</span>
                        </p>
                    
                        
                        
                        </article>
            </div>
            <div className="bank-card_icon">
                <Image src='/icons/Paypass.svg' width={20} height={20} alt='pass'></Image>
                <Image src='/icons/masterCard.svg' width={45} height={32} alt='mastercard' className='ml-5'></Image>
                <Image src='/icons/lines.svg' width={316} height={190} alt='lines' className='absolute top-0 left-0'></Image>
            </div>
        </Link>
    </div>
  )
}
