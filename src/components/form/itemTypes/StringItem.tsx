import styled from 'styled-components';
import ItemContainer from './ItemContainer';

const Title = styled.span`
  grid-column: title;
`;

const InputLabel = styled.label`
  grid-column: inputLabel;
`;
const Input = styled.input`
  grid-column: input;
`;

interface StringItemInterface {
  title: string;
  length: number | undefined;
  setNewFormValues: any;
}

const StringItem = ({
  title,
  length,
  setNewFormValues,
}: StringItemInterface) => {
  const handleChange = (e: any) => {
    console.log(e);
    // setNewFormValues((prevState) => [...prevState, { test: e.target.value }]);
    setNewFormValues({
      title: e.target.value,
      type: 'string',
      length: e.target.value,
    });
  };

  return (
    <ItemContainer>
      <Title>{title}: </Title>

      <InputLabel htmlFor={title}>char length: </InputLabel>
      <Input id={title} type='number' onChange={handleChange} />
    </ItemContainer>
  );
};

export default StringItem;
