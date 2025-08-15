import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredDotos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {filteredDotos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};

export default List;
