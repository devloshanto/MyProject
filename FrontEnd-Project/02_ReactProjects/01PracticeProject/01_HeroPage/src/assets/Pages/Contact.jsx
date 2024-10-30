import React from "react";
import Header from "../Components/Header";
import contactImg from "../image/Contact.svg";

const Contact = () => {
  const formHandeling = (e) => {
    e.preventDefault();
    alert("Form SUbmietd DONE@!");
  };

  return (
    <div>
      <div>
        <Header />
        <div className="contact flex items-center h-screen ">
          <div className="container mx-auto">
            <div className="contact-title w-1/2 mb-10">
              <h1 className="text-5xl mb-4 font-bold">Contact Us</h1>
              <p className="text-[1rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nulla similique nemo natus delectus facilis
                doloribus consequatur eaque officiis illum autem corporis,
                eligendi quidem, minima provident. A obcaecati pariatur
                doloremque.
              </p>
            </div>
            <div className="contact-wrapper flex items-start justify-between">
              <div className="contact-from-left w-1/2">
                <div className="formBTN mt-4 flex flex-col">
                  <div className=" btnMain flex gap-5">
                    <a
                      href="#"
                      className="bg-black  w-full  rounded-md text-white py-4 px-12 text-center font-medium"
                    >
                      Via Support Chat
                    </a>
                    <a
                      href="#"
                      className="bg-black   w-full rounded-md text-white py-4 px-12 text-center font-medium "
                    >
                      Via Call
                    </a>
                  </div>
                  <a
                    href="#"
                    className="border-2 border-black rounded-md text-black py-4 px-18  mt-5 text-center font-medium"
                  >
                    Via Email Form
                  </a>
                </div>
                <form action="" className="py-5 " onSubmit={formHandeling}>
                  <input
                    type="name"
                    placeholder="Name"
                    className="py-5 border-2 border-black w-full mb-5 p-5 rounded-md"
                  />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-5 border-2 border-black w-full mb-5 p-5 rounded-md"
                  />{" "}
                  <br />
                  <textarea
                    placeholder="Email"
                    className="py-5 border-2 border-black  w-full mb-5 p-5 rounded-md h-56"
                  />{" "}
                  <br />
                  <button className="bg-black  w-1/2  rounded-md text-white py-4 px-12 text-center font-medium">
                    Submit
                  </button>
                </form>
              </div>
              <div className="contact-form-right">
                <img src={contactImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
