import pixels1 from '../assets/pexels1.jpeg'
import pixels2 from '../assets/pexels2.jpeg'
import pixels3 from '../assets/pexels3.jpeg'
import pixels4 from '../assets/pexels4.jpeg'
import pixels5 from '../assets/pexels5.jpeg'

const Gallery = () => {
     return(
        <>
        <input type="file" name="photo" id="addPhotoInput" className="name" />
        <label htmlFor="addPhotoInput">
            <i className="add-photo-button fas fa-plus-square"></i>
        </label>
        <section className="gallery">
            <div className="item">
                <img src={pixels1} alt="" className="item-image alt" />
                <button className="delete-button">
                    Delete Photo
                </button>
            </div>

            <div className="item">
                <img src={pixels2} alt="" className="item-image alt" />
                <button className="delete-button">
                    Delete Photo
                </button>
            </div>

            <div className="item">
                <img src={pixels3} alt="" className="item-image alt" />
                <button className="delete-button">
                    Delete Photo
                </button>
            </div>

            <div className="item">
                <img src={pixels4} alt="" className="item-image alt" />
                <button className="delete-button">
                    Delete Photo
                </button>
            </div>

            <div className="item">
                <img src={pixels5} alt="" className="item-image alt" />
                <button className="delete-button">
                    Delete Photo
                </button>
            </div>
        </section>
        </>
     )
};

export default Gallery;