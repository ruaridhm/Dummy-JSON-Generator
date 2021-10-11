import { useState } from 'react';
import styled from 'styled-components';
import { Form, FormInterface } from './FormStep1';
import BooleanItem from './itemTypes/BooleanItem';
import NullItem from './itemTypes/NullItem';
import NumberItem from './itemTypes/NumberItem';
import ObjectItem from './itemTypes/ObjectItem';
import StringItem from './itemTypes/StringItem';

const JsonObjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ObjectBracket = styled.span`
  align-self: flex-start;
`;

const FormStep2 = ({ setStep, formValues, setFormValues }: FormInterface) => {
  interface newFormValuesInterface {
    title: string;
    type: string;
    length: string;
  }

  const [count, setCount] = useState<number>(1);
  const [newFormValues, setNewFormValues] = useState<newFormValuesInterface>();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(formValues);
  };

  const handleChange = (e: { target: { value: any } }) => {
    console.log(e);
    // setNewFormValues((prevState) => [...prevState, { test: e.target.value }]);
    setNewFormValues({
      title: e.target.value,
      type: 'string',
      length: e.target.value,
    });

    console.log(formValues);
  };

  const handleCountChange = (e: any) => {
    setCount(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <JsonObjectContainer>
        <ObjectBracket>&#123;</ObjectBracket>
        {formValues.map(
          (
            item: {
              type: string;
              title: string;
              length?: number | undefined;
              range?: any;
              value?: any;
            } | null
          ) => {
            let result = null;

            if (item!.type === 'string') {
              result = (
                <StringItem
                  title={item!.title}
                  length={item!.length}
                  key={item!.title}
                  setNewFormValues={setNewFormValues}
                />
              );
            } else if (item!.type === 'number') {
              result = (
                <NumberItem
                  title={item!.title}
                  range={item!.range}
                  key={item!.title}
                />
              );
            } else if (item!.type === 'boolean') {
              result = <BooleanItem title={item!.title} key={item!.title} />;
            } else if (item!.type === 'array' || 'object') {
              result = (
                <ObjectItem
                  key={item!.title}
                  item={item!}
                  setNewFormValues={setNewFormValues}
                />
              );
            } else if (item === null) {
              result = <NullItem key={item!.title} />;
            }

            return result;
          }
        )}
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
