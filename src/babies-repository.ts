import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import firebaseDB from './firebase-db';
import Baby from './baby';

const BABIES_COLLECTION_NAME = 'babies';

const getBabiesCollection = () => {
  return collection(firebaseDB, BABIES_COLLECTION_NAME);
};

export const getAllBabies = async (): Promise<Baby[]> => {
  const querySnapshot = await getDocs(getBabiesCollection());

  if (querySnapshot.metadata.fromCache) {
    throw new Error('Error while fetching data');
  }

  return querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
        id: doc.id,
      } as Baby)
  );
};

export const addBaby = async (name: string): Promise<string> => {
  const documentReference = await addDoc(getBabiesCollection(), {
    name,
  });

  return documentReference.id;
};

export const deleteBaby = async (id: string) => {
  const documentReference = doc(getBabiesCollection(), id);

  await deleteDoc(documentReference);
};
