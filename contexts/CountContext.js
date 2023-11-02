import { React, createContext, useContext, useState } from "react";

const CountContext = createContext({
  count: 0,
  setCount: () => {},
});

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(
      "useCountContext must be used within a CountContextProvider"
    );
  }
  return context;
}
