import { SignIn } from '@clerk/clerk-react'
import { SWRConfig } from 'swr';

import React from 'react'
export { SWRConfig } from 'swr';


const page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
        <SignIn />
    </div>
  )
}

export default page