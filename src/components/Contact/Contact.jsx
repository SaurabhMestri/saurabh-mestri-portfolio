import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_aaz0ft9",   // Replace with your Service ID
        "template_0nf48js", // Replace with your Template ID
        form.current,
        "-fyd5g03P5D_HNuxy" // Replace with your Public Key
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("❌ Failed to send. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient clip-path-custom"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">📩 Contact Me</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className=" mt-4 text-lg">
          I’d love to hear from you! Whether it’s a project, collaboration, or
          just a friendly hello. 🚀
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg  p-8 rounded-xl shadow-xl border border-gray-700 backdrop-blur-sm">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg  border  border-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg  border  border-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg  border  border-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg  border  border-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 
              ${
                isSending
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105  shadow-lg"
              }`}
          >
            {isSending ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
