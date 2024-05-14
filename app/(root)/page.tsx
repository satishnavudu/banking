import { HeaderBox } from '@/components/HeaderBox'
import { RightSideBar } from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedUser={firstName:"Satish",lastName:'N',email:'satish@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className="home-header">
           <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedUser?.UserName || 'Guest'}
           subtext="Access ManageAccess & manage your account and transactions efficiently."
           ></HeaderBox>        
   <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1000000}></TotalBalanceBox>
    </header>
    Recent Transactions
        </div>
        <RightSideBar user={loggedUser}
        transactions={[]}
        banks={[]}>
           
        </RightSideBar>
    </section>
  )
}

export default Home