import { useState } from 'react';
import { addBaby } from './babies-repository';

interface BabyNameFormProps {
  onAdd: () => void;
}

const BabyNameForm: React.FC<BabyNameFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (name.trim() !== '') {
      await addBaby(name);
      setName('');
      onAdd();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter baby name"
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Add Name</button>
      </form>
    </>
  );
};

export default BabyNameForm;
