import React from 'react'
import ProtectedPage from '@/component/ProtectedPage'

const Page = () => {
  return (
    <div className='flex justify-center items-center h-96'>
        <ProtectedPage />
    </div>
  )
}

export default Page