function setupQuestMenu(){
    const questMenu = document.getElementById("quest-menu");

    const questMenuContainer = document.createElement("div");
    questMenuContainer.classList = "quest-menu-container";
    const questContainer = document.createElement("div");
    questContainer.classList = "quest-container";
    const descContainer = document.createElement("div");
    descContainer.classList = "quest-desc-container";

    const titleContainer = document.createElement("div");
    titleContainer.classList = "title-container";

    const mainQuestTitle = document.createElement("h2");
    mainQuestTitle.classList = "main-quest-title";
    mainQuestTitle.innerText = "MAIN QUEST";

    const mainQuestContainer = document.createElement("div");
    mainQuestContainer.classList = "main-quest-container";

    const sideQuestTitle = document.createElement("h2");
    sideQuestTitle.classList = "side-quest-title";
    sideQuestTitle.innerText = "SIDE QUEST";
    const sideQuestContainer = document.createElement("div");
    sideQuestContainer.classList = "side-quest-container";

    const mainQuest = quests.filter(quest => quest.type === "main");
    const sideQuest = quests.filter(quest => quest.type === "side");

    mainQuest.forEach((quest) => {
        const questDiv = document.createElement("div");
        questDiv.classList = "quest";
        questDiv.innerHTML = `
            <h3>
                ${quest.desc}
            </h3>
        `;
        mainQuestContainer.appendChild(questDiv);
    });

    sideQuest.forEach((quest) => {
        const questDiv = document.createElement("div");
        questDiv.classList = "quest";
        questDiv.innerHTML = `
            <h3>
                ${quest.desc}
            </h3>
        `;
        sideQuestContainer.appendChild(questDiv);
    });
    console.log(mainQuestTitle, mainQuestContainer, sideQuestTitle, sideQuestContainer);

    questMenu.appendChild(questMenuContainer);
    questMenuContainer.appendChild(questContainer);
    questMenuContainer.appendChild(descContainer);

    titleContainer.appendChild(mainQuestTitle)
    titleContainer.appendChild(sideQuestTitle)

    questContainer.appendChild(titleContainer);
    questContainer.appendChild(mainQuestContainer);
    questContainer.appendChild(sideQuestContainer);

    mainQuestTitle.addEventListener("click", function(){
        mainQuestContainer.classList.toggle("open-main");
        sideQuestContainer.classList.toggle("open-side");
    })

    sideQuestTitle.addEventListener("click", function(){
        sideQuestContainer.classList.toggle("open-side");
        mainQuestContainer.classList.toggle("open-main");
    })
}

