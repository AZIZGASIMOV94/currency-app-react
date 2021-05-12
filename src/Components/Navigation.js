import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Transition, animated } from 'react-spring';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Navigation = () => {
    const[showMenu,setShowMenu] = useState(false);
 
    return (
        <nav className="text-2xl">
            <button>
                <span>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={()=>setShowMenu(!showMenu)}
                    />
                </span>
            </button>
            <Transition
                items={showMenu}
                from={{ opacity: 0,transform:'translateX(-100%)' }}
                enter={{ opacity: 1,transform:'translateX(0%)'  }}
                leave={{ opacity: 0,transform:'translateX(-100%)'  }}
                reverse={showMenu}
                delay={200}
                onClick={()=>setShowMenu(!showMenu)
                
                }>
                    {(styles, item) =>
                    item && <animated.div 
                    style={styles}
                    className="bg-gradient-to-r from-blue-500 fixed top-0 left-0 w-full  h-full z-50"
                    onClick={() =>setShowMenu(false)}
                >
                 
                </animated.div>
                }
            </Transition>

            <Transition
                items={showMenu}
                from={{ opacity: 0, transform: 'translateX(-100%)' }}
                enter={{ opacity: 1, transform:'translateX(0%)'  }}
                leave={{ opacity: 0, transform:'translateX(-100%)'  }}
                reverse={showMenu}
                delay={200}
                onClick={()=>setShowMenu(!showMenu)
                
                }>
                    {(styles, item) =>
                    item && <animated.div 
                    style={styles}
                    className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                >
                  <NavigationMenu 
                    closeMenu={() => setShowMenu(false)}
                  />
                </animated.div>
                }
        </Transition>
        </nav>
    );
}
 
export default Navigation;