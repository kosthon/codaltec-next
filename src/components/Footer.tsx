import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <footer>
            <section className="bg-amber-400 py-5">
                <div className="container mx-auto flex justify-around items-center">
                    <div className="flex flex-col justify-center h-fit py-2 px-5">
                        <span className="w-full mx-1">
                            <h5>CONTACTO</h5>
                            <p className="text-xs">Movil: +57 300 639 8324</p>
                        </span>
                        <span className="w-full mx-1">
                            <h5></h5>
                            <p className="text-xs"></p>
                        </span>
                    </div>
                    <div className="flex flex-col justify-center h-fit py-2 px-5">
                        <span className="w-full mx-1">
                            <h5></h5>
                            <p></p>
                        </span>
                    </div>
                    <div className="flex flex-col justify-center h-fit py-2 px-5">
                        <span className="w-full mx-1">
                            <h5></h5>
                            <p className="text-xs"></p>
                            <br />
                            <p className="text-xs"></p>
                        </span>
                    </div>
                    <div className="flex flex-col justify-center h-fit py-2 px-5">
                        <h5 className="text-xs font-semibold">FOLLOW US</h5>
                        <ul className="flex">
                            <li className="mx-3">
                                <Link
                                    className="text-2xl"
                                    href="https://twitter.com/codaltec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li className="mx-3">
                                <Link
                                    className="text-2xl"
                                    href="https://www.facebook.com/codaltec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li className="mx-3">
                                <Link
                                    className="text-2xl"
                                    href="https://www.instagram.com/codaltec/?igshid=mipxwbvoqzc2&hl=es-la"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className="mx-3">
                                <Link
                                    className="text-2xl"
                                    href="https://www.youtube.com/channel/UC9WLtbwdkANGHAr33KnW6pw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center h-fit py-2 px-5 border-r-black">
                        <picture>
                            <img src="/assets/Logos/MINDEFENSA.svg" alt="Logo Mindefensa" className="w-44 h-auto my-2" />
                        </picture>
                        <picture>
                            <img src="/assets/Logos/GESED_Blanco.svg" alt="Logo GESED" className="w-44 h-auto my-2" />
                        </picture>

                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;