import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDeleate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onDeleateButton = () => {
    onDeleate(id);
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
      <button onClick={onDeleateButton}>Delete</button>
    </div>
  );
};

export default TodoItem;
