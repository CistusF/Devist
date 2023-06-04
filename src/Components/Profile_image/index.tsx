import styles from 'modules/styles/Components/profile_image.module.css';
import Image from 'next/image';

export default function Profile_image() {
    return (
        <>
            <Image className={styles.image} src={'/Profile/CistusF_image.png'} width={300} height={300} alt='Profile_image' />
            <div className={styles.circle} />
        </>
    )
}
