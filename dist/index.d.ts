import React from 'react';

interface HeaderProps {
    title: string;
    links: {
        href: string;
        text: string;
    }[];
}
declare const Header: React.FC<HeaderProps>;

interface FooterProps {
    copyrightText: string;
}
declare const Footer: React.FC<FooterProps>;

export { Footer, Header };
