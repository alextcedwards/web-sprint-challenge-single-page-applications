import formSchema from "../components/formSchema.js";
import Form from "../components/Form.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Link, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  extraCheese: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPeppers: false,
  dicedTomatoes: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  broccoli: false,
};

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
};

const initialPizza = [];
const initialDisabled = true;

export default function Home() {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postPizza = (newPizza) => {
    axios
      .post(`https://reqres.in/api/orders`, newPizza)
      .then((res) => setPizza([res.data, ...pizza]))
      .catch((err) => console.log(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newPizza = {
      size: formValues.size,
      sauce: formValues.sauce,
      additional: formValues.additional,
      toppings: ["pepperoni", "sausage", "onions", "greenPepper"].filter(
        (topping) => {
          return formValues[topping];
        }
      ),
    };
    postPizza(newPizza);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <>
      <Nav />
      <Link to="/Form">
        <button className="orderbtn">Order Now!</button>
      </Link>
      <Switch>
        <Route path="/Form">
          <Form
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
