export type UsersItemProps = {
  id: string;
  username: string;
  age: number;
};

const UsersItem = function ({ username, age }: UsersItemProps) {
  return (
    <li>
      {username} ({age} years old)
    </li>
  );
};

export { UsersItem };
