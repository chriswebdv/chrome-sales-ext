const myLeads = [];
const inputEl = document.querySelector(".inputEl");

const inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", () => {
  myLeads.push("www.awesomelead.com");
  console.log(myLeads);
});
