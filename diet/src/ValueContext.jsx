import React, { createContext, useState, useEffect } from 'react';

export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('myValue');
    if (stored !== null) {
      setValue(Number(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myValue', value);
  }, [value]);

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};
