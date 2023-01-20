fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=LryYjg5vMt60tY0E51618Og8HoMZDqH3')
    .then(response => response.json())
    .then(commits => console.log(commits[0]));