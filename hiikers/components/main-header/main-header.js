import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"; 
import classes from './main-header.module.css'; 
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader(){
    return <>
       <header className={classes.header}>
            <MainHeaderBackground />
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="snow covered mountains" priority /> 
                Hiikers
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Hikes</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">The Hiking Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header> 
    </>
}