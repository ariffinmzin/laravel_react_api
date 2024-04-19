import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    axios("http://localhost:8000/api/welcome")
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const handleSubmit = (e) => {
    console.log("Sent to Laravel");

    const data = new FormData();
    data.append("answer", answer);

    axios({
      url: "http://localhost:8000/api/answer",
      method: "POST",
      data: data,
    }).then((res) => {
        console.log(res);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <h1>{message}</h1>
      {answer !== null && <h1>{answer}</h1>}
      <input type="text" onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Home;
