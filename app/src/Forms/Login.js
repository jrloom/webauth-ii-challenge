import React from "react";
// import { axiosWithAuth } from "../Utils/AxiosWithAuth";
import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";

import TheForm from "./Form";

const Login = ({ errors, touched, values, history }) => {
  return (
    <div>
      <div>Login</div>
      <TheForm errors={errors} touched={touched} values={values} />
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    // username: Yup.string().required(),
    // password: Yup.string().required()
  }),
  handleSubmit(values, { resetForm, history }) {
    axios
      .post("http://localhost:5000/api/auth/login", values)
      .then(res => {
        console.log(`login success`, res);
      })
      .catch(err => {
        console.log(`login failed`, err);
      });
  }
})(Login);
