import React, { useState } from 'react';
import getPhotoUrl from 'get-photo-url';
import defaultProfilePhoto from "../assets/profile.png"
import { db } from './dexie';

const Bio = () => {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)

    const [userDetails, setUserDetails] = useState({
        username: "set your new unique username",
        about: "set a bio to help your connections know what you do."
    })

    const [profilePhoto, setProfilePhoto] = useState(defaultProfilePhoto)


    const updateUserInputData = async(e) => {
        e = e || window.event
        e.preventDefault()

        const objectData = {
            username: `@${e.target.usernameValue.value}`,
            about: e.target.aboutValue.value
        }

        setUserDetails({objectData})
        //store in local index db
        await db.bio.put({objectData}, 'info')
        alert('SUCCESS! \n\n Profile Updated.')
        //close the edit form     
        setEditFormIsOpen(false)
    }

    const updateUserProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
    }

    const editProfileButton = (
        <button onClick={()=> setEditFormIsOpen(true)}>Edit Profile</button>
    )

    const editForm = (
         <form className="edit-bio-form" onSubmit={(e)=> updateUserInputData(e)}>
            <input type="text" id="" name="usernameValue" placeholder="Your name" />
            <input type="text" id="" name="aboutValue" placeholder="About you" />
            <br/>
            <button type="button" className="cancel-button"
            onClick={()=> setEditFormIsOpen(false)}
            >Cancel</button>
            <button type="submit" className="save">Save</button>
         </form>
    )

     return(
        <section className="bio">
            <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
            <label htmlFor="profilePhotoInput"
            onClick={updateUserProfilePhoto}
            >
                <div className="profile-photo" role={"button"} title="Click to edit profile photo">
                <img src={profilePhoto} alt="profile" />
            </div>
            </label>
           
            <div className="profile-info">
                <p className="name">{userDetails.username}</p>
                <p className="about">{userDetails.about}</p>
                {editFormIsOpen ? editForm : editProfileButton}
            </div>
        </section>
     )
};
export default Bio;