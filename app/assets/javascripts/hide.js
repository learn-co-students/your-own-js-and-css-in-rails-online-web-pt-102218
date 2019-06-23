function addClickToHideMe() {
    document.getElementsByTagName("a")[0].addEventListener("click", e => {
        e.srcElement.remove()
    })
}
$(addClickToHideMe())