import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import AiFillEdit from './AiFillEdit';
import styles from '../styles/TodoItem.module.scss';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const { user } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <button onClick={handleEditing} type="button">
            {' '}
            <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
          </button>
        )}
        <button onClick={() => delTodo(itemProp.id)} type="button">
          Delete
        </button>
        <span style={itemProp.completed ? completedStyle : null}>{itemProp.title}</span>
      </div>
      <input
        type="text"
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
      />
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
