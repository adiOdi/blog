const response=await fetch('./content/example.json');
if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
    response.status);
} else {
    const content=await response.json();
    jsonToHtml(content);
}

function jsonToHtml(content){
    const div=document.createElement("div");
    const title=document.createElement("h2");
    title.innerHTML=content.title;
    const date=document.createElement("h3");
    date.innerHTML=content.date;
    const paragraph=document.createElement("p");
    paragraph.innerHTML=content.content;
    div.classList.add("entry");
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(paragraph);
    div.appendChild(document.createElement("hr"));
    document.getElementById("content").appendChild(div);
    console.log(content);
}