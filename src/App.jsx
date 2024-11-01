import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./config/firebase";
import Contact from "./components/Contact";
import AddandUpdate from "./components/AddandUpdate";
import useDisclose from "./hooks/useDisclose";
import NotFound from "./components/NotFound";

function App() {
  const [contacts, setContact] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactRef = collection(db, "contact");

        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  const filterContact = (e) => {
    let value = e.target.value;
    const contactRef = collection(db, "contact");

    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(filteredContacts);
      return filteredContacts;
    });
  };
  return (
    <div className="p-5">
      <div className="mx-auto max-w-[770px]">
        <Navbar></Navbar>
        <div className="relative flex gap-2 mb-20">
          <input
            type="text"
            className="h-10 flex-grow rounded-lg border border-white bg-transparent text-white p-2 pl-10 text-lg hover:bg-gray"
            placeholder="Search..."
            onChange={filterContact}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          <BsFillPlusCircleFill
            onClick={onOpen}
            className="cursor-pointer  text-white h-10 w-10"
          />
        </div>
        <div>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <Contact contact={contact} key={contact.id} />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <AddandUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </div>
  );
}

export default App;
