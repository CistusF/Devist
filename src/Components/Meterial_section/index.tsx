import styles from 'modules/styles/Components/meterial_section.module.css';
import { material_types } from 'modules/types';
import Link from 'next/link';

export default function Project_card({ name, date, type }: material_types) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <span className={styles.name}>
                    {name}
                </span>
                <div className={styles.date}>
                    {date}
                </div>
                <div className={styles.type}>
                    {type}
                </div>
            </div>
        </div>
    )
}