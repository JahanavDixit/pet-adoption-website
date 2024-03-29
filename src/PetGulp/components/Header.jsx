import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../assets/css/Header.css";



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    onClose();
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : null}>
        <i ref={btnRef} onClick={onOpen} className="fa-solid fa-bars"></i>

        <a href="#home" className="logo">
        <b style={{ color: '#686c6d', textShadow: '2px 2px 2px #695e5f', display: 'flex', alignItems: 'center' }}>
        P <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg> ws
         for a Cause</b>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">About our work</a>
            </li>
            <li>
              <a href="#cta">Why to Adopt ?</a>
            </li>
            <li>
              <a href="#volunteer">Volunteer with us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
          className="sidebar"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <div className="logoNclose">
                <a href="#home" onClick={handleClick}>
                  PetGulp
                </a>
                <i
                  onClick={onClose}
                  className="fa-regular fa-circle-xmark cross"
                ></i>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <ul className="sidebarList">
                <li>
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop" onClick={handleClick}>
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#collections" onClick={handleClick}>
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#blogs" onClick={handleClick}>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleClick}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#login" onClick={handleClick}>
                    Login
                  </a>
                </li>
              </ul> 
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
