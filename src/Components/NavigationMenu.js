import React ,{ useState } from 'react';

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const NavigationMenu = (props) => {
    return ( 
        <div>
            <ul>
                <li>
                    <Link 
                    className="text-blue-500 py-3 border-t border-b block"
                    to="/"
                    onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                    <Link 
                    className="text-blue-500 py-3 border-t border-b block"
                    to="/about"  
                    onClick={props.closeMenu}>About</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default NavigationMenu;