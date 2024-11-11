const students = [
  { name: "Alice", cohort: "Info", mark: 15 },
  { name: "Amy", cohort: "Info", mark: "ABJ" },
  { name: "Bob", cohort: "Info", mark: 8 },
  { name: "Charlie", cohort: "DDD", mark: 18 },
  { name: "David", cohort: "Info", mark: 12 },
  { name: "Eve", cohort: "DDI", mark: 0 },
  { name: "Frank", cohort: "Info", mark: 14 },
  { name: "Grace", cohort: "DDD", mark: 19 },
  { name: "Hank", cohort: "DDI", mark: 7 },
  { name: "Ivy", cohort: "Info", mark: 16 },
  { name: "Jack", cohort: "DDD", mark: 20 },
  { name: "Kara", cohort: "Info", mark: 5 },
  { name: "Leo", cohort: "Info", mark: 11 },
  { name: "Mia", cohort: "Info", mark: 17 },
  { name: "Nina", cohort: "DDD", mark: 6 },
  { name: "Oscar", cohort: "Info", mark: 13 },
  { name: "Paul", cohort: "DDI", mark: 9 },
  { name: "Quinn", cohort: "DDD", mark: 10 },
  { name: "Rita", cohort: "Info", mark: 11 },
  { name: "Sam", cohort: "DDI", mark: 12 },
  { name: "Tina", cohort: "Info", mark: 15 },
  { name: "Uma", cohort: "DDI", mark: 14 },
  { name: "Zane", cohort: "Info", mark: 9 },
  { name: "Brian", cohort: "DDD", mark: "ABJ" },
  { name: "Derek", cohort: "Info", mark: "ABJ" },
  { name: "Victor", cohort: "DDD", mark: 13 },
  { name: "Wendy", cohort: "Info", mark: 10 },
  { name: "Xander", cohort: "DDI", mark: 11 },
  { name: "Yara", cohort: "DDD", mark: 12 },
];

const groupedByCohort = Object.groupBy(students, ({ cohort }) => cohort);

// Print Object.entries(groupedByCohort) to see the result
console.log(Object.entries(groupedByCohort));

// Test if Object.entries(groupedByCohort) is an array
console.log(Array.isArray(Object.entries(groupedByCohort)));

// For each of Object.entries(groupedByCohort) to see the result with the key=cohort and value=tab of students
Object.entries(groupedByCohort).forEach(([cohort, students]) => {
  console.log(cohort, students);
});

const cohortData = Object.entries(groupedByCohort).map(([cohort, students]) => {
  // Filter out students with mark "ABJ"
  const presentStudents = students.filter(student => student.mark !== "ABJ");

  // Calculate average mark
  const totalMarks = presentStudents.reduce((sum, student) => sum + student.mark, 0);
  const averageMark = (totalMarks / presentStudents.length).toFixed(2);

  // Find best mark with max
  const bestMark = Math.max(...presentStudents.map(student => student.mark));

  // Find lowest mark with min
  const lowestMark = Math.min(...presentStudents.map(student => student.mark));

  // Calculate standard deviation
  const standardDeviation = Math.sqrt(presentStudents.reduce((sum, student) => sum + Math.pow(student.mark - averageMark, 2), 0) / presentStudents.length);

  // Count number of students with mark < 10 (AJ)
  const countAJ = presentStudents.filter(student => student.mark < 10).length;

  // Count number of students with mark >= 10 (ADM)
  const countADM = presentStudents.filter(student => student.mark >= 10).length;

  // Count number of students with mark "ABJ"
  const countABJ = students.filter(student => student.mark === "ABJ").length;

  return { cohort, students: presentStudents, averageMark, bestMark, lowestMark, standardDeviation, countAJ, countADM, countABJ };
});

// Print the cohort data
console.log(JSON.stringify(cohortData, null, 2));

// Print the cohort name and additional information
cohortData.forEach(({ cohort, averageMark, bestMark, lowestMark, standardDeviation, countAJ, countADM, countABJ }) => {
  console.log(`Cohort: ${cohort}`);
  console.log(`Average Mark: ${averageMark}`);
  console.log(`Best Mark: ${bestMark}`);
  console.log(`Lowest Mark: ${lowestMark}`);
  console.log(`Standard Deviation: ${standardDeviation.toFixed(2)}`);
  console.log(`Number of Students (AJ): ${countAJ}`);
  console.log(`Number of Students (ADM): ${countADM}`);
  console.log(`Number of Students (ABJ): ${countABJ}`);
  console.log('---');
});