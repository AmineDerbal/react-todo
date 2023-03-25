import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <button onClick={() => delTodo(itemProp.id)} type="button">
      Delete
    </button>
    {itemProp.title}
  </li>
);
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;