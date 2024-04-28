//your code here!
let infiList = document.querySelector("#infi-list");
// console.log(infiList);
let count = 11;
infiList.onscroll = function (e) {
  infiList.innerHTML += `
  <li>Item ${count}</li>
  <li>Item ${count + 1}</li>
  `;
  count += 2;
  // console.log("element added", e);
};
