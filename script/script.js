const cardButtons = document.querySelectorAll('.card-btn');
for (let i = 0; i < cardButtons.length; i++){
    const button = cardButtons[i];

    button.addEventListener('click', function () {
        // const buttonId = button.id;
        const cardId = button.id.replace('card-btn-', 'card-');
        const card = document.getElementById(cardId);
        console.log('CardID: ', card);
        if (card) {
            alert('Completed added in history');
            const btnDisable = card.querySelector('.card-btn');
            btnDisable.classList.add('disable');
            const cardTitle = card.querySelector('.card-title').innerText;
            console.log(cardTitle);

            const time = new Date().toLocaleTimeString();

            const historyTitle = document.getElementById('history-title');
            const p = document.createElement('p');
            p.classList.add('bg-[#f4f7ff]', 'p-3', 'mb-3', 'rounded-lg');
            p.innerText = `You have Complete ${cardTitle} at ${time}`;
            historyTitle.appendChild(p);

        }
        
    })
    
}

document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('history-title').style.display = 'none';
});