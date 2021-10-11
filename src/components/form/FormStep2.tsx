import { useState } from 'react';
import styled from 'styled-components';
import { Form, FormInterface } from './FormStep1';

const JsonObjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ObjectBracket = styled.span`
  align-self: flex-start;
`;

const FormStep2 = ({ setStep, formValues, setFormValues }: FormInterface) => {
  const [count, setCount] = useState(1);
  const [newFormValues, setNewFormValues] = useState();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(formValues);
  };

  const handleChange = (e: any) => {
    console.log(e);
    // setNewFormValues();
    console.log(formValues);
  };

  const handleCountChange = (e: any) => {
    setCount(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <JsonObjectContainer>
        <ObjectBracket>&#123;</ObjectBracket>
        {/* {formValues.map((item: any) => {
          let result = null;

          return result;
        })} */}
        <ObjectBracket>&#125;</ObjectBracket>
      </JsonObjectContainer>
      <label htmlFor='count'>Number of objects</label>
      <input
        type='number'
        value={count}
        id='count'
        onChange={handleCountChange}
      />
      <button type='submit'>Make it so!</button>
    </Form>
  );
};

export default FormStep2;
