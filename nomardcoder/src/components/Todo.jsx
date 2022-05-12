import { useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => {
      return [toDo, ...current];
    }); // current = toDos 배열은 새로운 배열로 만들어서 넣어 주어야 한다
    setToDo("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange} // 위에서 정의한 함수의 value는 toDo를 의미한다
          value={toDo}
          type="text"
          placeholder="Write Your To-DO"
        />
        <button>Add To-Do</button>
        <p>{toDo}</p>
      </form>
      <hr />
      {toDos.map((toDo, index) => {
        return <ul key={index}>{toDo}</ul>;
      })}
    </div>
  );
}

export default Todo;
