import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
