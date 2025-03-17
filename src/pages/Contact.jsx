import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className=" flex gap-20 flex-col items-center">
      <h2 className="contact-us-h2 text-6xl leading-tight">Contact Us</h2>
      <div className=" p-10 rounded-lg w-2xl shadow-lg">
        <form action={handleFormSubmit} className="flex flex-col gap-10 ">
          <input
            type="text"
            className="input border-2 text-3xl border-gray-500 h-20 w-full rounded-[8px]  "
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="input border-2 text-3xl border-gray-500 h-20 w-full rounded-[8px]"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            className="input border-2 text-3xl border-gray-500 h-65 w-full rounded-[8px]"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            name="message"
          ></textarea>

          <button type="submit" className="contact-us-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
