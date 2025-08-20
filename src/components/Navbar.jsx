import Searchbar from "./contact/Contactserch";
import { PURPLE, BACKGROUND } from "../helpers/color";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      style={{ backgroundColor: BACKGROUND }}
      className="navbar py-3 site-navbar shadow"
    >
      <div className="container d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-12 col-md-6">
            <div className="d-flex">
              <div className="navbar-brand w-100">
                <i
                  class="fa fa-id-badge my-auto"
                  style={{ color: PURPLE }}
                  aria-hidden="true"
                ></i>
                <span className="mx-1 my-auto text-white">اپیکیشن مدیریت</span>
                <span style={{ color: PURPLE }}>مخاطبان</span>
              </div>
            </div>
          </div>
          {location.pathname === "/contacts" ? (
            <div className="col-12 col-md-6 mt-2 mt-md-0">
              <Searchbar/>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
