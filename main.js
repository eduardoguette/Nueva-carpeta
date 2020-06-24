const checkbox = document.querySelector("#checkbox");
if (window.matchMedia("(prefers-color-sheme: dark)").matches == true) {
  checkbox.setAttribute("checked", true);
}
if(localStorage.getItem("dark")){
  // document.querySelector('.dark-mode-title').textContent = "Dark Mode"
  document.body.classList.add("is-dark-mode");
  document.querySelector('.checkbox').checked = true
}else{
  document.querySelector('.checkbox').checked = false
  // document.querySelector('.dark-mode-title').textContent = "Light Mode"
}
checkbox.addEventListener("change", function () {
  
  if(this.checked && !localStorage.getItem("dark")){
    localStorage.setItem("dark","yes")
    app.message = "Ligth Mode"
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");

  }else{
    localStorage.removeItem("dark")
    app.message = "Dark Mode"
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});


var app = new Vue({
  el: '#app',
  data: {
    message: 'Dark Mode'
  }
})