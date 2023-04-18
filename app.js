let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("fa-moon")) {
    darkmode.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("active");
    const merasun = document.querySelector('.fa-sun')
    merasun.style.color = 'black'
  } else {
    darkmode.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("active");
  }
}