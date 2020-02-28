import tipComponent from "./Tip.js"
import { useTip } from "./TipDataProvider.js"
/**
 *  TipListComponent which renders individual fish objects as HTML
 */

// Import `useTip` from the data provider module


const tipListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentTarget = document.querySelector(".tipList")
    const tipObjectsArray = useTip()

    // let allTipHTML = ""
    for (const tipObject of tipObjectsArray) {
        contentTarget.innerHTML += tipComponent(tipObject)
    }
}

export default tipListComponent
    // for (const tip of tips) {
    //     const tipHTML = TipComponent(tip)
    //     allTipHTML += tipHTML
    // }

//     contentElement.innerHTML += `
//         <section class="tiplist">
//             ${
//                 tips.map(
//                     (tip) => {
//                         return tipComponent(tip)
//                     }
//                 ).join("")
//             }
//         </section>
//     `
// }