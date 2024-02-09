import "./IRS.json"
// Function to find a chapter by its id
function findChapterById(chapters, id) {
    return chapters.find(chapter => chapter.id === id);
}



function Change(number) {

    $.getJSON("IRS.json", function (data) {
        const chapter = findChapterById(data.chapters, number);
        TitleDiv = document.getElementById("title");
        chapterDiv = document.getElementById("chapter");
        choiceDiv = document.getElementById("choices");
        choiceDiv.innerHTML = "";

        TitleDiv.innerHTML = chapter.title;
        chapterDiv.innerHTML = chapter.content;

        chapter.choices.forEach(choice => {
            if (choice.destination != 0) {
                choiceDiv.innerHTML += "<div>" + choice.text + " <a href='javascript:void(0)' onclick='Change(" + choice.destination + ")'>" + choice.destination + "</a></div>"
            } else {
                choiceDiv.innerHTML = " <a href='javascript:void(0)' onclick='Change(" + choice.destination + ")'>" + choice.text + "</a>"
            }
        });
    })
    // Fetch the JSON file

}