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

}
// CAN'T TOUCH THIS - END


// You will be writing code below this line

// Show Bart's details when the button is clicked
document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--jim").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--jim")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--frank").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--frank")
            theDialog.showModal()
        }
        )
        document.querySelector("#button--ben").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--ben")
            theDialog.showModal()
        }
        )
    document.querySelector("#button--lilly").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--lilly")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--susan").addEventListener(
        "click", 
        theClickEvent => {
            const theDialog = document.querySelector("#details--susan")
            theDialog.showModal()
        }
    )
    export default initializeDetailButtonEvents