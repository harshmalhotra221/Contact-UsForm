import React, { useState } from "react";
import "../app.css"
import {database} from "../firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        database.contacts
        .add({
            name: name,
            email: email,
            topic: topic,
            message: message,
        })
        .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
        })
        
        .catch((error) => {
            alert(error.message);
            setLoader(false); 
        });
        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
    };

    return (
        <div className="Main-container">
            
            {/* left container */}
            <div className="left-container">
                    <p className="Heading-1" >Get Connected...</p>
                    <p className="Heading-2" >
                        If you have any issues bringing yourself or your worspace online, we difinetly have a solution for you.
                    </p>
                    <p className="left-heading" >
                        Don’t wait
                    </p>
                    <div>
                    <p className="border"></p>
                    <div className="img">
                    </div>
            
                
                </div>
                    <p className="part-1">
                        We will revert back to you within 24 Hrs.
                    </p>
                    <p className="part-2">
                        Week-off: Saturday & Sunday
                    </p>
                    <p className="border-down"></p>
                </div>
                

                {/* right container */}
                <div className="right-container" >
                    <form className="form" id="form-reactangle" onSubmit={handleSubmit}>

                        {/* Form Heading */}
                        <div className="frame" >
                            <div class="rectangle-1" id="rectangle-2">
                                <div className="deco-1">
                                <p className="heading-border"></p>
                                </div>
                                <div className="deco-2">
                                
                                </div>
                                <h1>Contact Us</h1>
                                </div>
                        </div>
                        
                        <input className="input-name"
                        placeholder="   Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        /><br/>
                        
                        <input className="input-email"
                        placeholder="   Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        /><br/>
            
                        <input className="input-topic"
                        placeholder="   Your Topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        /><br/>
            
                        <textarea className="input-message"
                        placeholder="  Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea><br/>
                        
                        <button className="button-submit" style={{background: loader ? "#ccc" : "linear-gradient(266.15deg, #6D4650 -32.81%, #027C89 114.06%)"}} 
                        type="submit">
                           <p className="button-text">Let's Talk</p>
                        </button>
                    </form>
                </div>
            </div>   
            )
        }

export default Contact