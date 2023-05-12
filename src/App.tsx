import { useState } from "react";
import "./App.css";
import AddFieldModal from "./components/Modal";

function App() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);
  const handleFormChange = (index: number, event: any) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  return (
    <>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(event) => handleFormChange(index, event)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <AddFieldModal />
      <button onClick={addFields}>Add More ...</button>
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default App;
