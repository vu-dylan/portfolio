import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/components/ProjectContent.module.css';

/* Props:
title = title of the project
hook = project title
textPath = the path of the text description of the content relative to the public folder. This is a text file inside of the public/{projectgroup}/{projectname} directory
    Example of valid text path prop: "/projectgroup/javascript/discordqotd/discordqotd.txt"
*/

const ProjectContent = (props: { id: string, color: string, hook: string, title: string, textPath: string }) => {

    const [paragraphs, setParagraphs] = useState<string[]>([])


    useEffect(() => {
        // Import text file and split into array divided by paragraph
        const getParagraphs = () => {
            // eslint-disable-next-line
            fetch(props.textPath)
                .then(r => r.text())
                .then(text => {
                    setParagraphs(text.split("\n"))
                }).catch(e => {
                    console.error(e);
                })

        }
        getParagraphs();
        // eslint-disable-next-line
    }, [])

    function checkIfphoto(text: string) {
        // The photo refereced in the txt file is a path that's uploaded in the public folder
        // Add more file extensions if needed
        let validImageExtension = ['.jpg', '.png', '.jpeg', '.svg', '.webp']
        for (let i = 0; i < validImageExtension.length; i++) {
            if (text.includes(validImageExtension[i])) {
                return true;
            }
        }
        return false;
    }

    function CheckIfLink(text: string) {
        if (text.includes("github.com/") || text.includes("devpost.com/software") || text.includes("https://")) {
            return true;
        } else {
            return false
        }
    }

    return (
        <div className={styles["project-content"]}>
            <h4 style={{ color: `${props.color}` }}> {props.hook}: </h4>
            <h3 style={{ color: `${props.color}` }}> {props.title} </h3>
            {paragraphs.map((paragraph, index) => {
                //console.log(paragraph);
                if (checkIfphoto(paragraph)) {
                    //console.log("Hi there");
                    return <img className={styles.image} key={props.title + index.toString()} src={paragraph} alt={paragraph} />
                } else if (CheckIfLink(paragraph)) {
                    return <p key={props.title + index.toString()} className={styles.text}>
                        <a className={styles["collapsible-link"]} href={paragraph} target="_blank" rel="noreferrer">
                            {paragraph}
                        </a>
                    </p>
                } else {
                    if (paragraph[0] === "*") {
                        return <ul key={props.title + index.toString()}>
                            <li >{paragraph.slice(2)}</li>
                        </ul>
                    }
                    return <p className={styles.text} key={props.title + index.toString() }>{paragraph}</p>
                }

            }
            )}
            <br /><br />
        </div>
    )
}

export default ProjectContent