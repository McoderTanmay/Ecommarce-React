import "../css/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a class="navbar-brand pt-2" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              id="watch"
            >
              <path
                fill="#6563ff"
                d="M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
              ></path>
              <path
                fill="#b2b1ff"
                d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12Z"
              ></path>
            </svg>
            Watches
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-secondary me-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-secondary me-2" href="">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-secondary me-2">
                  Featured
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-semibold text-secondary me-2 "
                  href=""
                >
                  Recomended
                </a>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <div className="form-control search me-2 rounded-0 px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                  id="search"
                >
                  <path d="M448.3 424.7L335 311.3c20.8-26 33.3-59.1 33.3-95.1 0-84.1-68.1-152.2-152-152.2-84 0-152 68.2-152 152.2s68.1 152.2 152 152.2c36.2 0 69.4-12.7 95.5-33.8L425 448l23.3-23.3zM120.1 312.6c-25.7-25.7-39.8-59.9-39.8-96.3s14.2-70.6 39.8-96.3 59.9-40 96.2-40c36.3 0 70.5 14.2 96.2 39.9s39.8 59.9 39.8 96.3-14.2 70.6-39.8 96.3c-25.7 25.7-59.9 39.9-96.2 39.9-36.3.1-70.5-14.1-96.2-39.8z"></path>
                </svg>
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <div className="sign-in border align-middle fw-semibold rounded-0 color-green ms-2">
                sign in
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
