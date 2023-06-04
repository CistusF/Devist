import styles from 'modules/styles/Components/post_card.module.css';
import { post_types } from 'modules/types';
import Link from 'next/link';

export default function Project_card({ title, subTitle, postImage }: post_types) {
    return (
        <div className={styles.card} style={{
            backgroundImage: "url(" + postImage + ")"
        }}>
            <div className={styles.contents}>
                <span className={styles.title}>
                    {title}
                </span>
                <div className={styles.sub_title}>
                    {subTitle}
                </div>
            </div>
        </div>
    )
}