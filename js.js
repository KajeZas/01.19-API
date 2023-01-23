fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=LryYjg5vMt60tY0E51618Og8HoMZDqH3')
    .then((data)=>{
        return data.json();
    })
    .then((objectData)=>{
        console.log(objectData.results[0].title);
        let tableData="";
        objectData.map((values)=>{
            tableData=`<p>${}</p>`;
        })
        document.getElementById("antraste")
    })