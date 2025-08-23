import "./TodoItem.css";
import { memo } from "react";
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

//고차 컴포넌트(HOC) : 컴포넌트를 인자로 받아서 새로운 컴포넌트를 반환하는 함수
//memo : 컴포넌트의 props가 변경되었을 때만 리렌더링을 수행하도록 최적화하는 고차 컴포넌트
//기본적으로 얕은 비교(shallow comparison)를 사용하여 이전 props와 새로운 props를 비교
//객체나 배열과 같은 참조 타입의 props가 변경되지 않으면 리렌더링을 방지
//하지만 객체나 배열 내부의 값이 변경되었지만 참조가 동일한 경우에는 리렌더링이 발생하지 않음
//따라서, 복잡한 props 구조를 가진 컴포넌트에서는 커스텀 비교 함수를 사용하여 리렌더링 조건을 세밀하게 제어할 수 있음
//커스텀 비교 함수는 이전 props와 새로운 props를 인자로 받아서, 리렌더링이 필요한 경우 false를 반환하고, 그렇지 않은 경우 true를 반환
//이 예제에서는 id, isDone, content, date 네 가지 props를 비교하여 하나라도 변경되었다면 리렌더링을 수행하도록 설정
export default memo(TodoItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;
  return true;
});
