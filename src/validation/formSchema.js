import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required!"),
  email: yup
    .string()
    .email("Must be valid email address")
    .required("Email address is required!"),
   password: yup
    .string()
    .required('Password is required!')
    .min(6, 'Password must be more than 5 characters'),
    tos: yup.boolean().required('You must accept the TOS!'),
});

export default FormSchema
