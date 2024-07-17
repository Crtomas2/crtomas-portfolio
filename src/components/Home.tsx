import React, { useRef, useState } from 'react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import MyProfile from './MyProfile';
import Project from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';
import { useTheme } from './ThemeProvider';
// import './HomeComponent.css'; // Import the CSS file

const HomeComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const profileRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false); // Close the menu after clicking a link
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  const scrollToContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  return (
    <div className={`h-screen ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black flex flex-col justify-between relative`}>
      {/* Menu Icon */}
      <div className="sm:hidden absolute top-5 left-0 z-10 mt-8">
        <button onClick={toggleMenu} className={`mr-4 font-bold text-xl p-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <FiMenu />
        </button>
      </div>

      {/* Dark mode switch button (top right position) */}
      <div className="absolute top-0 right-0 z-10 mr-24 mt-10">
        <button className='bg-gray-200 p-3 rounded-2xl flex items-center justify-center' onClick={toggleTheme}>
          {theme === 'dark' ? <FiMoon className="w-6 h-6" /> : <FiSun className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`sm:flex sm:flex-row sm:items-center sm:justify-center sm:absolute sm:top-5 sm:left-0 sm:right-0 sm:z-10 sm:mt-4 ${showMenu ? 'flex flex-col items-center' : 'hidden'}`}>
        <button onClick={scrollToProfile} className={`mr-4 font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Home</button>
        <button onClick={scrollToProjects} className={`mr-4 font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Projects</button>
        <button onClick={scrollToSkills} className={`mr-4 font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Skills</button>
        <button onClick={scrollToContacts} className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contacts</button>
      </div>

      {/* Your initials "CRT" */}
      <div id="initials" className={`ml-9 md:ml-20 lg:ml-20 xl:ml-20 mt-12 font-extrabold text-3xl absolute top-0 left-0 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>CRT</div>

      {/* Container for MyProfile and Project components */}
      <div className="flex-1 flex flex-col justify-center items-center mt-24">
        {/* Render the MyProfile component */}
        <MyProfile ref={profileRef} />
      </div>

      <div className={`flex-1 flex flex-col justify-between relative ${theme === 'dark' ? 'bg-black dark:bg-dark' : 'bg-white'}`}>{/* Render the Project component */}
        <div ref={projectsRef} className={`flex-1 flex flex-col justify-center items-center mb-16 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <Project />
        </div>

        {/* Render the Skills component */}
        <div ref={skillsRef} className={`flex-1 flex flex-col justify-center items-center mt-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <Skills />
        </div>

         {/* Render the Contacts component */}
        <div ref={contactRef} className={`flex-1 flex flex-col justify-center items-center mt-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;