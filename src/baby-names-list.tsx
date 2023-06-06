import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Baby from './baby';
import { deleteBaby } from './babies-repository';

interface BabyNameListProps {
  onDelete: () => void;
  onError: (message: string) => void;
  babies: Baby[];
}

const BabyNameList: React.FC<BabyNameListProps> = ({
  babies,
  onDelete,
  onError,
}) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteBaby(id);
      onDelete();
    } catch (error) {
      onError('Error removing the baby name');
    }
  };

  return (
    <ul style={{ paddingLeft: 0 }}>
      {babies.map((baby: Baby) => (
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
