function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  const names = ["Charlie", "Ali", "Samip"];
  const event = "birthday";
  const messages = writeCards(names, event);
  console.log(messages);
  
  countDown(5); // replace 5 with any other number as needed
  