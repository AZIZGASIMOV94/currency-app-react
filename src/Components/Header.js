import React from 'react';
import Navigation from './Navigation';


const Header = () => {
    return (
      <div>
        <header className="border-b  p-3 flex justify-between items-center shadow-2xl ">
          <span className="font-bold">Current Curreny Rates</span>
          <Navigation />
        </header>
      </div>
    );
}
 
export default Header;