import { useState, useEffect, useContext } from "react";
import { contactcontext } from "../../context/contactcontext";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
import { PURPLE, CURRNTLINE, COMMENT, FOREGROUND } from "../../helpers/color";
const ViewContact = () => {
  const { loading, setloading, contacts, groups } = useContext(contactcontext);
  const { contactsId } = useParams();
  const [contact, setcontact] = useState({});
  const [group, setgroup] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setloading(true);
        const allcontacts = [...contacts];
        const contactindex = allcontacts.findIndex((c) => c.id == contactsId);
        setcontact(allcontacts[contactindex]);
        const allgroups = [...groups];
        const groupindex = allgroups.findIndex(
          (e) => e.id == allcontacts[contactindex].group
        );
        setgroup(allgroups[groupindex]);
        setloading(false);
      } catch (err) {
        setloading(false);
        console.log(err.massage);
      }
    };
    fetchdata();
  }, []);
  let contactimage = contact.photo;
  if (contactimage === "none") {
    contactimage = require("../../assets/image/placeholder-image.jpg");
  } else {
    contactimage = contact.photo;
  }
  return (
    <>
      <section className="d-flex justify-content-center mt-3 mb-2">
        <h3 style={{ color: PURPLE }}>مشاهده اطلاعات مخاطب</h3>
      </section>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {Object.keys(contact).length > 0 && (
            <section className="d-flex justify-content-center">
              <div
                style={{ backgroundColor: CURRNTLINE, borderRadius: "1.5rem" }}
                className="row w-75 py-4 px-3 shadow"
              >
                <div className="col-12 col-md-4">
                  <img
                    src={contactimage}
                    alt=""
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "1rem",
                    }}
                    className="img-fluid shadow"
                  />
                </div>
                <div className="col-12 col-md-8 d-flex align-items-center mt-3 mt-md-0">
                  <ul className="m-0 w-100">
                    <li
                      style={{ backgroundColor: COMMENT, color: FOREGROUND }}
                      className="list-group-item my-1 shadow-sm"
                    >
                      نام و نام خانوادگی : <span>{contact.fullname}</span>
                    </li>
                    <li
                      style={{ backgroundColor: COMMENT, color: FOREGROUND }}
                      className="list-group-item my-1 shadow-sm"
                    >
                      شماره تلفن : <span>{contact.phonenumber}</span>
                    </li>
                    <li
                      style={{ backgroundColor: COMMENT, color: FOREGROUND }}
                      className="list-group-item my-1 shadow-sm"
                    >
                      ادرس ایمیل : <span>{contact.email}</span>
                    </li>
                    <li
                      style={{ backgroundColor: COMMENT, color: FOREGROUND }}
                      className="list-group-item my-1 shadow-sm"
                    >
                      شغل مخاطب: <span>{contact.job}</span>
                    </li>
                    <li
                      style={{ backgroundColor: COMMENT, color: FOREGROUND }}
                      className="list-group-item my-1 shadow-sm"
                    >
                      گروه مخاطب: <span>{group.name}</span>
                    </li>
                  </ul>
                </div>
                <Link
                  style={{
                    color: CURRNTLINE,
                    backgroundColor: PURPLE,
                    borderRadius: "0.5rem",
                  }}
                  to={"/contacts"}
                  className="btn w-75 mx-auto mt-3 py-2"
                >
                  {" "}
                  بازگشت به صفحه اصلی
                </Link>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};
export default ViewContact;
