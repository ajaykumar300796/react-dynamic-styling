import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props: any) => {
  const [enteredValue, setEnteredValue] = useState('');
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
      <div className={`form-control ${!enteredValueIsValid? 'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
