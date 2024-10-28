import React from 'react';

interface HeaderProps$1 {
    title: string;
    links: {
        href: string;
        text: string;
    }[];
}
declare const Header: React.FC<HeaderProps$1>;

interface FooterProps {
    copyrightText: string;
}
declare const Footer: React.FC<FooterProps>;

interface HeaderProps {
    title: string;
    links: {
        href: string;
        text: string;
    }[];
}
declare const test: React.FC<HeaderProps>;

export { Footer, Header, test };
