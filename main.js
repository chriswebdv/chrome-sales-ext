const myLeads = [];
const inputEl = document.querySelector(".inputEl");
const inputBtn = document.querySelector(".inputBtn");
const ulEl = document.querySelector(".ulEl");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  for (let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    let li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);
  }
}
