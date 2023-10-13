const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  let count = 0;
  library.forEach((element)=>{
      if(element.readingStatus)
      count++;
  })
  console.log(count);
};

// Do not change the code below

alert(numberOfBooksRead());
