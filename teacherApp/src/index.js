import React from "react";
import { useForm } from "react-hook-form";
import TeacherComponent from "./teacherComponent";
import ReactDOM from "react-dom";
import httpCommon from "./http-common";

import "./App.css";
import { createData } from "./service";

const defaultValues = {
  teacherData: []
};

export default function App() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue
  } = useForm({
    defaultValues
  });
  const onSubmit = (data) => {
    console.log("data", data)
    let error = false
    if (data.teacherData?.length <= 2) {
      error = true
    }
    data.teacherData.forEach(element => {
      if (!element?.studentArray || element.studentArray?.length <= 30) {
        error = true
      }
    });
    if (error) {
      alert('Error studentArray length')
      return
    }
    httpCommon.post("/list", data).then(
      res => {
        console.log(res.data)
      }
    ).catch(err => console.log(err))
    .finally(() => console.log('TODO') )
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Manager</h1>
      <p>Group Teacher</p>
      <TeacherComponent
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />
      <button type="button" onClick={reset}>
        Clear Form
      </button>
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);