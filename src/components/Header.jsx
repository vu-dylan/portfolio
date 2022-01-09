import {React, useEffect, useState} from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
    const [introText, setIntrotext] = useState("");
	useEffect(() => {
		// Home animation function
		function AnimateHome() {
			let intro = "Hi, I'm Dylan Vu. Welcome to my site!";
			let currHeaderText = intro[0];
			let i = 0;
			// Animate "typing"
			setTimeout(() => {
				let headerHandle = setInterval(() => {
					setIntrotext(currHeaderText);
					i++;
					currHeaderText = currHeaderText + intro[i];
					if (i >= intro.length) {
						// After animation ends, change height if the user has not scrolled yet
						setTimeout(() => {
							// Shrink header to expose content only if they haven't scrolled yet
							// Use both documentElement for chrome, and body for everything else
							if (!document.documentElement.scrollTop && !document.body.scrollTop) {
								document.getElementById("header").style.height = "85vh";
								// document.getElementById("video").style.height = "85vh";
							}
						}, 500)
						clearInterval(headerHandle);
					}
				}, 60)
			}, 600)
		}
		// Play video and animate header typing
		// React has an issue with the muted in the video tag not being set properly.
		document.addEventListener("DOMContentLoaded", () => {
			document.getElementById("video").muted = true;
		})
		document.getElementById("video").play(); // Might be necessary for chrome
		AnimateHome();
	}, []);
    return (
        <div className={styles.header} id="header">
            <div className={styles.welcome}>
                {introText}
            </div>
            <video className={styles.video} preload="auto" id="video" autoPlay loop muted playsInline>
                <source src={"/header.mp4"} type='video/mp4' />
                Video tag not supported
            </video>
        </div>
    )
}

export default Header
