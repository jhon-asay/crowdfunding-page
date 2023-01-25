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

// when a pledge is made update all classes

// make progress bar and add functionality

// menu display modal navbar

// make buttons display modals

const initProgress = () => {
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

const addSelection = (input, container, actionSection) => {
  input.checked = true;
  container.classList.add("active__border");
  actionSection.classList.remove("hidden");
};

const removeSelection = (container, actionSection) => {
  container.classList.remove("active__border");
  actionSection.classList.add("hidden");
};

const selectPledge = (containers) => {
  let prevPledge;

  containers.forEach((container) => {
    let input = container.querySelector("input");
    let actionSection = container.querySelector(".action__container");
    let pledges = container.querySelector(".radio__pledges");
    const pledgeInStock = pledges.textContent !== "0";

    container.addEventListener("click", () => {
      if (prevPledge && pledgeInStock) {
        removeSelection(prevPledge.container, prevPledge.actionSection);
      }

      if (pledgeInStock) {
        addSelection(input, container, actionSection);
        prevPledge = { container, actionSection };
      }
    });
  });
};

initProgress();

isPledgeDisabled(pledgeContainers);
isPledgeDisabled(modalPledgeContainers);

selectPledge(modalPledgeContainers);
