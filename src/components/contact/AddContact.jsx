import { Link } from "react-router-dom";
import { useContext } from "react";
import { contactcontext } from "../../context/contactcontext.js";
import Loader from "../Loader";
import { COMMENT, PURPLE } from "../../helpers/color";
const AddContact = () => {
  const { loading, contact, oncontactchange, groups, createcontact } =
    useContext(contactcontext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="p-3">
            <img
              src={require("../../assets/image/man-taking-note.png")}
              alt=""
              style={{
                height: "400px",
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "60%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: PURPLE }}
                  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={createcontact}>
                    <div className="mb-2">
                      <input
                        name="fullname"
                        type="text"
                        value={contact.fullname}
                        onChange={oncontactchange}
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        value={contact.photo}
                        onChange={oncontactchange}
                        className="form-control"
                        placeholder="آدرس تصویر"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="phonenumber"
                        type="number"
                        value={contact.phonenumber}
                        onChange={oncontactchange}
                        className="form-control"
                        required={true}
                        placeholder="شماره موبایل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={oncontactchange}
                        className="form-control"
                        required={true}
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        value={contact.job}
                        onChange={oncontactchange}
                        className="form-control"
                        required={true}
                        placeholder="شغل ..."
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={contact.group}
                        onChange={oncontactchange}
                        required={true}
                        className="form-control"
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2 mt-3">
                      <input
                        type="submit"
                        className="btn w-50 mx-2"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-1 w-25"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;
