'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {

    // nav mobile


    // cambiar bg del nav en scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeColor)

            return () => {
                window.removeEventListener('scroll', changeColor)
            }
        }
    }, [])

    return (
        <header className={color ? 'navbar navbar-active' : 'navbar'}>
            <div className={color ? "nav-bg nav-bg-active absolute mx-auto left-0 right-0 flex justify-between items-center" : "nav-bg absolute mx-auto left-0 right-0 flex justify-between items-center"}>
                <div className='container mx-auto flex justify-between items-center'>
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
            </div>
        </header>
    )
}

export default Nav