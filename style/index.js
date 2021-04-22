function esconde(btnn) {
  const btn = document.getElementById(btnn);
  if (btn.style.display == "none" || btn.style.display == "") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
