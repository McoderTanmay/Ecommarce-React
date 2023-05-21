import "../css/imgcard.css";
import watch from "../images/watch-01.png";

const Card = () => {
  return (
    <>
      <center>
        <div className="card mb-3 mt-4 cover">
          <div className="row g-0 ">
            <div className="col-md-4">
              <img src={watch} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body ">
                <h2 className="card-title pt-5">
                  Timeless Elegance,
                  <br /> Crafted to Perfection.
                </h2>
                <p className="card-text fw-semibold pt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate quam nesciunt repellendus. Hic exercitationem
                  accusantium officia maxime, quos, impedit quam corrupti
                  eligendi deleniti, provident expedita eum ipsa dolore.
                </p>
                <div className="shop ">
                  <a href="blank ">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};
export default Card;
