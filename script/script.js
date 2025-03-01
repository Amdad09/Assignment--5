document.getElementById('clear-history').addEventListener('click', function () {
    const historyTitle = document.getElementById('history-title');
    historyTitle.style.display = 'none';
    historyTitle.innerHTML = '';
});

const date = new Date();

const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
};
const formattedDate = date.toLocaleDateString('en-US', options);

const currentDate = document.getElementById('date');
currentDate.innerHTML = formattedDate;
currentDate.classList.add('font-bold', 'text-[22px]');


const cardButtons = document.querySelectorAll('.card-btn');
let clickCount = 0;

for (let i = 0; i < cardButtons.length; i++) {
    const button = cardButtons[i];

    button.addEventListener('click', function () {
        const cardId = button.id.replace('card-btn-', 'card-');
        const card = document.getElementById(cardId);
        console.log('CardID: ', card);

        const taskElement = document.getElementById('task');
        const taskAddedElement = document.getElementById('added-task');
        let task = Number(taskElement.innerText);
        let taskAdded = Number(taskAddedElement.innerText);

        if (task > 0) {
            console.log((taskElement.innerText = task - 1));
            console.log((taskAddedElement.innerText = taskAdded + 1));
        }

        if (card) {
            alert('Board updated Successfully');

            const cardTitle = card.querySelector('.card-title').innerText;
            console.log(cardTitle);

            const time = new Date().toLocaleTimeString();

            const historyTitle = document.getElementById('history-title');
            historyTitle.style.display = 'block';
            const p = document.createElement('p');
            p.classList.add('bg-[#f4f7ff]', 'p-3', 'mb-3', 'rounded-lg');
            p.innerText = `You have Complete ${cardTitle} at ${time}`;
            historyTitle.appendChild(p);
        }

        button.setAttribute('disabled', true);
        clickCount++;
        if (clickCount === cardButtons.length) {
            alert('Congrates!!! You have completed all the current task');
        }
    });
}

document.getElementById('theme-btn').addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document
    .getElementById('discover-today')
    .addEventListener('click', function () {
        window.location.href = './discovery.html';
    });
