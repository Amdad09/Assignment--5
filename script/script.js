document.getElementById('clear-history').addEventListener('click', function () {
    const historyTitle = document.getElementById('history-title');
    historyTitle.style.display = 'none';
    historyTitle.innerHTML = '';
});

function formatDate(date) {
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };

    let formatedDate = date.toLocaleDateString('en-US', options);

    let dateParts = formatedDate.split(',');
    if (dateParts.length > 1) {
         dateParts[0] = `<span class='weekday-style'>${dateParts[0]}</span>`; 
         formatedDate =
             `${dateParts[0]} ,<br> ${dateParts[1]} ${dateParts[2]}`;
    }
    // console.log(formatedDate);

    return formatedDate;
}
const date = new Date();
const formatedDate = formatDate(date);

console.log(formatedDate);

const currentDate = document.getElementById('date');
currentDate.innerHTML = formatedDate;
currentDate.classList.add('font-bold', 'text-[22px]');

const cardButtons = document.querySelectorAll('.card-btn');
let clickCount = 0;

for (let i = 0; i < cardButtons.length; i++) {
    const button = cardButtons[i];

    button.addEventListener('click', function () {
        const cardId = button.id.replace('card-btn-', 'card-');
        const card = document.getElementById(cardId);
        // console.log(card);

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
            p.innerText = `You have Completed ${cardTitle} at ${time}`;
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
    .addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './discovery.html';
    });
