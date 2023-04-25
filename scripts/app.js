function generated() {
  const arr = [];
  const random = () => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    while (arr.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * 100) + 1;
    }
    arr.push(randomNum);
    console.log(arr);
    return randomNum;
  };
  const res = random();
  console.log(res);
}
generated();
