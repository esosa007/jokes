const fetchData = async () => {
    const results = await axios.get('https://official-joke-api.appspot.com/random_joke', {})
    
    return results.data;
};

const div = document.querySelector('div');

const answer = document.querySelector('#answer');

const next = document.querySelector('#next');

const jokeFunc = async () => {
    const joke = await fetchData();
    div.innerHTML = `<h1>${joke.setup}</h1>`;

    answer.addEventListener('click', () => {
        const div2 = document.createElement('div');
        div2.innerHTML = `<h2>${joke.punchline}</h2>`;
        div.appendChild(div2);
    });

    next.addEventListener('click', () => {
        window.location.reload();
    })
};

jokeFunc();