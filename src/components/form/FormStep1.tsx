import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export interface FormInterface {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formValues: any;
  setFormValues: any;
}

const FormStep1 = ({ setStep, formValues, setFormValues }: FormInterface) => {
  const [textInput, setTextInput] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('form 1 submitted');
    setFormValues();
    setStep(2);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor='typeInput'>Object Type Definition</label>
      <textarea
        required
        id='typeInput'
        rows={20}
        cols={50}
        value={textInput}
        onChange={handleChange}
      />

      <button type='submit'>Make it so!</button>
    </Form>
  );
};

export default FormStep1;
