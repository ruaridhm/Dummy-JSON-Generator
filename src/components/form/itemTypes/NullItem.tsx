import ItemContainer from './ItemContainer';

interface NullItemInterface {
  key: string;
}

const NullItem = ({ key }: NullItemInterface) => {
  return <ItemContainer key={key}>null</ItemContainer>;
};

export default NullItem;
