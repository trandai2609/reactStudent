import React from "react";
import { useFieldArray } from "react-hook-form";
import StudentComponent from "./studentComponent";

export default function TeacherComponent({ control, register, setValue, getValues }) {
  const { fields, remove } = useFieldArray({
    control,
    name: "teacherData"
  });

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                {...register(`teacherData.${index}.fullNameTeacher`)}
                defaultValue={item.fullNameTeacher}
              />
              <button type="button" onClick={() => remove(index)}>
                Remove Teacher
              </button>
              <StudentComponent nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            setValue("teacherData", [
              ...getValues()?.teacherData || [],
              {
                fullNameTeacher: ""
              }
            ]);
          }}
        >
          Add Teacher
        </button>
      </section>
    </>
  );
}
