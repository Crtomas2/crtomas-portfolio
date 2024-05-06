import React, { useRef } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import MyProfile from './MyProfile';
import Project from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';
import { useTheme } from './ThemeProvider';

const HomeComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const profileRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  const scrollToProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  const scrolltoContacts = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth'});
  }
 


  return (
    <div className={`h-screen ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black flex flex-col justify-between relative`}>
      
      {/* Your initials "CRT" */}
      <div id="initials" className={`ml-20 mt-12 font-extrabold text-3xl absolute top-0 left-0 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>CRT</div>
      
      {/* Container for MyProfile and Project components */}
      <div className="flex-1 flex flex-col justify-center items-center mt-24">
        {/* Render the MyProfile component */}
        <MyProfile ref={profileRef} />
      </div>

      <div className={`flex-1 flex flex-col justify-between relative ${theme === 'dark'? 'bg-black dark:bg-dark' : 'bg-white'}`}>
        {/* Render the Project component */}
        <div ref={projectsRef} className={`flex-1 flex flex-col justify-center items-center mb-16 ${theme === 'dark'? 'bg-black' : 'bg-white'}`}>
          <Project />
        </div>

        {/* Render the Skills component */}
        <div ref={skillsRef} className={`flex-1 flex flex-col justify-center items-center mt-4 ${theme === 'dark'? 'bg-black' : 'bg-white'}`}>
          <Skills />
        </div>

         {/* Render the Contacts component */}
      <div ref={contactRef} className={`flex-1 flex flex-col justify-center items-center mt-4 ${theme === 'dark'? 'bg-black' : 'bg-white'}`}>
        <Contacts />
      </div>

      </div>

     

      {/* Navigation Links */}
      <div className="absolute top-5 left-0 right-0 flex justify-center z-10 mt-8">
        <button onClick={scrollToProfile} className={`mr-4 font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Home</button>
        <button onClick={scrollToProjects} className={`font-bold text-xl mr-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Projects</button>
        <button onClick={scrollToSkills} className={`font-bold text-xl mr-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Skills</button>
        <button onClick={scrolltoContacts} className={`font-bold text-xl mr-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contacts</button>
      </div>

      {/* Dark mode switch button (top right position) */}
      <div className="absolute top-0 right-0 mr-20 mt-10">
        <button className='bg-gray-200 p-4 rounded-2xl flex items-center justify-center' onClick={toggleTheme}>
          {theme === 'dark' ? <FiMoon className="w-6 h-6" /> : <FiSun className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
