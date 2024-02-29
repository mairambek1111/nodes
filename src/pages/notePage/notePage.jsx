import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../../Context";
import "./notePage.css";
import Header from "../../components/header/header";
import parse from "html-react-parser";
function NotePage() {
  const { id } = useParams();
  const { data } = useContext(Context);
  const [product, setproduct] = useState({});

  useEffect(() => {
    console.log(id);
    console.log(data);
    const products = data.find((el) => el.id == id);
    setproduct(products);
    console.log(products);
  }, [id, data]);

  return (
    <>
      <Header />
      <div className="cards">
        <div className="card">
          <h1>{product.title}</h1>
          {product.text ? parse(product.text) : null}
          <p>{product.date}</p>
        </div>
      </div>{" "}
      :
    </>
  );
}

export default NotePage;
