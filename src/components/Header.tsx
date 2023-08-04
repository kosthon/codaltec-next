import Link from "next/link";

function Header() {
    return (
        <header>
            <section className='absolute top-0 left-0 bg-[rgba(0,0,0,0.8)] z-2 h-auto w-full'>
                <div className='container mx-auto flex justify-between w-full z-2'>
                    <nav className='flex self-center'>
                        <ul className='flex'>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link href="" className="w-8 h-auto">
                                    <img src="/assets/Logos/Codaltec_Icono.svg" alt="Logo COLDATEC Corporación de Alta Tecnología" />
                                </Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Inicio</Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Nosotros</Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Portafolo</Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Noticias</Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Centro de Investigación</Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Transparencia</Link>
                            </li>
                            <li className='flex items-center relative py-1 px-2'>
                                <Link className="text-xs" href="">Atención al Cliente</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center py-2">
                        {/* icon */}
                        <input type="text" className="text-black text-sm py-1 px-2 mx-1 w-52 rounded-lg outline-none border-0" />
                        <div>
                            <button>

                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}


export default Header;