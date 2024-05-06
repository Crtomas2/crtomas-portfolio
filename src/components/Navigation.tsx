import React from 'react';

interface NavigationProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: React.FC<NavigationProps> = ({ setActiveSection }) => {
  const handleHomeClick = () => {
    setActiveSection("home");
  };

  return (
    <nav>
      <button onClick={handleHomeClick}>Home</button>
      {/* You can add more navigation buttons here if needed */}
    </nav>
  );
};

export default Navigation;
