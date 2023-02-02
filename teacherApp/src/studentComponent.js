import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `teacherData.${nestIndex}.studentArray`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <p>Student Array:</p>
            <input
              {...register(`teacherData.${nestIndex}.studentArray.${k}.fullNameStudent`, {
                required: true
              })}
              defaultValue={item.fullNameStudent}
              style={{ marginRight: "25px" }}
            />

            <input
              {...register(`teacherData.${nestIndex}.studentArray.${k}.dateOfBirth`)}
              defaultValue={item.dateOfBirth}
            />
            <button type="button" onClick={() => remove(k)}>
              Delete Student
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            fullNameStudent: "fullNameStudent",
            dateOfBirth: "dateOfBirth"
          })
        }
      >
        Add Student
      </button>

      <hr />
    </div>
  );
};
