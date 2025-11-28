"use client";
import { useState } from "react";

export default function AddFieldForm({ onAdd }) {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/fields", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    onAdd(data.fields);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Field name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Field</button>
    </form>
  );
}
