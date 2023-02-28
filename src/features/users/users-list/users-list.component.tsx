import { Card } from "@features/ui";
import { useUsersContext } from "../users-context/use-users-context";
import { UsersItem } from "../users-item/users-item.component";
import style from "./users-list.module.css";

const UsersList = function () {
  const { users } = useUsersContext();

  return (
    <Card superClass={style["users"]}>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <UsersItem key={user.id} {...user} />)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </Card>
  );
};

export { UsersList };
