import { useState, useEffect } from "react";
import { contactcontext } from "./context/contactcontext";
import "./App.css";
import {
  Navbar,
  Contacts,
  AddContact,
  ViewContact,
  EditContact,
} from "./components/index";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {
  getallcontacts,
  getallgroups,
  createcontacts,
  deletecontacts,
} from "./services/contacts-services";
import { confirmAlert } from "react-confirm-alert";
import { CURRNTLINE, FOREGROUND, PURPLE, RED } from "./helpers/color";
function App() {
  const [contacts, setcontacts] = useState([]);
  const [searchcontacts, setsearchcontacts] = useState([]);
  const [groups, setgroups] = useState([]);
  const [loading, setloading] = useState(false);
  const [contact, setcontact] = useState({
    photo: "none",
  });
  const [contactquery, setquery] = useState({ text: "" });
  useEffect(() => {
    const getdata = async () => {
      try {
        setloading(true);
        const contactsdata = await getallcontacts();
        const groupsdata = await getallgroups();
        setcontacts(contactsdata.data);
        setsearchcontacts(contactsdata.data);
        setgroups(groupsdata.data);
        setloading(false);
      } catch (err) {
        console.log(err);
        setloading(false);
      }
    };
    getdata();
  }, []);
  const navigate = useNavigate();
  const createconatactform = async (event) => {
    event.preventDefault();
    try {
      setloading((prevloading) => !prevloading);
      const { status, data } = await createcontacts(contact);
      if (status === 201) {
        const allcontacts = [...contacts, data];
        setcontacts(allcontacts);
        setsearchcontacts(allcontacts);
        setcontact({});
        setloading((prevloading) => !prevloading);
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.massage);
      setloading(false);
    }
  };
  const oncontactchange = (event) => {
    setcontact({ ...contact, [event.target.name]: event.target.value });
  };
  const confirmdelete = (contactId, contactfullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{ backgroundColor: CURRNTLINE, borderRadius: "1rem" }}
            className="p-3"
          >
            <h3 style={{ color: FOREGROUND }}>
              ایا از حذف مخاطب {contactfullname} مطمئنی ؟
            </h3>
            <p className="my-3 text-center text-white-50">
              بعد از حذف مخاطب برای همیشه حدف میشود{" "}
            </p>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  removecontact(contactId);
                  onClose();
                }}
                style={{ backgroundColor: RED, color: FOREGROUND }}
                className="btn px-4 py-2"
              >
                حذف مخاطب
              </button>
              <button
                style={{ backgroundColor: PURPLE, color: FOREGROUND }}
                className="btn px-4 py-2 mx-3"
                onClick={onClose}
              >
                انصراف
              </button>
            </div>
          </div>
        );
      },
    });
  };
  const allcontacts = [...contacts];
  const removecontact = async (contactId) => {
    try {
      const setdelettecontact = contacts.filter((e) => e.id !== contactId);
      setcontacts(setdelettecontact);
      setsearchcontacts(setdelettecontact);
      const { status } = await deletecontacts(contactId);
      if (status !== 200) {
        setcontacts(allcontacts);
        setsearchcontacts(allcontacts);
      }
    } catch (err) {
      console.log(err.massage);
      setcontacts(allcontacts);
      setsearchcontacts(allcontacts);
    }
  };
  const searchcontact = (event) => {
    setquery({ ...contactquery, text: event.target.value });
    const allcontacts = contacts.filter((contact) => {
      return contact.fullname
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setsearchcontacts(allcontacts);
  };
  return (
    <contactcontext.Provider
      value={{
        loading,
        setloading,
        contact,
        setcontacts,
        contacts,
        searchcontacts,
        groups,
        contactquery,
        oncontactchange,
        deletecontact: confirmdelete,
        createcontact: createconatactform,
        searchcontact,
        setsearchcontacts,
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/:contactsId" element={<ViewContact />} />
          <Route path="/contacts/edit/:contactsId" element={<EditContact />} />
        </Routes>
      </div>
    </contactcontext.Provider>
  );
}

export default App;
