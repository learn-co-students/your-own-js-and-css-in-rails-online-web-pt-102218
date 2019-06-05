// function hideWhenClicked() {
//   let element = document.getElementById('hide_this')
//   element.addEventListener('click', function {
//     console.log('this works')
//   })
// }


function hideWhenClicked() {
  this.remove()
}

let text = document.getElementById('hide_this')
text.addEventListener("click", hideWhenClicked)
