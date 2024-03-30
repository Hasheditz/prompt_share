'use-client'

import Link from 'next/link';
import Image from 'next/image';
import { UseState , UseEffect } from 'react';
import {signIn , signOut , useSession , getProviders} from 'next-auth/react';

const Nav = () => {

  const IsUser = true;

  return(

  <nav className="flex-between w-full mb-16 pt-3">

    <Link href = '/' className="flex gap-2 flex-center">
        <Image
        src='/assets/images/logo.svg'
        alt='My logo'
        width={30}
        height={30}
        className='object-contain'
        />

        <p className='logo_text'> Prompt-Share </p>


    </Link> 

    {/* Desktop navigation */}

    <div className='sm:flex hidden'>
      {IsUser ? (
      <div className='flex gap-3 md:gap-5'>
        <Link href = "/create-prompt" className = 'black_btn'>
          create prompt
        </Link>
        
        {/* <button type='button' onClick={signOut} className='outline_btn'>
        Sign Out 
        </button> */}
        
        <Link href='/profile'>
          <Image
          src='/assets/images/logo.svg'
          alt='Profile'
          className='rounded-full'
          width={37}
          height={37}
          />
        </Link>
      </div> 
      ) : (
        <>  </>
      )}
    </div>
  </nav>
  )
}

export default Nav