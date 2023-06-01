import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import firebaseDB from './firebase-db';

import BabyNameForm from './baby-name-form'
import BabyNameList from './baby-names-list'

import './App.css'

const App = () => {

  const [babies, setBabies] = useState<any>([]);

  const fetchData = async () => {
    await getDocs(collection(firebaseDB, "babys"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id }));

                setBabies(newData);                
            });
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
      <h1>Test</h1>
      <div className="card">
        <BabyNameForm onAdd={fetchData} />
        <BabyNameList babies={babies} onDelete={fetchData} />
      </div>
    </>
  )
}

export default App
