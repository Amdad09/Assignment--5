const cardButtons = document.querySelectorAll('.card-btn');
for (let i = 0; i < cardButtons.length; i++){
    const button = cardButtons[i];

    button.addEventListener('click', function () {
        // const buttonId = button.id;
        const cardId = button.id.replace('card-btn-', 'card-');
        const card = document.getElementById(cardId);
        // console.log('CardID: ', card);
        const cardTitle = card.querySelector('.card-title').innerText;
        console.log(cardTitle);
        
        const time = new Date().toLocaleTimeString();

        const historyTitle = document.getElementById('history-title');
        const p = document.createElement('p');
        p.classList.add('bg-[#f4f7ff]', 'p-3','mb-3');
        p.innerText = `You have Complete ${cardTitle} at ${time}`;
        historyTitle.appendChild(p);

        

    })
    
}



// const cardButtons = document.querySelectorAll('.card-btn');
// for (let i = 0; i < cardButtons.length; i++) {
//     const button = cardButtons[i];

//     button.addEventListener('click', function () {
//         // button থেকে id বের করা
//         const buttonId = button.id;

//         // card- অংশের সাথে মিলিয়ে cardId তৈরি করা
//         const cardId = buttonId.replace('card-btn-', 'card-'); // এখানে card-btn- কে card- এ পরিবর্তন করছি

//         const card = document.getElementById(cardId);
//         console.log('CardID: ', card);
//     });
// }
