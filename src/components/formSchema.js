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
  //Checkboxes
  pepperoni: yup.boolean(),
  extraCheese: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  greenPeppers: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  roastedGarlic: yup.boolean(),
  blackOlives: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheese: yup.boolean(),
  broccoli: yup.boolean(),
  //Text Boxes
  additional: yup.string(),
});

export default formSchema;
