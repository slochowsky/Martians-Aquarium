import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */

const contentTarget = document.querySelector(".fishList")

const FishList = () => {

    const fishObjectsArray = useFish()
    // Get a reference to the `<article class="content">` element
    for (const fishObject of fishObjectsArray) {

        const fishHTMLRepresentation = Fish(fishObject)

        contentTarget.innerHTML += fishHTMLRepresentation
}}

export default FishList