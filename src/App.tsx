import { useState, useEffect } from 'react';
import './App.css';

import Baby from './baby';

import BabyNameForm from './baby-name-form';
import BabyNameList from './baby-names-list';
import { getAllBabies } from './babies-repository';

const App = () => {
  const [babies, setBabies] = useState<Baby[]>([]);

  const fetchBabies = async () => {
    setBabies(await getAllBabies());
  };

  useEffect(() => {
    fetchBabies();
  }, []);

  return (
    <>
      <h1>Baby Names</h1>
      <div className="card">
        <BabyNameForm onAdd={fetchBabies} />
        <BabyNameList babies={babies} onDelete={fetchBabies} />
      </div>
    </>
  );
};

export default App;
