import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../environment/environment_variables";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${baseUrl}/api/v1/message/send`,
        {
          name,
          email,
          subject,
          message,
        },
        {
          // withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Alausa, Ikeja, Lagos</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call us: +23490 123 456 78</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>joevents@yopmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16318.164359436301!2d3.3578792926420857!3d6.596545421182052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1714583526115!5m2!1sen!2sng"
              style={{border : 0, width : "100%", height : "450px"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
