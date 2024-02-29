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
  const [editing, Setediting] = useState(false);

  const { search } = useLocation();
  const param = new URLSearchParams(search);
  const id = param.get("Editid");
  useEffect(() => {
    if (id !== null) {
      const editproducts = data.find((el) => el.id == id);
      if (editproducts) {
        setValue(editproducts.text);
        setTitleValue(editproducts.title);
        Setediting(true);
      }
    }
  }, []);

  function buttonClickHundler() {
    let res = {
      text: value,
      title: titleValue,
      date: new Date().toLocaleString(),
      id: new Date().getTime(),
    };
    setdata((s) => [...s, res]);

    if (editing) {
      let updateProducts = data.map((el) => {
        return el.id == id;
      });

      data.push(updateProducts);
    } else {
      data.push(res);
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
