import { useContext, useEffect } from "react";
import Header from "../../components/header/header";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import "./noteLIst.css";
import { Button } from "antd";
function NoteList() {
  const { data, setdata } = useContext(Context);

  const nav = useNavigate();
  function navToPage(id) {
    nav(`/notepage/${id}`);
  }

  function clickEditHandler(id, e) {
    e.stopPropagation();
    nav(`/addNotepage?Editid=${id}`);
  }

  useEffect(() => {
    deleteClickHandler();
  }, [data]);

  function deleteClickHandler(id) {
    let delt = data.filter((el) => el.id !== id);
    setdata(delt);
  }
  return (
    <>
      <Header />
      <div className="card__list">
        {data.map((el, id) => {
          return (
            <div
              className="card__lists"
              key={id}
              onClick={() => navToPage(el.id)}
            >
              <h2 className="note__list__title">
                <>{el.title}</>
                <br />
                <br />
                <Button
                  type="primary"
                  className="edit__btn"
                  onClick={(e) => clickEditHandler(el.id, e)}
                >
                  EDIT
                </Button>

                <Button
                  danger
                  type="primary"
                  className="delete__btn"
                  onClick={(e) => {
                    e.stopPropagation(), deleteClickHandler(e);
                  }}
                >
                  DELETE
                </Button>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NoteList;
