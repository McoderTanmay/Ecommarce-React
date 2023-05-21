import "../css/items.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useState, useEffect, useCallback } from "react";

const SingleItem = (props) => {
  const [prod, setprod] = useState([]);
  const [prodimg, setprodimg] = useState();

  const fetchproducts = useCallback(async () => {
    const url='https://dummyjson.com/products/'+props.productID;
    const response = await fetch(url);
    const data = await response.json();
    const imgData=data.images;
    setprodimg(data);
    setprod(data);
  }, []);
  useEffect(() => {
    fetchproducts();
  }, [fetchproducts]);

  return (
    <>
      <div className="card SingleCard mt-4" style={{ MaxWidth: 540 }}>
        <div className="row g-0 cardRes">
          <div className="col-md-4 sliders">
            {/* swiperJS */}

            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
                <SwiperSlide><img src="" alt="" /></SwiperSlide>
                <SwiperSlide><img src="" alt="" /></SwiperSlide>
                <SwiperSlide><img src="" alt="" /></SwiperSlide>
                
            </Swiper>

            {/* <img src={watch} className="img-fluid rounded-start" alt="..." /> */}
          </div>
          <div className="col-md-8 pt-5 content">
            <div className="card-body">
              <p className="fw-semibold text-secondary">{prod.brand}</p>
              <h3 className="card-title mb-3">{prod.title}</h3>
              <p className="card-text">
                {prod.description}
              </p>
              <p className="fw-semibold fs-5">Discount {prod.discountPercentage}%</p>
              <p className="fw-semibold fs-5">${prod.price}</p>
              <div className="addtocart fs-5">Add</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleItem;
