import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Model({ onClose, isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="rounded-lg relative z-50 m-auto min-h-[260px] text-xl min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Model;
