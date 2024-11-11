import { students } from "./studentsData.mjs";
import { transformStudentsToHtml } from "./transformStudentsToHtml.mjs";
import { renderElementsToDom } from "./renderToDom.mjs";

// Transform students data to HTML
const studentsHtml = transformStudentsToHtml(students);

// Get the container element (assuming there's an element with id 'studentsContainer' in your HTML)
const container = document.getElementById('studentsContainer');

// Render the HTML to the DOM
renderElementsToDom(studentsHtml, container);
