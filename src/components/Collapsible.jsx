import { React, useEffect, useState } from 'react'

/* Props:
title = title of the project
hook = collapsible title
id = unique css id, only used for finding the collapsible in the collapsible function and has no effect on the styling
textPath = the path of the text description of the content relative to the public folder. This is a text file inside of the public/{projectgroup}/{projectname} directory
    Example of valid text path prop: "/projectgroup/javascript/discordqotd/discordqotd.txt"
*/

const Collapsible = (props) => {

    const [paragraphs, setParagraphs] = useState([])

    
    useEffect(() => {
        // Import text file and split into array divided by paragraph
        const getParagraphs = () => {
        // eslint-disable-next-line
        fetch(props.textPath)
            .then(r => r.text())
            .then(text => {
                setParagraphs(text.split("\n"))
            })

        }
        getParagraphs();
    // eslint-disable-next-line
    },[])

    // Define function to enable collapsing of collapsible on click
    function collapsible(id) {
		let collapsible = document.getElementById(id);
		collapsible.classList.toggle("collapsible-active");
		collapsible.classList.toggle("arrow-active");
		let content = collapsible.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		} 
	}

    function checkIfphoto(text) {
        // The photo refereced in the txt file is a path that's uploaded in the public folder
        // Add more file extensions if needed
        let validImageExtension = ['.jpg', '.png', '.jpeg', '.svg', '.webp']
        for (let i = 0; i < validImageExtension.length; i++) {
            if (text.includes(validImageExtension[i])) {
                return true;
            }
        }
        // Case 2: the photo is from the internet (not recommended since images can disappear)
        if (text.includes("http")) { 
            console.log("not supported yet");
            return false;
        }
        return false;
    }

    function CheckIfLink(text) {
        if (text.includes("github.com/") || text.includes("devpost.com/software") || text.includes("https://")) {
            return true;
        } else {
            return false
        }
    }

    return(
        <div>
            <button type="button" className="collapsible" id={props.id} style={{color: `${props.color}`}}onClick={() => {collapsible(`${props.id}`)}} >{props.hook}</button>
            <div className="collapsible-content">
                <h4 className="text" style={{color: `${props.color}` }}> {props.title} </h4>
                {paragraphs.map((paragraph) => {
                    //console.log(paragraph);
                    if (checkIfphoto(paragraph)) {
                        //console.log("Hi there");
                        return <img src={process.env.PUBLIC_URL + paragraph} alt={paragraph}/>
                    } else if (CheckIfLink(paragraph)) {
                        return <p className="text"><a className="collapsible-link" href={paragraph} target="_blank" rel="noreferrer">{paragraph}</a></p>
                    } else {
                        return <p className="text">{paragraph}</p>
                    }
                    
                }
                )}
                <br/><br/>
            </div>
        </div>
    )
}

export default Collapsible