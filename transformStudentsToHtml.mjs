import { calculateCohortData } from './calculateCohortData.mjs';

export const transformStudentsToHtml = (students) => {
  // Get the cohort data
  const cohortData = calculateCohortData(students);

  console.log(cohortData);

  // Initialize an empty string to hold the final HTML
  let finalHtml = '<div class="accordion" id="accordionExample">';

  // Iterate over each cohort
  cohortData.forEach(({ cohorte, students, averageMark }) => {
    // Create the HTML template for each cohort
    const template = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${cohorte}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cohorte}" aria-expanded="true" aria-controls="collapse${cohorte}">
            ${cohorte} (Average Mark: ${averageMark.toFixed(2)})
          </button>
        </h2>
        <div id="collapse${cohorte}" class="accordion-collapse collapse" aria-labelledby="heading${cohorte}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            ${students.map(student => `<strong>${student.name}</strong> ${student.mark}`).join('<br>')}
          </div>
        </div>
      </div>
    `;

    // Append the template to the final HTML
    finalHtml += template;
  });

  // Close the accordion container
  finalHtml += '</div>';

  return finalHtml;
};