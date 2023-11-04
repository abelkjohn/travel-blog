import { FaGlobe } from 'react-icons/fa'

export default function Nav(){
    return (
        <div className='nav gap-2 text-xl items-center justify-center p-4  fixed w-full top-0 left-0'>
            <p><FaGlobe /></p>
            <h1>my travel journal.</h1>
        </div>
    )
}