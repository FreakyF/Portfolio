import {
    Mail,
    Menu,
    Moon,
    Origami,
    SunMedium,
} from "lucide-react";

import "./Header.scss";

export function Header() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to main content
            </a>

            <header className="header">
                <nav
                    className="header__nav"
                    aria-label="Primary"
                >
                    <a
                        className="header__logo"
                        href="/"
                        aria-current="page"
                    >
                        <Origami
                            size={20}
                            strokeWidth={1.25}
                            aria-hidden="true"
                        />

                        <span>Kamil Fudala</span>
                    </a>

                    <div className="header__actions">
                        <button
                            className="header__burger"
                            type="button"
                            aria-label="Open navigation menu"
                            aria-controls="primary-navigation"
                            aria-expanded="false"
                        >
                            <Menu
                                size={20}
                                strokeWidth={1.25}
                                aria-hidden="true"
                            />
                        </button>

                        <ul
                            id="primary-navigation"
                            className="header__menu"
                        >
                            <li className="header__menu-item">
                                <a
                                    className="header__link"
                                    href="#home"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="header__menu-item">
                                <a
                                    className="header__link"
                                    href="#projects"
                                >
                                    Projects
                                </a>
                            </li>

                            <li className="header__menu-item">
                                <a
                                    className="header__link"
                                    href="mailto:kamil@example.com"
                                    aria-label="Send an email to Kamil"
                                >
                                    <Mail
                                        size={18}
                                        strokeWidth={1.25}
                                        aria-hidden="true"
                                    />

                                    <span className="sr-only">
                                        Email
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <div
                            className="header__divider"
                            aria-hidden="true"
                        />

                        <section
                            className="header__theme"
                            aria-labelledby="theme-selection"
                        >
                            <h2
                                id="theme-selection"
                                className="sr-only"
                            >
                                Theme selection
                            </h2>

                            <fieldset className="header__theme-group">
                                <legend className="sr-only">
                                    Color theme
                                </legend>

                                <label className="header__theme-option">
                                    <input
                                        className="sr-only"
                                        type="radio"
                                        name="theme"
                                        value="light"
                                        defaultChecked
                                    />

                                    <SunMedium
                                        size={18}
                                        strokeWidth={1.25}
                                        aria-hidden="true"
                                    />

                                    <span className="sr-only">
                                        Light theme
                                    </span>
                                </label>

                                <label className="header__theme-option">
                                    <input
                                        className="sr-only"
                                        type="radio"
                                        name="theme"
                                        value="dark"
                                    />

                                    <Moon
                                        size={18}
                                        strokeWidth={1.25}
                                        aria-hidden="true"
                                    />

                                    <span className="sr-only">
                                        Dark theme
                                    </span>
                                </label>
                            </fieldset>
                        </section>
                    </div>
                </nav>
            </header>
        </>
    );
}
