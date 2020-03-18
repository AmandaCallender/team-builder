import React, { useState } from "react";

const Form = props => {
  const [name, setName] = useState("");

  const changeHandler = event => {
    console.log(name);
    setName(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    props.addMember(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="member"> Team Member : </label>
        <input
          type="text"
          placeholder="First Name"
          id="member"
          value={name}
          name="member"
          onChange={changeHandler}
        />
        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
};

export default Form;
