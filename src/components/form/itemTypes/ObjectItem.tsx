import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import StringItem from './StringItem';
import NumberItem from './NumberItem';
import BooleanItem from './BooleanItem';
import { Key } from 'react';

export const ObjectBracket = styled.span`
  align-self: flex-start;
`;

interface ObjectItemInterface {
  item: {
    type: string;
    title: string;
    length?: number | undefined;
    range?: any;
    value?: any;
  };
  setNewFormValues: any;
}

const ObjectItem = ({ item, setNewFormValues }: ObjectItemInterface) => {
  return (
    <div>
      <span>{item.title}: </span>
      {item.type === 'array' && <ObjectBracket>&#91;</ObjectBracket>}
      {item.type === 'object' && <ObjectBracket>&#123;</ObjectBracket>}
      {item.value.map(
        (element: {
          type: string;
          title: string;
          length: number;
          range: string;
          value: { type: string; title: string; value: any };
        }) => {
          console.log(element);
          switch (element.type) {
            case 'string':
              return (
                <StringItem
                  title={element.title}
                  length={element.length}
                  key={element.title}
                  setNewFormValues={setNewFormValues}
                />
              );

            case 'number':
              return (
                <NumberItem
                  title={element.title}
                  range={element.range}
                  key={element.title}
                />
              );

            case 'boolean':
              return <BooleanItem title={element.title} key={element.title} />;

            case 'object':
              return (
                <ObjectItem
                  item={element.value}
                  key={element.title}
                  setNewFormValues={setNewFormValues}
                />
              );

            case 'array':
              return (
                <ObjectItem
                  item={element.value}
                  key={element.title}
                  setNewFormValues={setNewFormValues}
                />
              );

            default:
              return <p key={element.title}>wrong item type</p>;
          }
        }
      )}
      <span></span>
      {item.type === 'array' && <ObjectBracket>&#93;</ObjectBracket>}
      {item.type === 'object' && <ObjectBracket>&#125;</ObjectBracket>}
    </div>
  );
};

export default ObjectItem;
