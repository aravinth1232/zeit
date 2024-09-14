import React from 'react'
import Link from 'next/link'


const links =[
    {name:"About",address:"about"},
    {name:"Services",address:"services"},
    {name:"Contact",address:"contact"},
    ]



const Header = () => {
  return (
    
<>
    <header className='py-5 flex justify-around items-center shadow-lg'>
        <div>Zeit</div>
        <nav className='flex gap-3' >
            {
            links.map((link,i)=>(
            <Link 
            className='hover:underline'
            key={i} href={`/${link.address}`} >{link.name}</Link>
            ))}

        </nav>
        
        
    </header>
</>
  )
}

export default Header
