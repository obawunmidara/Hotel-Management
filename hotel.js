function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
    }

    var dropdownContainer = document.getElementById("dropdownContainer");
    if (dropdownContainer.style.display === "none" || dropdownContainer.style.display === "") {
        dropdownContainer.style.backgroundColor = "black";
        dropdownContainer.style.color = "white";
    }
    else {
        dropdownContainer.style.display = "none";
    }
}
function all(){
    var dropdownLis = document.getElementById("all-type");
    if (dropdownLis.style.display === "none" || dropdownLis.style.display === "") {
        dropdownLis.style.display = "block";
    } else {
        dropdownLis.style.display = "none";
    }

}