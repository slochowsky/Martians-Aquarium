const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")
    
    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
            )
        }

    const allDetailButtons = document.querySelectorAll("button[id^='fish--']")
                // Show Bart's details when the button is clicked
        for (const btn of allDetailButtons) {
            btn.addEventListener(
                "click",
                theEvent => {
                    const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                    const theDialog = document.querySelector(dialogSiblingSelector)
                    theDialog.showModal()
                }
                )
            }
        }
    export default initializeDetailButtonEvents
    
    // document.querySelector("#button--jim").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--jim")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--frank").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--frank")
    //         theDialog.showModal()
    //     }
    //     )
    //     document.querySelector("#button--ben").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--ben")
    //         theDialog.showModal()
    //     }
    //     )
    // document.querySelector("#button--lilly").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--lilly")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--susan").addEventListener(
    //     "click", 
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--susan")
    //         theDialog.showModal()
    //     }
    // )