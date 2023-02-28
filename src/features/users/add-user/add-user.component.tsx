import { Card, Button, Input } from "@features/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddUserSchema } from "./add-user.schema";
import style from "./add-user.module.css";
import { useUsersContext } from "../users-context/use-users-context";

export type FormData = {
  username: string;
  age: number;
};

const AddUser = function () {
  const { addUser } = useUsersContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(AddUserSchema),
  });

  const onSubmit = function (data: FormData) {
    const newUser = {
      id: Math.random().toString(),
      ...data,
    };

    addUser(newUser);
    reset();
  };

  return (
    <Card superClass={style["input"]}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          title="Username"
          id="username"
          error={errors?.username?.message}
          {...register("username")}
        />
        <Input
          type="number"
          title="Age (Years)"
          id="age"
          error={errors?.age?.message}
          {...register("age")}
        />
        <Button type="submit" title="Add User" />
      </form>
    </Card>
  );
};

export { AddUser };
