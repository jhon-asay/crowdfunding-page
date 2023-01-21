"use strict";

const btns = document.querySelectorAll(".btn");
const pledgeContainers = document.querySelectorAll(".pledge__container");
const funds = document.querySelector(".funds");
const backers = document.querySelector(".backers");
const deadline = document.querySelector(".deadline");
const bambooPledges = document.querySelector(".bamboo__pledges");
const blackPledges = document.querySelector(".black__pledges");
const mahoganyPledges = document.querySelector(".mahogany__pledges");

const Product = {
  currentFunds: 89914,
  currentBackers: 5007,
  currentDeadline: 56,
};

const Pledges = {
  pledge1: 101,
  pledge2: 64,
  pledge3: 0,
};

// when a pledge is made update all classes

// make progress bar and add functionality

// menu display navbar

// pledge cards display modals

const linkElements = () => {
  funds.textContent = `$${Product.currentFunds}`;
  backers.textContent = `${Product.currentBackers}`;
  deadline.textContent = `${Product.currentDeadline}`;

  bambooPledges.textContent = `${Pledges.pledge1}`;
  blackPledges.textContent = `${Pledges.pledge2}`;
  mahoganyPledges.textContent = `${Pledges.pledge3}`;
};

// const isPledgeDisabled = (elements) => {
//   elements.forEach((element, index) => {
//     let key = "pledge" + (index + 1);
//     element.setAttribute("data-key", key);
//     let dataKey = element.getAttribute("data-key");

//     for (let key in Pledges) {
//       if (dataKey === key && Pledges[key] === 0) {
//         element.classList.add("u-card-disable");
//       }
//     }

//     if (element.classList.contains("u-card-disable")) {
//       let button = element.querySelector("button");
//       button.innerText = "Out of Stock";
//     }
//   });
// };

const disablePledge = (element) => {
  element.classList.toggle("u-card-disable", true);
};

const updateButtonText = (element) => {
  let button = element.querySelector("button");
  button.textContent = "Out of Stock";
};

const isPledgeDisabled = (elements) => {
  elements.forEach((element, index) => {
    let key = `pledge${index + 1}`;

    element.dataset.key = key;
    let dataKey = element.dataset.key;

    for (const [pledgeKey, pledgeValue] of Object.entries(Pledges)) {
      if (dataKey === pledgeKey && pledgeValue === 0) {
        disablePledge(element);
        updateButtonText(element);
      }
    }
  });
};

linkElements();
isPledgeDisabled(pledgeContainers);
