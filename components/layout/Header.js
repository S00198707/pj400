'use client';
import Link from 'next/link';
import{signOut, useSession} from "next-auth/react"
export default function Header(){
    const session = useSession();
    const status = session?.status;
    const userData = session.data?.user;
    let userName = userData?.name  || userData?.email;
    if(userName && userName.includes(' ')) {
        userName = userName.split(' ')[0];
    }
    return(
        <header className="flex items-center justify-between">
        
        <nav className="flex items-center gap-6 text-gray-600 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
        Farm2Table Connect   
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Produce</Link>
        <Link href={''}>About Us</Link>
        <Link href={''}>Contact Us</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-600 font-semibold">
        {status === 'authenticated' && (
            <>
            <Link href={'/profile'} className="whitespace-nowrap">
            Hello, {userName}
            </Link>
                    <button
                    onClick={() => signOut()}
                     className="bg-primary 
                    text-white rounded-full px-8 py-2"> 
                    Logout
                    </button>
                    </>
        )}
            {status === 'unauthenticated' &&(
                <>
             <Link href={'/login'}>Login</Link>
            <Link href={'/register'} className="bg-primary 
            text-white rounded-full px-8 py-2">
            Register
         </Link>

                </>
        )}
        </nav>
          </header>


);
}