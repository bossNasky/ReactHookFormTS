import { useContext } from "react";
import { UsersContext } from "./users-context";

const useUsersContext = function () {
  const context = useContext(UsersContext);
  if (context === null) {
    throw Error("Context has not been provided!");
  }
  return context;
};

export { useUsersContext };
