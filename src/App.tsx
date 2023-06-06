import { useState, useEffect, useCallback } from 'react';
import './App.css';

import Baby from './baby';

import BabyNameForm from './baby-name-form';
import BabyNameList from './baby-names-list';
import { getAllBabies } from './babies-repository';

const App = () => {
  const [babies, setBabies] = useState<Baby[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onError = (message: string) => {
    setErrorMessage(message);
  };

  const fetchBabies = useCallback(async () => {
    try {
      const babies = await getAllBabies();
      setBabies(babies);
      setErrorMessage('');
    } catch (error) {
      onError('Error while trying to fetch baby names');
    }
  }, []);

  useEffect(() => {
    fetchBabies();
  }, [fetchBabies]);

  return (
    <>
      <h1>Baby Names</h1>
      <div className="card">
        <BabyNameForm onAdd={fetchBabies} onError={onError} />
        <BabyNameList
          babies={babies}
          onDelete={fetchBabies}
          onError={onError}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};

export default App;
