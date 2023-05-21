import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Items from "./Items";
import "../css/styles.css";

const Firstprj=(props)=>{
    const [prod, setprod] = useState([]);
    const [rec, setrec] = useState([]);
    const [featur, setfeatur] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const fetchproducts = useCallback(async () => {
        setisLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=6");
        const responseForParent = await fetch("https://dummyjson.com/products?limit=18");
        const responseFeaturing = await fetch("https://dummyjson.com/products?limit=6&skip=12");
        const responseRecomended = await fetch("https://dummyjson.com/products?limit=6&skip=6");
        const data = await response.json();
        const dataRec = await responseRecomended.json();
        const dataFec = await responseFeaturing.json();
        const dataForParent = await responseForParent.json();

        const StoredData = data.products;
        const StoredData2 = dataRec.products;
        const StoredData3 = dataFec.products;
        const StoredData4 = dataForParent.products;
        setprod(StoredData);
        setrec(StoredData2);
        setfeatur(StoredData3);
        props.parentData(StoredData4);
        setisLoading(false);
      }, []);
    
      useEffect(() => {
        fetchproducts();
      }, [fetchproducts]);
       
      
    return(
    <>
      <Card></Card>
      {!isLoading && (
        <div>
          <div className="cardscover ">
          {prod.map((y) => (
            <Items
              key={y.id}
              id={y.id}
              title={y.title}
              price={y.price}
              thumbnail={y.thumbnail}
            ></Items>
          ))}
          <br />
          </div>
          
          <div className="fw-semibold fs-4 Fea">Featuring</div>
          <br />
          <div className="cardscover ">
          {featur.map((fec) => (
            <Items
              key={fec.id}
              id={fec.id}
              title={fec.title}
              price={fec.price}
              thumbnail={fec.thumbnail}
            ></Items>
          ))}
          <br />
          </div>
          <div className="fw-semibold fs-4 Fea">Recomended</div>
          <br />
          <div className="cardscover ">
          {rec.map((rec) => (
            <Items
              key={rec.id}
              id={rec.id}
              title={rec.title}
              price={rec.price}
              thumbnail={rec.thumbnail}
            ></Items>
          ))}
          </div>
        </div>
      )}
      {isLoading && <cente>Loading...</cente>}
    </>
    )
}
export default Firstprj