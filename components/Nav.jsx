"use-client";

import Link from 'next/link';
import Image from 'next/image';
import { UseState , UseEffect } from 'react';
import {signIn , signOut, useSession , getProviders} from 'next-auth/react';

const Nav = () => {

  <nav className="flex-between w-full mb-16 pt-3">
    <link href = '/' className='flex gap-2 flex-center'>
        <Image
        src='assets\images\logo.svg'
        alt='My logo'
        width={30}
        height={30}
        className='object-contain'
        />    
    </link>
  </nav>
}

export default Nav