import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import { SWRConfig } from 'swr';
export { SWRConfig,  } from 'swr';

const page = () => {
  return (
    <div className= "flex-center  glassmorphism-auth h-screen w-full">
        <SignUp />
    </div>
  )
}

export default page