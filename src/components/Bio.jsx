import React, { useState } from 'react';
import profilePhoto from "../assets/profile.png"

const Bio = () => {

    const userInputData = (e) => {
        e = e || window.event
        e.preventDefault()
        setUserDetails({
            username: e.target.usernameValue.value,
            about: e.target.aboutValue.value
        })
    }

    const [editFormIsOpen, setEditFormIsOpen] = useState(true)

    const [userDetails, setUserDetails] = useState({
        username: "Sedrick Nyanyiwa",
        about: "Co-Founder at 4amTribe - dev"
    })

    const editForm = (
         <form className="edit-bio-form" onSubmit={(e)=> userInputData(e)}>
            <input type="text" id="" name="usernameValue" placeholder="Your name" />
            <input type="text" id="" name="aboutValue" placeholder="About you" />
            <br/>
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="save">Save</button>
         </form>
    )

     return(
        <section className="bio">
            <div className="profile-photo" role={"button"} title="Click to edit">
                <img src={profilePhoto} alt="profile" />
            </div>
            <div className="profile-info">
                <p className="name">{userDetails.username}</p>
                <p className="about">{userDetails.about}</p>
                <button onClick={()=> setEditFormIsOpen()}>Edit Profile</button>
                {editForm}
            </div>
        </section>
     )
};
export default Bio;