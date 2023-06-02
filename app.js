document.addEventListener("DOMContentLoaded", function () {
  const growAreaInput = document.getElementById("growAreaInput");
  const growAreaSlider = document.getElementById("growAreaSlider");
  const workingHoursInput = document.getElementById("workingHoursInput");
  const workingHoursSlider = document.getElementById("workingHoursSlider");
  const workingDaysInput = document.getElementById("workingDaysInput");
  const workingDaysSlider = document.getElementById("workingDaysSlider");
  const workingWeeksInput = document.getElementById("workingWeeksInput");
  const workingWeeksSlider = document.getElementById("workingWeeksSlider");
  const wagePerHourInput = document.getElementById("wagePerHourInput");
  const wagePerHourSlider = document.getElementById("wagePerHourSlider");
  const laborResultDiv = document.getElementById("laborResult");
  const automationCostInput = document.getElementById("automationCostInput");
  const automationLifetimeInput = document.getElementById(
    "automationLifetimeInput"
  );
  const automationLifetimeSlider = document.getElementById(
    "automationLifetimeSlider"
  );
  const percentageInput = document.getElementById("percentageInput");
  const percentageSlider = document.getElementById("percentageSlider");
  const automationResultDiv = document.getElementById("automationResult");
  const robotResultDiv = document.getElementById("robotResult");
  const seasonalCostResultDiv = document.getElementById("seasonalCostResult");
  const totalCostResultDiv = document.getElementById("totalCostResult");
  const savingsLaborResultDiv = document.getElementById("savingsLaborResult");
  const savingsAutomationResultDiv = document.getElementById(
    "savingsAutomationResult"
  );

  function calculateLaborCost() {
    const growArea = parseFloat(growAreaInput.value);
    const numEmployees = Math.ceil(growArea / 400);
    const workingHours = parseFloat(workingHoursInput.value);
    const workingDays = parseFloat(workingDaysInput.value);
    const workingWeeks = parseFloat(workingWeeksInput.value);
    const wagePerHour = parseFloat(wagePerHourInput.value);

    const totalHours = numEmployees * workingHours * workingDays * workingWeeks;
    const totalCost = totalHours * wagePerHour;

    laborResultDiv.textContent = `Total Labor Cost: $${totalCost.toFixed(2)}`;
    return totalCost;
  }

  function calculateAutomationCost() {
    const automationCost = parseFloat(automationCostInput.value);
    const automationLifetime = parseFloat(automationLifetimeInput.value);
    const percentage = parseFloat(percentageInput.value);

    const finalCost = automationCost * automationLifetime * (percentage / 100);

    automationResultDiv.textContent = `Final Cost: $${finalCost.toFixed(2)}`;
    return finalCost;
  }

  function calculateCost() {
    const growArea = parseFloat(growAreaInput.value);
    const robotsNeeded = Math.ceil(growArea / 1200);
    const robotCost = robotsNeeded * 26000;
    const seasonalCost = 20000;
    const totalCost = robotCost + seasonalCost;

    robotResultDiv.textContent = `Number of Robots: ${robotsNeeded}`;
    seasonalCostResultDiv.textContent = `Seasonal Cost: $${seasonalCost}`;
    totalCostResultDiv.textContent = `Total Cost: $${totalCost}`;

    const laborCost = calculateLaborCost();
    const automationCost = calculateAutomationCost();

    const savingsLabor = laborCost - totalCost;
    savingsLaborResultDiv.textContent = `Savings on Labor: $${savingsLabor.toFixed(
      2
    )}`;

    const savingsAutomation = totalCost - automationCost;
    savingsAutomationResultDiv.textContent = `Savings on Automation: $${savingsAutomation.toFixed(
      2
    )}`;
  }

  growAreaInput.addEventListener("input", function () {
    growAreaSlider.value = this.value;
    calculateCost();
  });

  growAreaSlider.addEventListener("input", function () {
    growAreaInput.value = this.value;
    calculateCost();
  });

  workingHoursInput.addEventListener("input", function () {
    workingHoursSlider.value = this.value;
    calculateCost();
  });

  workingHoursSlider.addEventListener("input", function () {
    workingHoursInput.value = this.value;
    calculateCost();
  });

  workingDaysInput.addEventListener("input", function () {
    workingDaysSlider.value = this.value;
    calculateCost();
  });

  workingDaysSlider.addEventListener("input", function () {
    workingDaysInput.value = this.value;
    calculateCost();
  });

  workingWeeksInput.addEventListener("input", function () {
    workingWeeksSlider.value = this.value;
    calculateCost();
  });

  workingWeeksSlider.addEventListener("input", function () {
    workingWeeksInput.value = this.value;
    calculateCost();
  });

  wagePerHourInput.addEventListener("input", function () {
    wagePerHourSlider.value = this.value;
    calculateCost();
  });

  wagePerHourSlider.addEventListener("input", function () {
    wagePerHourInput.value = this.value;
    calculateCost();
  });

  automationCostInput.addEventListener("input", function () {
    calculateCost();
  });

  automationLifetimeInput.addEventListener("input", function () {
    automationLifetimeSlider.value = this.value;
    calculateCost();
  });

  automationLifetimeSlider.addEventListener("input", function () {
    automationLifetimeInput.value = this.value;
    calculateCost();
  });

  percentageInput.addEventListener("input", function () {
    percentageSlider.value = this.value;
    calculateCost();
  });

  percentageSlider.addEventListener("input", function () {
    percentageInput.value = this.value;
    calculateCost();
  });
});
