import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
import Hero from "./Hero"
function Nav() {
  const [open, setOpen] = useState(false);

  const handlMenu = () => {
    setOpen(!open);
  };

  const Links = [
    { name: "Home",link:'home' },
    { name: "About",link:'about' },
    { name: "Contact",link:'contact' },
    { name: "Services",link:'services' },
    { name: "Blog",link:'blog' },
  ];
  return (
    <>
      <section className="h-screen w-full">
        <nav className="flex items-center justify-around text-white/100 w-full h-32">
          <div>
            <a href="#">logo</a>
          </div>
          <ul
            className={`${
              !open ? "right-[100%] " : "right-0"
            }  text-black flex items-center gap-x-6 flex-col sm:absolute w-52 bg-white h-screen top-0 lg:flex-row  z-20 lg:static fixed px-3 justify-around ease-linear lg:bg-transparent lg:text-white `}
          >
          
            {Links.map((link, index) => (
              <li key={index} className="cursor-pointer py-3 lg:inline-block flex">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <li>
            </li>
          </ul>
          <div>
            <button className="py-2 px-5 bg-white text-black rounded-xl">
              Get's Started
            </button>
          </div>
          {open ? (
            <MdArrowRightAlt
              className="text-3xl  text-black z-20  right-5 top-6 cursor-pointer md:hidden "
              onClick={handlMenu}
            />
          ) : (
            <MdMenu
              className="text-3xl font-bold text-black z-20  right-5 top-6 cursor-pointer md:hidden "
              onClick={handlMenu}
            />
          )}
        </nav>
        <Hero />
      </section>
      
      

    </>
  );
}

export default Nav;
