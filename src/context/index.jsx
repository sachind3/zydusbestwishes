import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [docInfo, setDocInfo] = useState(null);
  const [tempInfo, setTempInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const store = {
    docInfo,
    setDocInfo,
    tempInfo,
    setTempInfo,
    isLoading,
    setIsLoading,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
