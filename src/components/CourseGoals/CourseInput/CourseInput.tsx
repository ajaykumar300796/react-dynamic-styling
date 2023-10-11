import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
// import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background-color: rgb(255, 202, 202);
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(true);

  const goalInputChangeHandler = (event: any) => {
    if (event.target.value.length > 0) {
      setEnteredValueIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setEnteredValueIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    // setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`${!enteredValueIsValid && 'invalid'}`}> */}
      <FormControl className={`${!enteredValueIsValid && "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
