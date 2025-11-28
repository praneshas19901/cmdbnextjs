"use client";
import { useEffect, useState } from "react";
import AddFieldForm from "../components/AddFieldForm";
import AddEntryForm from "../components/AddEntryForm";

export default function Home() {
  const [fields, setFields] = useState([]);
  const [entries, setEntries] = useState([]);

  async function load() {
    const f = await fetch("/api/fields").then((r) => r.json());
    const e = await fetch("/api/entries").then((r) => r.json());
    setFields(f);
    setEntries(e);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Dynamic Form Builder</h1>

      <h2>Add New Field</h2>
      <AddFieldForm onAdd={setFields} />

      <h2>Add Entry</h2>
      <AddEntryForm fields={fields} onAdd={setEntries} />

      <h2>Entries</h2>
      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </div>
  );
}
