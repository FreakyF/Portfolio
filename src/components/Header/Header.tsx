import './Header.scss';

export function Header() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <header className="header" role="banner">
                <a href="/" className="header__logo" aria-label="Kamil X - go to homepage">
                    Kamil X
                </a>

                <nav className="header__nav" aria-label="Primary navigation">
                    <ul className="header__nav-list" role="list">
                        <li>
                            <a href="#home" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <address className="header__contact">
                    <ul className="header__contact-list" role="list">
                        <li>
                            <a href="mailto:email@example.com" aria-label="Send email to email@example.com">
                                email@example.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+48123456789" aria-label="Call +48 123 456 789">
                                +48 123 456 789
                            </a>
                        </li>
                    </ul>
                </address>

                <nav className="header__lang" aria-label="Language selection">
                    <ul className="header__lang-list" role="list">
                        <li>
                            <a href="/en" lang="en" hrefLang="en" aria-current="true">
                                English
                            </a>
                        </li>
                        <li>
                            <a href="/pl" lang="pl" hrefLang="pl">
                                Polski
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
