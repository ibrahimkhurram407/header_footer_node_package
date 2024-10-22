import React from 'react';

// Define the type for the props
interface HeaderProps {
  title: string;
  links: { href: string; text: string }[]; // Array of link objects with href and text
}

// Define the Header component with typed props
const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header style={{ padding: '20px', background: '#f5f5f5', textAlign: 'center' }}>
      <h1>{title}</h1>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          {links.map((link: { href: string; text: string }, index: number) => (
            <li key={index} style={{ margin: '0 10px' }}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
