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

  const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(cards);
  
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      i++;
    }
    return gifts;
  }
  
  let countup = 0;
  while (countup <= 10) {
    console.log(countup++);
  }
  
  for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  }
  