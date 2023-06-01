import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import firebaseDB from './firebase-db';

const BabyNameForm = (props: any) => {
  const [name, setName] = useState('')

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (name.trim() !== '') {
        await addDoc(collection(firebaseDB, "babys"), {
            name
        });

      setName('');

      props.onAdd();
    }
  }

  return (
    <>
        <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            placeholder="Enter baby name"
            value={name}
            onChange={handleInputChange}
        />
        <br /><br />
        <button type="submit">Add Name</button>
        </form>
    </>
  )
}

export default BabyNameForm;
