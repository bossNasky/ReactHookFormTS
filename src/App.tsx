import { AddUser, UsersList } from "@features/users";
import { Fragment } from "react";

const App = function () {
  return (
    <Fragment>
      <AddUser />
      <UsersList />
    </Fragment>
  );
};

export { App };
