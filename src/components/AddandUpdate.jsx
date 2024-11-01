import React from "react";
import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

function AddandUpdate({ contact, isOpen, onClose, isUpdate }) {
  const addcontact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose()
      toast.success("Contact Added Succesfully")
    } catch (error) {
      console.log(error);
    }
  };

  const updatecontact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose()
      toast.success("Contact Updated Succesfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updatecontact(values, contact.id) : addcontact(values);
            values.name = "";
            values.email = "";
            onClose();
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className=" p-3 h-12 border rounded-lg"
              ></Field>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="p-3 h-12 border rounded-lg"
              ></Field>
            </div>
            <button className="h-18 font-semibold self-center shadow-md rounded-lg bg-orange px-3 py-1.5">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddandUpdate;
