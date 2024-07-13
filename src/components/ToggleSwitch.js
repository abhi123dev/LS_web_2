import {React, useEffect} from 'react';

function ToggleSwitch({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="form-group form-check text-right mt-4" >
      <button
        type="button"
        className="btn btn-toggle"
        onClick={handleToggle}
        style={{ backgroundColor: darkMode ? 'white' : 'black', color: darkMode ? 'black' : 'white' }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default ToggleSwitch;


// import React from 'react';

// function ToggleSwitch({ darkMode, setDarkMode }) {
//   const handleToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className="form-group form-check text-right border mt-4" style={{ backgroundColor:"orange"}}>
//       <input
//         type="checkbox"
//         className="form-check-input"
//         id="darkModeToggle"
//         checked={darkMode}
//         onChange={handleToggle}
//       />
//       <label className="form-check-label" htmlFor="darkModeToggle">Dark Mode</label>
//     </div>
//   );
// }

// export default ToggleSwitch;