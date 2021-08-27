import React, { useState } from "react";

let ProfileContext = React.createContext();

export default ProfileContext;

export const ProfileProvider = ({ children }) => {
  const [profileList, setProfileList] = useState([]);
  return (
    <ProfileContext.Provider value={{ profileList, setProfileList }}>
      {children}
    </ProfileContext.Provider>
  );
};
