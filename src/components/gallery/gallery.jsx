import "./gallery.css";

import photo1 from "../../img/myphoto/photo1.jpg";
import photo2 from "../../img/myphoto/photo2.jpg";
import photo3 from "../../img/myphoto/photo3.jpg";
import photo4 from "../../img/myphoto/photo4.jpg";

const Gallery = ( )=>{
    
    return(
        <div>
            <div className="gallery__wrap">
                <a href="https://drive.google.com/file/d/1BOfIQPDl4euiOQbrG0MsM2Rb6vTeWnWy/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={photo1} alt="photo_1" className="gallery__img"/></a>
				<a href="https://drive.google.com/file/d/1kVRkNP7901noXJqxGSFD-pKREu3Uosop/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={photo2} alt="photo_2" className="gallery__img"/></a>
                <a href="https://drive.google.com/file/d/1QI_lkdLDTpBamxCTB6kmu4eY4Kg-7VSd/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={photo3} alt="photo_3" className="gallery__img"/></a>
                <a href="https://drive.google.com/file/d/1bCcMp8KF7RFhgbmpPUphMl_Kez6mWf-P/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={photo4} alt="photo_4" className="gallery__img"/></a>
				
				
				
			</div>
        </div>
    )
}

export default Gallery;