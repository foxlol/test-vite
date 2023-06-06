import { useState } from 'react';
import { addBaby } from './babies-repository';

interface BabyNameFormProps {
  onAdd: () => void;
  onError: (message: string) => void;
}

const BabyNameForm: React.FC<BabyNameFormProps> = ({ onAdd, onError }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!name || name.trim() === '') {
      onError('Invalid name');
      return;
    }

    try {
      await addBaby(name);
      setName('');
      onAdd();
    } catch (error) {
      onError('Error while trying to add a baby name');
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
