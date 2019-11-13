import React from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { withFormik } from "formik";
import * as Yup from "yup";

import TheForm from "./Form";

const Register = ({ errors, touched, values, history }) => {
  return (
    <div>
      <div>Register</div>
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
    axiosWithAuth()
      .post("/auth/register", values)
      .then(res => {
        console.log(`register success`, res);
      })
      .catch(err => {
        console.log(`register failed`, err);
      });
  }
})(Register);
