function getContact(idnumber){
    all_items = document.getElementsByClassName("contact");
    for(i of all_items){
        i.style.left = "-100%"
        i.style.display = "none";
    }
    all_item = document.getElementsByClassName("cont");
    for(i of all_item){
        i.style.color = "gray";
    }
    document.querySelector(`#a${idnumber}`).style.color = "blue";
    item = document.getElementById(`contact${idnumber}`);
    item.style.display = "block";
    setTimeout(()=>{item.style.left = "0"}, 1)
}