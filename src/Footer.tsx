import React from 'react';

// Define the type for the props
interface FooterProps {
  copyrightText: string;
}

// Define the Footer component with typed props
const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer style={{ padding: '20px', background: '#f5f5f5', textAlign: 'center' }}>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
