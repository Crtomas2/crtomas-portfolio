import React, { forwardRef } from 'react';
import { useTheme } from './ThemeProvider';

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    const { theme } = useTheme();

    // Define styles for light and dark themes
    const lightStyles = {
      color: '#000', // Change text color for light theme
      backgroundColor: '#fff', // Change background color for light theme
    };
  
    const darkStyles = {
      color: '#fff', // Change text color for dark theme
      backgroundColor: '#000', // Change background color for dark theme
    };
  
    // Apply the appropriate styles based on the current theme
    const styles = theme === 'light' ? lightStyles : darkStyles;
  return (
    <div  className={`flex justify-center items-center h-full flex-col ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="text-center mb-8">
        <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>SKILLS</h1>
      </div>
      <FrontEndSection />
      <BackEndSection />
      <VersionControlSection/>

    </div>
  );
});
const FrontEndSection = () => {
    const { theme } = useTheme();
  
    return (
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="col-span-3 text-center">
          <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Front End</h2>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>HTML</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>CSS</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>JavaScript</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Bootstrap</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Material-UI</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Tailwind CSS</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>TypeScript</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>React</h3>
        </div>
      </div>
    );
  };
    
  const BackEndSection = () => {
    const { theme } = useTheme();
  
    return (
      <div className="grid grid-cols-3 gap-4 mt-7">
        <div className="col-span-3 text-center">
          <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Backend</h2>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>NodeJS</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>MySQLDB</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>ClearDB MySQL</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Java</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Python</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Flask</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>PHP</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Laravel Framework(PHP)</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>RESTFUL API's</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>SQL</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>LDAP</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>CLI/Terminal</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Heroku(Web Hosting)</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>cPanel(Web Hosting)</h3>
        </div>
      </div>
    );
  };
  const VersionControlSection = () => {
    const { theme } = useTheme();
  
    return (
      <div className="grid grid-cols-3 gap-4 mt-7">
        <div className="col-span-3 text-center">
        <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Version Control and Tracking tools</h2>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Git/Github</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Gitlab</h3>
        </div>
        <div className={`bg-${theme === 'light' ? 'gray-200' : 'blue-500'} p-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}>
          <h3 className={`text-base font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>Atlassian Jira & Confluence</h3>
        </div>
      </div>
    );
  };
export default Skills;