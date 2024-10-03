import Main from '@/components/Main'
import Dashboard from '@/components/Dashboard'
import React from 'react'
import Login from '@/components/Login'
import { useAuth } from '@/context/AuthContext'
import Loading from '@/components/Loading'


export const metadata = {
    title: 'EmoJournal ⋅ Dashboard',
}

const DashboardPage = () => {


    
  return (
    <Main>
       <Dashboard/>
    </Main>
  )
}

export default DashboardPage