//your JS code here. If required.

const select = document.getElementById("colorSelect");

const btn = document.querySelectorAll("input")[0];

btn.addEventListener("click",(e)=>{
  select.remove(select.selectedIndex);
})
