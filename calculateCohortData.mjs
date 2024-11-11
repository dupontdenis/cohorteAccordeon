export const calculateCohortData = (students) => {
  // Group students by cohort using Object.groupBy
  const groupedByCohort = Object.groupBy(students, ({ cohorte }) => cohorte);

  // Calculate the average mark for each cohort
  const cohortData = Object.entries(groupedByCohort).map(([cohorte, students]) => {
    const totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
    const averageMark = totalMarks / students.length;
    return { cohorte, students, averageMark };
  });

  return cohortData;
};