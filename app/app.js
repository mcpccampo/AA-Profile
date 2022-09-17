console.log('My Profile Page!');

window.onload = () => {
  // creating an h1 element, with id, and class - apped to html body
  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'name');
  h1.setAttribute('class', 'my-name');
  h1.innerHTML = 'Camilo A Campo';
  document.body.appendChild(h1);

  // creating a ul element with id and class
  const interestList = document.createElement('ul');
  interestList.setAttribute('id', 'details');
  interestList.setAttribute('class', 'my-details');
  document.body.appendChild(interestList);

  // add items to ul element
  const listContents = [
    '-I getup @ 06:00 Every Day',
    '-I Eat my first meal of the day @ 06:30',
    `-I Workout every day from 06:45A - 07:45A`,
    `-I Have my first cofee of the day @`,
    '-I plan my day from 08:00 - 08:20',
    '-I Work on Tickets from 08:30 - 09:30',
    '-I Answer e-mails from 09:40 - 10:15',
  ];

  listContents.forEach((task) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'details');
    li.innerText = task;
    interestList.appendChild(li);
  });

  // Add the clock element to the dom
  const timer = document.createElement('div');
  timer.setAttribute('id', 'clock');
  document.body.appendChild(timer);

  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    timer.innerText = `You know what time it is! ${hours} : ${minutes} : ${seconds}`;
  };
  setInterval(time, 1000);
};
