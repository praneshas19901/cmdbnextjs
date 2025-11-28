"use client";
import { useState } from "react";

export default function AddEntryForm({ fields, onAdd }) {
  const [values, setValues] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/entries", {
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await res.json();
    onAdd(data.entries);
    setValues({});
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((f) => (
        <div key={f.name}>
          <label>{f.name}</label>
          <input
            type="text"
            value={values[f.name] || ""}
            onChange={(e) =>
              setValues({ ...values, [f.name]: e.target.value })
            }
          />
        </div>
      ))}

      <button type="submit" style={{ marginTop: 10 }}>
        Add Entry
      </button>
    </form>
  );
}
