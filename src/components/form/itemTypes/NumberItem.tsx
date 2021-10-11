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

interface NumberItemInterface {
  title: string;
  range: string;
}

const NumberItem = ({ title, range }: NumberItemInterface) => {
  return (
    <ItemContainer>
      <Title>{title}: </Title>
      <InputLabel htmlFor={range}>range</InputLabel>
      <Input id={range} type='range' />
    </ItemContainer>
  );
};
export default NumberItem;
