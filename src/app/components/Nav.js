import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <header className="sticky top-6 z-50 font-bold">
            <div className="absolute container mx-auto left-0 right-0 flex justify-between items-center">
                <div>
                    <Image
                        src={"/nicdet-logo.svg"}
                        width={180}
                        height={500}
                        alt='nicdet logo'
                    />
                </div>
                <div>
                    <nav>
                        <ul className='flex flex-row gap-12 items-center'>
                            <li>
                                <Link href=''>Inicio</Link>
                            </li>
                            <li>
                                <Link href=''>Nosotros</Link>
                            </li>
                            <li>
                                <Link href=''>Servicios</Link>
                            </li>
                            <li>
                                <Link href=''>Educaci&oacute;n</Link>
                            </li>
                            <li>
                                <Link href=''>Fundaci&oacute;n</Link>
                            </li>
                            <li className='btn-blue'>
                                <Link href=''>Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav