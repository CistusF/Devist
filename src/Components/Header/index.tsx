import styles from 'modules/styles/Components/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.bg_img} />
            <div className={styles.background} />
            <div className={styles.contents}>
                <p className={styles.title}>Hi I'm CistusF</p>
                <p className={styles.title}>Making art with code</p>
            </div>
            <div className={styles.links}>
                <Link href={"https://github.com/CistusF"}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="white" />
                        <path d="M16 2C8.265 2 2 8.265 2 16C2 22.195 6.0075 27.4275 11.5725 29.2825C12.2725 29.405 12.535 28.985 12.535 28.6175C12.535 28.285 12.5175 27.1825 12.5175 26.01C9 26.6575 8.09 25.1525 7.81 24.365C7.6525 23.9625 6.97 22.72 6.375 22.3875C5.885 22.125 5.185 21.4775 6.3575 21.46C7.46 21.4425 8.2475 22.475 8.51 22.895C9.77 25.0125 11.7825 24.4175 12.5875 24.05C12.71 23.14 13.0775 22.5275 13.48 22.1775C10.365 21.8275 7.11 20.62 7.11 15.265C7.11 13.7425 7.6525 12.4825 8.545 11.5025C8.405 11.1525 7.915 9.7175 8.685 7.7925C8.685 7.7925 9.8575 7.425 12.535 9.2275C13.655 8.9125 14.845 8.755 16.035 8.755C17.225 8.755 18.415 8.9125 19.535 9.2275C22.2125 7.4075 23.385 7.7925 23.385 7.7925C24.155 9.7175 23.665 11.1525 23.525 11.5025C24.4175 12.4825 24.96 13.725 24.96 15.265C24.96 20.6375 21.6875 21.8275 18.5725 22.1775C19.08 22.615 19.5175 23.455 19.5175 24.7675C19.5175 26.64 19.5 28.145 19.5 28.6175C19.5 28.985 19.7625 29.4225 20.4625 29.2825C23.2418 28.3443 25.6568 26.5581 27.3677 24.1753C29.0786 21.7926 29.9993 18.9334 30 16C30 8.265 23.735 2 16 2Z" fill="black" />
                    </svg>
                </Link>
                <Link href={"https://instagram.com/CistusF"}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_5_62)" />
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_5_62)" />
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_5_62)" />
                        <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white" />
                        <defs>
                            <radialGradient id="paint0_radial_5_62" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                                <stop stop-color="#B13589" />
                                <stop offset="0.79309" stop-color="#C62F94" />
                                <stop offset="1" stop-color="#8A3AC8" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_5_62" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                                <stop stop-color="#E0E8B7" />
                                <stop offset="0.444662" stop-color="#FB8A2E" />
                                <stop offset="0.71474" stop-color="#E2425C" />
                                <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_5_62" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                                <stop offset="0.156701" stop-color="#406ADC" />
                                <stop offset="0.467799" stop-color="#6A45BE" />
                                <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </Link>
                <Link href={"https://cistusf.notion.site/CistusF-3e4e4f4fa4b3446aab4b5be9f475b018?pvs=4"}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.716 29.2178L2.27664 24.9331C1.44913 23.9023 1 22.6346 1 21.3299V5.81499C1 3.86064 2.56359 2.23897 4.58071 2.10125L20.5321 1.01218C21.691 0.933062 22.8428 1.24109 23.7948 1.8847L29.3992 5.67391C30.4025 6.35219 31 7.46099 31 8.64426V26.2832C31 28.1958 29.4626 29.7793 27.4876 29.9009L9.78333 30.9907C8.20733 31.0877 6.68399 30.4237 5.716 29.2178Z" fill="white" />
                        <path d="M11.2481 13.5787V13.3756C11.2481 12.8607 11.6605 12.4337 12.192 12.3982L16.0634 12.1397L21.4171 20.0235V13.1041L20.0391 12.9204V12.824C20.0391 12.303 20.4609 11.8732 20.9991 11.8456L24.5216 11.6652V12.1721C24.5216 12.41 24.3447 12.6136 24.1022 12.6546L23.2545 12.798V24.0037L22.1906 24.3695C21.3019 24.6752 20.3124 24.348 19.8037 23.5803L14.6061 15.7372V23.223L16.2059 23.5291L16.1836 23.6775C16.1138 24.1423 15.7125 24.4939 15.227 24.5155L11.2481 24.6926C11.1956 24.1927 11.5702 23.7456 12.087 23.6913L12.6103 23.6363V13.6552L11.2481 13.5787Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6749 2.96678L4.72353 4.05585C3.76805 4.12109 3.0274 4.88925 3.0274 5.81499V21.3299C3.0274 22.1997 3.32682 23.0448 3.8785 23.7321L7.31786 28.0167C7.87394 28.7094 8.74905 29.0909 9.65441 29.0352L27.3587 27.9454C28.2661 27.8895 28.9725 27.1619 28.9725 26.2832V8.64426C28.9725 8.10059 28.6979 7.59115 28.237 7.27951L22.6325 3.49029C22.0614 3.10413 21.3703 2.91931 20.6749 2.96678ZM5.51453 6.057C5.29267 5.89274 5.39826 5.55055 5.67696 5.53056L20.7822 4.44711C21.2635 4.41259 21.7418 4.54512 22.131 4.82088L25.1617 6.96813C25.2768 7.04965 25.2228 7.22563 25.0804 7.23338L9.08393 8.10336C8.59983 8.12969 8.12199 7.98747 7.73707 7.7025L5.51453 6.057ZM8.33363 10.8307C8.33363 10.311 8.75347 9.88177 9.29033 9.85253L26.2031 8.93145C26.7263 8.90296 27.1668 9.30534 27.1668 9.81182V25.0853C27.1668 25.604 26.7484 26.0328 26.2126 26.0633L9.40694 27.0195C8.82466 27.0527 8.33363 26.6052 8.33363 26.0415V10.8307Z" fill="black" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
