import { PURPLE, FOREGROUND, ORANGE, CURRNTLINE } from "../../helpers/color.js";
import { useContext } from "react";
import { contactcontext } from "../../context/contactcontext.js";
import { Fragment } from "react/jsx-runtime";
import Contact from "./Contact.jsx";
import Loader from "../Loader.jsx";
import { Link } from "react-router-dom";
const Contacts = () => {
  const {searchcontacts,loading,deletecontact} = useContext(contactcontext);
  return (
    <Fragment>
      <section className="d-flex justify-content-center mt-3">
        <Link
          className="px-3 py-2 border-0 rounded"
          style={{
            backgroundColor: PURPLE,
            color: FOREGROUND,
            textDecoration: "none",
          }}
          to={"/contacts/add"}
        >
          افزودن مخاطب <i class="fa fa-user-plus" aria-hidden="true"></i>
        </Link>
      </section>
      {loading ? (
        <Loader />
      ) : (
        <section className="row mt-4 w-100 mx-auto">
          {searchcontacts.length > 0 ? (
            searchcontacts.map((c) => (
              <Contact
                key={c.id}
                contacts={c}
                deletealert={() => {
                  deletecontact(c.id, c.fullname);
                }}
              />
            ))
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div
                style={{ backgroundColor: CURRNTLINE, borderRadius: "1rem" }}
                className="w-75 py-3"
              >
                <h3 style={{ color: ORANGE }}>مخاطبی یافت نشد</h3>
                <img
                  src={require("../../assets/image/decision-making.gif")}
                  alt="مخاطب یافت نشد"
                  className="w-25"
                />
              </div>
            </div>
          )}
        </section>
      )}
    </Fragment>
  );
};
export default Contacts;
