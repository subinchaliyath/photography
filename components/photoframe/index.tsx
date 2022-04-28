import Image from "next/image";
import ring from "../../public/ring.jpg";
import styles from "../../styles/Photoframe.module.css";
const PhotoFrame = () => {
  return (
    <figure className={styles.wave}>
      <Image src={ring} alt="ring" width="230px" height="230px" />
      {/* <figcaption>caption</figcaption> */}
    </figure>
  );
};

export default PhotoFrame;
