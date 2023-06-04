import { collection, doc, deleteDoc } from 'firebase/firestore';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import firebaseDB from './firebase-db';

const BabyNameList = (props: any) => {
  const handleDelete = (id: any) => {
    const collectionRef = collection(firebaseDB, 'babys');
    const docRef = doc(collectionRef, id);

    deleteDoc(docRef)
      .then(() => {
        props.onDelete();
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <ul style={{ paddingLeft: 0 }}>
      {props.babies.map((baby: any) => (
        <li key={baby.id} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1 }}>{baby.name}</span>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDelete(baby.id)}
            style={{ cursor: 'pointer' }}
          />
        </li>
      ))}
    </ul>
  );
};

export default BabyNameList;
