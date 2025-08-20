import { Link } from "react-router-dom";
import {
  BACKGROUND,
  CURRNTLINE,
  ORANGE,
  CYAN,
  RED,
} from "../../helpers/color.js";
const Contact = ({ contacts, deletealert }) => {
  let contactimage = "";
  if (contacts.photo === "none") {
    contactimage = require("../../assets/image/placeholder-image.jpg");
  } else {
    contactimage = contacts.photo;
  }
  return (
    <div className="col-9 col-md-7 col-lg-6 mx-auto my-2">
      <div style={{ backgroundColor: BACKGROUND }} className="card">
        <div className="row card-body d-flex flex-column flex-md-row align-items-center">
          <div className="col-10 col-md-4">
            <img
              src={contactimage}
              alt={contacts.fullname}
              className="img-fluid card-img rounded"
              style={{
                width: "250px",
                height: "170px",
                border: `2px solid ${CURRNTLINE}`,
              }}
            />
          </div>
          <div className="col-11 col-md-6 mx-auto mt-3 mt-md-0">
            <ul className="list-group bg-danger p-0">
              <li
                style={{ backgroundColor: CURRNTLINE }}
                className="list-group-item text-white py-2"
              >
                نام و نام خانوادگی :{" "}
                <span className="text-white-50">{contacts.fullname}</span>
              </li>
              <li
                style={{ backgroundColor: CURRNTLINE }}
                className="list-group-item text-white py-2"
              >
                شماره موبایل :{" "}
                <span className="text-white-50">{contacts.phonenumber}</span>
              </li>
              <li
                style={{ backgroundColor: CURRNTLINE }}
                className="list-group-item text-white py-2"
              >
                ایمیل: <span className="text-white-50">{contacts.email}</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 d-flex mt-3 mt-md-0 justify-content-center">
            <div className="d-flex flex-md-column justify-content-around w-75">
              <Link
                style={{
                  backgroundColor: ORANGE,
                  color: CURRNTLINE,
                  fontSize: "1.7rem",
                }}
                className="rounded border-0 mx-2 mx-md-0 my-0 my-md-1 px-2"
                to={`/contacts/${contacts.id}`}
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
              </Link>
              <Link
                style={{
                  backgroundColor: CYAN,
                  color: CURRNTLINE,
                  fontSize: "1.7rem",
                }}
                className="rounded border-0 mx-2 mx-md-0 my-0 my-md-1 px-2"
                to={`/contacts/edit/${contacts.id}`}
              >
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </Link>
              <button
                onClick={deletealert}
                style={{
                  backgroundColor: RED,
                  color: CURRNTLINE,
                  fontSize: "1.7rem",
                }}
                className="rounded border-0 mx-2 mx-md-0 my-0 my-md-1 px-2"
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
