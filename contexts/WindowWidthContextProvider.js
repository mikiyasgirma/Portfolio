import React, { useContext, useEffect, useState } from "react";

export const WindowWidthContext = React.createContext();

export default function WindowWidthContextProvider({ children }) {
  let [windoWidth, setWindowWidth] = useState();

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowWidth((windoWidth = window.innerWidth));
      }
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); //

  return (
    <WindowWidthContext.Provider value={windoWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
}

export const useWindowWidth = () => {
  const windowWidth = useContext(WindowWidthContext);
  return windowWidth;
};
