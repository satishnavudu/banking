import { HeaderBox } from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedUser={UserName:"Satish"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header>
           <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedUser?.UserName || 'Guest'}
           subtext="Access ManageAccess & manage your account and transactions efficiently."
           ></HeaderBox>        
   <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1000000}></TotalBalanceBox>
    </header>
        </div>
    </section>
  )
}

export default Home