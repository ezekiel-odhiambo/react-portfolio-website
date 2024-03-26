import { createContext, useState, useEffect } from "react";

const BrowserContext = createContext();
const routeState = {};

function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    function handlePopStateEvent(e) {
      console.log(e);
      //set the url to be updated
      setCurrentURL(new URL(window.location.href));
    }

    window.addEventListener("popstate", handlePopStateEvent);

    return () => window.removeEventListener("popstate", handlePopStateEvent);
  }, []);

  return (
    <BrowserContext.Provider value={{ routeState, currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}
