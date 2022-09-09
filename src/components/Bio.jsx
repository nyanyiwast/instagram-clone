import profilePhoto from "../assets/profile.png"
const Bio = () => {

    const editForm = (
         <form className="edit-bio-form">
            <input type="text" id="" placeholder="Your name" />
            <input type="text" id="" placeholder="About you" />
            <br/>
            <button type="button" className="cancel-button">Cancel</button>
            <button type="button" className="save">Save</button>
         </form>
    )

     return(
        <section className="bio">
            <div className="profile-photo" role={"button"} title="Click to edit">
                <img src={profilePhoto} alt="profile" />
            </div>
            <div className="profile-info">
                <p className="name">Sedrick Nyanyiwa</p>
                <p className="about">Co-Founder at 4amTribe - dev</p>
                <button>Edit</button>
                {editForm}
            </div>
        </section>
     )
};
export default Bio;