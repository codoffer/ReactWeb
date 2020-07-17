import React,{useState} from 'react'
import "../style.css"
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="fixed-top p-0 mb-4 navbarcss">
        <NavbarBrand href="/" className="font-weight-normal p-2 border border-black" id="brand">
            Ranakpur Temple
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white navlinks">                 
                    About Ranakpur            
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="/about-us">
                    About Ranakpur
                    </DropdownItem>
                    <DropdownItem href="/architect">
                    Architect
                    </DropdownItem>
                    <DropdownItem />
                    <DropdownItem href="/temple-of-pillars">
                    Temple of Pillars
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/how-to-reach" className="text-white medium navlinks">How to reach</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery" className="text-white navlinks">Photo Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/near-by-attraction" className="text-white medium  navlinks">Near By Attraction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reviews" className="text-white medium navlinks">Reviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hotels" className="text-white medium navlinks">Hotels</NavLink>
            </NavItem>
            
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}   


export default Header