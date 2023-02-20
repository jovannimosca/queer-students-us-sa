var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var downArr = this.firstElementChild;
    var upArr = this.lastElementChild;
    console.log(downArr);
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        downArr.style.display = "block";
        upArr.style.display = "none";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        downArr.style.display = "none";
        upArr.style.display = "block";
    }
    });
}