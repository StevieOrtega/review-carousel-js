const people = [
  {
    firstName: "Susan",
    lastName: "Ortega",
    occupation: "Web Developer",
    statement:
      "I like to eat tacos and play monster hunter with my friends on the weekends.",
  },
  {
    firstName: "James",
    lastName: "Franco",
    occupation: "Data Analyst",
    statement: "Hi i like to eat cheken.",
  },
  {
    firstName: "Chris",
    lastName: "Wilde",
    occupation: "Billing Specialist",
    statement:
      "I am from Washington, the mexican food here is better than Mexico.",
  },
  {
    firstName: "Joan",
    lastName: "Kehlani",
    occupation: "Singer",
    statement: "Holaaaaaa........",
  },
];

people.forEach((people, index) => {
  // we need to make the div and then add the clasList name and then add the index as well
  // then once its made, we want to appendChild to the DOM in a specific div container
  // then we can begin to style the whole thing
  console.log("hello", `${index + 1}`);
});
