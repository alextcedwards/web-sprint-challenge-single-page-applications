import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be a minimum of 3 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large"])
    .required("Size is Required"),
  sauce: yup
    .string()
    .oneOf(["Original-Red", "Garlic-Ranch", "BBQ-Sauce", "Spinach-Alfredo"])
    .required("Sauce is Required"),
});

export default formSchema;
