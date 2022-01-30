const response=await fetch('./content.json');
if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
    response.status);
} else {
    const content=await response.json();
    for(let i=0; i<content.entries.length; i++){
        jsonToHtml(content.entries[i]);
    }
}

function jsonToHtml(entry){
    const div=document.createElement("div");
    const title=document.createElement("h2");
    title.innerHTML=entry.title;
    const date=document.createElement("h3");
    date.innerHTML=entry.date;
    const paragraph=document.createElement("p");
    paragraph.innerHTML=entry.content;
    div.classList.add("entry");
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(paragraph);
    // div.appendChild(document.createElement("hr"));
    document.getElementById("content").appendChild(div);
    console.log(entry);
}