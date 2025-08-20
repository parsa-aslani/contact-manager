import { PURPLE, CURRNTLINE } from "../../helpers/color";
// context
import { useContext } from "react";
import { contactcontext } from "../../context/contactcontext";
const Searchbar = ({ search, query }) => {
  const { contactquery, searchcontact } = useContext(contactcontext);
  return (
    <div className="input-group d-flex" dir="ltr">
      <button
        style={{ color: CURRNTLINE, backgroundColor: PURPLE }}
        className="btn"
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
      <input
        type="text"
        value={contactquery.text}
        onChange={searchcontact}
        placeholder="جستجو نام مخاطب ..."
        className="form-control w-75"
        dir="rtl"
      />
    </div>
  );
};
export default Searchbar;
