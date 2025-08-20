import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { contactcontext } from "../../context/contactcontext";
import Loader from "../Loader";
import { COMMENT, PURPLE } from "../../helpers/color";
import {
  getcontact,
  getallgroups,
  editcontacts,
} from "../../services/contacts-services";
const EditContact = () => {
  const {
    loading,
    setloading,
    groups,
    setgroups,
    contacts,
    setcontacts,
    setsearchcontacts,
  } = useContext(contactcontext);
  const { contactsId } = useParams();
  const navigate = useNavigate();
  const [contact, setcontact] = useState({});
  useEffect(() => {
    const getdata = async () => {
      try {
        setloading(true);
        const contactsdata = await getcontact(contactsId);
        const groupsdata = await getallgroups();
        setcontact(contactsdata.data);
        setgroups(groupsdata.data);
        setloading(false);
      } catch (err) {
        console.log(err);
        setloading(false);
      }
    };
    getdata();
  }, []);
  const setContactInfo = (event) => {
    setcontact({ ...contact, [event.target.name]: event.target.value });
  };
  const submitform = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const { data, status } = await editcontacts(contactsId, contact);
      if (status === 200) {
        const allcontacts = [...contacts];
        const contactindex = allcontacts.findIndex((c) => c.id == contactsId);
        allcontacts[contactindex] = { ...data };
        setcontacts(allcontacts);
        setsearchcontacts(allcontacts);
        navigate("/contacts");
      }
      setloading(false);
    } catch (err) {
      console.log(err.massage);
      setloading(false);
    }
  };
  let contactimage = contact.photo;
  if (contactimage === "none") {
    contactimage = require("../../assets/image/placeholder-image.jpg");
  } else {
    contactimage = contact.photo;
  }
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
                    ویرایش مخاطب
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-7">
                  <form onSubmit={submitform}>
                    <div className="d-flex flex-column flex-lg-row w-100 justify-content-between">
                      <div className="w-100">
                        <div className="mb-2">
                          <input
                            name="fullname"
                            type="text"
                            value={contact.fullname}
                            onChange={setContactInfo}
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
                            onChange={setContactInfo}
                            className="form-control"
                            placeholder="آدرس تصویر"
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            name="phonenumber"
                            type="number"
                            value={contact.phonenumber}
                            onChange={setContactInfo}
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
                            onChange={setContactInfo}
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
                            onChange={setContactInfo}
                            className="form-control"
                            required={true}
                            placeholder="شغل ..."
                          />
                        </div>
                        <div className="mb-2">
                          <select
                            name="group"
                            value={contact.group}
                            onChange={setContactInfo}
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
                      </div>
                      <div className="mt-3 mt-md-0 mx-0 mx-md-3">
                        <img
                          src={contactimage}
                          alt=""
                          style={{ width: "270px", height: "270px" }}
                        />
                      </div>
                    </div>
                    <div className="mx-2 mt-3">
                      <input
                        type="submit"
                        className="btn w-50 mx-2"
                        style={{ backgroundColor: PURPLE }}
                        value="ویرایش مخاطب"
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

export default EditContact;
