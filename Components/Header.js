import Link from 'next/link'
const Header = () => {
    return (
        <header className='font-thin gap-2 sm:grid grid-cols-4  bg-gradient-to-r from-gray-100  border-b-2  justify-center    md:grid-cols-5  gap-2 text-md lg:text-2xl m-6'>
        <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/Shop'  className='max-w-max'><a > SHOP </a></Link> </div>
        <div className='p-2 text-center m-6 fancy-link w-max tracking-widest'><Link href='/Shop'><a > SHOP </a></Link> </div>
 
    
    </header>
    )
}

export default Header
