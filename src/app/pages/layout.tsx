import Link from "next/link";
import React from "react";
import styles from "./layout.module.scss";

export default function LocalLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header className={styles.header}>
                <h1><Link href="/">React Hooks experiments</Link></h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/useStateSample">
                                useState
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/useEffectSample">
                                useEffect
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/useContextSample">
                                useContext
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>

    );
}