import { deleteDoc, doc } from "firebase/firestore";
import { BsPersonCircle } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { db } from "../config/firebase";
import AddandUpdate from "./AddandUpdate";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

function Contact({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclose();
  const deleteitnoww = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="my-10 p-3 flex items-center justify-between bg-yellow rounded-lg shadow-md"
      >
        <div className="flex items-center gap-2">
          <BsPersonCircle className="text-orange text-4xl" />
          <div className="text-gray">
            <h2 className="text-3xl font-semibold capitalize">
              {contact.name}
            </h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className=" flex gap-4 text-gray">
          <FaEdit className="h-5 w-5 hover:text-blue-600 cursor-pointer transition-colors duration-200" onClick={()=> onOpen()} />
          <FaTrash
            onClick={() => deleteitnoww(contact.id)}
            className="h-5 w-5 hover:text-red-600 cursor-pointer transition-colors duration-200"
          />
        </div>
      </div>
      <AddandUpdate contact={contact} isUpdate={true} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Contact;
