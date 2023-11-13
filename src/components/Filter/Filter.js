import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, updateContact }) => {
  return (
    <div>
      <FilterInput
        type="text"
        value={filter}
        placeholder="Find contact"
        onChange={evt => updateContact(evt.target.value)}
      />
    </div>
  );
};
