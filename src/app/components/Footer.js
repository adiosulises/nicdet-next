import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='footer'>
            <div className='container mx-auto py-4'>
                <Image
                    src={"/nicdet-logo.svg"}
                    width={180}
                    height={500}
                    alt='nicdet logo'
                    className='pt-10'
                />
                <div className="grid grid-cols-3 gap-4 gap-y-8">
                <div className='pt-10'>
                        <b>Laboratorios</b>
                        <ul>
                            <li>
                                Medicina molecular
                            </li>
                            <li>
                                Biolog&iacute;a celular
                            </li>
                            <li>
                                C&eacute;lulas Madre
                                <ul className='pl-6'>
                                    <li>Banco y criopreservaci&oacute;n de c&eacute;lulas</li>
                                    <li>Laboratorio</li>
                                    <li>Quir&oacute;fano</li>
                                </ul>
                            </li>
                            <li>
                                Nanotecnolog&iacute;a y microelectr&oacute;nica
                                <ul className='pl-6'>
                                    <li>Disposici&oacute;n de pel&iacute;culas delgadas</li>
                                    <li>Caracterizaci&oacute;n de materiales</li>
                                    <li>Fabricaci&oacute;n de dispositivos</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='pt-10'>
                        <b>Laboratorios</b>
                        <ul>
                            <li>
                                Medicina molecular
                            </li>
                            <li>
                                Biolog&iacute;a celular
                            </li>
                            <li>
                                C&eacute;lulas Madre
                                <ul className='pl-6'>
                                    <li>Banco y criopreservaci&oacute;n de c&eacute;lulas</li>
                                    <li>Laboratorio</li>
                                    <li>Quir&oacute;fano</li>
                                </ul>
                            </li>
                            <li>
                                Nanotecnolog&iacute;a y microelectr&oacute;nica
                                <ul className='pl-6'>
                                    <li>Disposici&oacute;n de pel&iacute;culas delgadas</li>
                                    <li>Caracterizaci&oacute;n de materiales</li>
                                    <li>Fabricaci&oacute;n de dispositivos</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='pt-10'>
                        <b>Laboratorios</b>
                        <ul>
                            <li>
                                Medicina molecular
                            </li>
                            <li>
                                Biolog&iacute;a celular
                            </li>
                            <li>
                                C&eacute;lulas Madre
                                <ul className='pl-6'>
                                    <li>Banco y criopreservaci&oacute;n de c&eacute;lulas</li>
                                    <li>Laboratorio</li>
                                    <li>Quir&oacute;fano</li>
                                </ul>
                            </li>
                            <li>
                                Nanotecnolog&iacute;a y microelectr&oacute;nica
                                <ul className='pl-6'>
                                    <li>Disposici&oacute;n de pel&iacute;culas delgadas</li>
                                    <li>Caracterizaci&oacute;n de materiales</li>
                                    <li>Fabricaci&oacute;n de dispositivos</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        NICDET &copy; 2024
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer