import { useState } from "react";

function MovieInput() {
  const [title, setTitle] = useState("");

  const inputTitle = (e) => setTitle(e.target.value);

  return (
    <>
      <input type="text" value={title} onChange={inputTitle} />
    </>
  );
}
export default MovieInput;
