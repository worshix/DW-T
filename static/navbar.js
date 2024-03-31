//function to show sidebar
function showSidebar(item){
    const sidebar = document.querySelector(`.${item}`);
    sidebar.style.display = "block";
    setTimeout(()=>{
        sidebar.style.right = "0";
    },1);
}

//To hide sidebar on arrow press
function hideSidebar(item){
    const sidebar = document.querySelector(`.${item}`)
    sidebar.style.right = "-100%";
    setTimeout(()=>{
        sidebar.style.display = "none";
    },800)
}
