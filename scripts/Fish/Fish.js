const Fish = (fishObject) => {
    let fishName = fishObject.name.split(" ").join("-")
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fishObject.image}" alt="">
            </div>
            <div class="fish__name">${fishObject.name}</div>
            <button id="fish--${fishName}">Details</button>

            <dialog class="dialog--fish" id="details--${fishName}">
                <div>Length: ${fishObject.length}</div>
                <div>Species: ${fishObject.species}</div>
                <div>Food: ${fishObject.food}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Fish