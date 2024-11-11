const students = [
  { name: "Alice", type: "l2info", mark: 15 },
  { name: "Bob", type: "DDI", mark: 8 },
  { name: "Charlie", type: "DDD", mark: 18 },
  { name: "David", type: "l2info", mark: 12 },
  { name: "Eve", type: "DDI", mark: 0 },
];

const groupe = Object.groupBy(students, ({type}) => type);
console.log(groupe);
