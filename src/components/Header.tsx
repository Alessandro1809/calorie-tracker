
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full py-4 transition-all duration-300 z-[10] ${
        isScrolled ? ' backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center mx-auto max-w-4xl">
        <h1
          className={`text-2xl font-black transition-colors duration-300 ${
            isScrolled ? 'text-black/80' : 'text-black'
          }`}
        >
          Calorie Tracker
        </h1>
        <div>
            <button className="bg-black text-white hover:bg-black/90 hover:text-slate-200 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:cursor-pointer">Reset Data</button>
        </div>
      </div>
     
    </header>
  );
};
