import React from 'react';

const headerStyle = {
    width: '100%',
    backgroundColor: '#ffb2b2ff',
    padding: '20px 0',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const titleStyle = {
    margin: 0,
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000000ff',
};

const Header = () => (
    <header style={headerStyle}>
        <h1 style={titleStyle}>Food Randomizer</h1>
    </header>
);

export default Header;