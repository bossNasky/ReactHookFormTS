import { createContext, ReactNode, useState } from "react";
import { UsersItemProps } from "../users-item/users-item.component";

type UsersContextType = {
  users: UsersItemProps[];
  addUser: (user: UsersItemProps) => void;
};

type UsersContextProviderType = {
  children: ReactNode;
};

export const UsersContext = createContext<UsersContextType | null>(null);

const UsersContextProvider = function ({ children }: UsersContextProviderType) {
  const [users, setUsers] = useState<UsersItemProps[]>([]);

  const addUser = function (user: UsersItemProps) {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContextProvider };
