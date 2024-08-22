const myLeads = [
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
];
const inputEl = document.querySelector(".inputEl");
const inputBtn = document.querySelector(".inputBtn");
const ulEl = document.querySelector(".ulEl");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
});

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
