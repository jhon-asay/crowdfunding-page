"use strict";

const btns = document.querySelectorAll(".btn");

const pledgeContainers = document.querySelectorAll(".pledge__container");
const modalPledgeContainers = document.querySelectorAll(
  ".modal-pledge__container"
);

const pledges = document.querySelectorAll(".pledges");
const radioPledges = document.querySelectorAll(".radio__pledges");

const pledgeInputs = document.querySelectorAll(".pledge__input");

const funds = document.querySelector(".funds");
const backers = document.querySelector(".backers");
const deadline = document.querySelector(".deadline");

const Product = {
  currentFunds: 89914,
  currentBackers: 5007,
  currentDeadline: 56,
};

const Pledges = [
  { id: 0, name: "bamboo", pledges: 101 },
  { id: 1, name: "black", pledges: 64 },
  { id: 2, name: "mahogany", pledges: 0 },
];

// make pledge radio input checked when div is clicked

// when a pledge is made update all classes

// make progress bar and add functionality

// menu display navbar

// pledge cards display modals

const linkElements = () => {
  funds.textContent = `$${Product.currentFunds}`;
  backers.textContent = `${Product.currentBackers}`;
  deadline.textContent = `${Product.currentDeadline}`;
};

const initPledges = (elements) => {
  Pledges.forEach((pledge) => {
    elements.forEach((element, index) => {
      if (pledge.id === index) {
        element.textContent = `${pledge.pledges}`;
      }
    });
  });
};

initPledges(pledges);
initPledges(radioPledges);

const disablePledge = (element) => {
  element.classList.toggle("u-card-disable", true);
};

const updateButtonText = (element) => {
  let button = element.querySelector("button");
  button.textContent = "Out of Stock";
};

const isPledgeDisabled = (elements) => {
  Pledges.forEach((pledge) => {
    elements.forEach((element, index) => {
      if (index === pledge.id && pledge.pledges === 0) {
        disablePledge(element);
        updateButtonText(element);
      }
    });
  });
};

// make pledge radio input checked when div is clicked

// make action container visible when radio is checked

const handleChange = (event) => {
  if (!event.target.checked) {
    console.log("unchecked");
    container.classList.remove("active__border");
    actionSection.classList.add("hidden");
  }
};

const selectPledge = (containers) => {
  let selected;

  containers.forEach((container) => {
    let input = container.querySelector("input");
    let actionSection = container.querySelector(".action__container");

    container.addEventListener("click", () => {
      if (selected) {
        selected.container.classList.remove("active__border");
        selected.actionSection.classList.add("hidden");
      }

      input.checked = true;
      container.classList.add("active__border");
      actionSection.classList.remove("hidden");
      selected = { container, actionSection };
    });
  });
};

linkElements();
isPledgeDisabled(pledgeContainers);
isPledgeDisabled(modalPledgeContainers);

selectPledge(modalPledgeContainers);
