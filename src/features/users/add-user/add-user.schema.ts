import * as yup from "yup";

const AddUserSchema = yup.object({
  username: yup
    .string()
    .typeError("Username must be a string!")
    .required("Username is required!"),
  age: yup
    .number()
    .typeError("Age must be a number!")
    .positive("Age must be greather than 0!")
    .integer("Age must be a integer!"),
});

export { AddUserSchema };
