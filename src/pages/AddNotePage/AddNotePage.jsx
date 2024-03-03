import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Context from "../../Context";
import { Button, Input } from "antd";
import "./AddNotePage.css";
import Header from "../../components/header/header";
import { useLocation } from "react-router-dom";
function AddNotePage() {
  const { data, setdata } = useContext(Context);
  const [value, setValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [currentData, setCurrentData] = useState();

  const { search } = useLocation();
  const param = new URLSearchParams(search);
  const id = param.get("Editid");
  useEffect(() => {
    if (id !== null) {
      const editproducts = data.find((el) => el.id == id);
      if (editproducts) {
        setValue(editproducts.text);
        setCurrentData(editproducts);
        setTitleValue(editproducts.title);
      }
    }
  }, []);

  function buttonClickHundler() {
    if (id) {
      let res = {
        ...currentData,
        text: value,
        title: titleValue,
      };
      const newedit = data.map((el) => (el.id == id ? res : el));
      setdata(newedit);
    } else {
      const newdata = {
        date: new Date().toLocaleString(),
        id: new Date().getTime(),
        text: value,
        title: titleValue,
      };

      setdata((prevdata) => [...prevdata, newdata]);

      setTitleValue("");
      setValue("");
    }
  }

  return (
    <>
      <Header />
      <form action="" onSubmit={buttonClickHundler}>
        <Input
          placeholder="title"
          className="input"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <Button type="primary" onClick={buttonClickHundler}>
          Create Nodes
        </Button>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="Quill"
        />
      </form>
    </>
  );
}

export default AddNotePage;
