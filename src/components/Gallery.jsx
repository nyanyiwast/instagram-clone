import getPhotoUrl from 'get-photo-url';
import { useState } from 'react'

const Gallery = () => {

    const [allPhotos, setAllPhotos] = useState([])

    const addPhoto = async () => {
         const newPhoto = {
            id: Date.now(),
            imgSrc: await getPhotoUrl('#addPhotoInput')
         }

         setAllPhotos([newPhoto, ...allPhotos])
    };
    
     return(
        <>
        <input type="file" name="photo" id="addPhotoInput" className="name" />
        <label htmlFor="addPhotoInput" onClick={addPhoto}>
            <i className="add-photo-button fas fa-plus-square"></i>
        </label>
        <section className="gallery">
            {allPhotos.map((photo)=> (
                    <div className="item">
                    <img src={photo.imgSrc} alt="" className="item-image alt" key={photo.id}/>
                        <button className="delete-button">
                            Delete Photo
                        </button>
                    </div>
            ))}
        </section>
        </>
     )
};

export default Gallery;