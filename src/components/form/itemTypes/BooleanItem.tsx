import styled from 'styled-components';
import ItemContainer from './ItemContainer';

const Title = styled.span`
  grid-column: title;
`;

const InputLabel = styled.label`
  grid-column: inputLabel;
`;

const Input = styled.select`
  grid-column: input;
`;

interface BooleanItemInterface {
  title: string;
}

const BooleanItem = ({ title }: BooleanItemInterface) => {
  return (
    <ItemContainer>
      <Title>{title}:</Title>
      <InputLabel htmlFor={title}>value</InputLabel>

      <Input name={title} id={title}>
        <option value='true'>True</option>
        <option value='false'>False</option>
        <option value='random' defaultValue='selected'>
          Random
        </option>
      </Input>
    </ItemContainer>
  );
};
export default BooleanItem;
