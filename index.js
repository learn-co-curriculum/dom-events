const form = document.getElementsByTagName("form")[0]
const inputs = document.getElementsByTagName("input")
const box = document.getElementById("box")

function changeColor() {
  box.className = this.value
}

window.onload = () => {
  let arr = [...inputs]
  arr.forEach((input) => {
    input.addEventListener("click", changeColor)
  })
}
