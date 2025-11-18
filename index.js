import data from './rawBooks.json' with { type: 'json' };


console.log(data[5]['read?']);

const dataArray = data.filter(book=>{

    return book['# Pages']!=="zzzzzz";
})

const cleanArray = dataArray.filter(book=>{

    return book['title']!=="";
})



console.log(dataArray)
console.log(cleanArray)
cleanArray.forEach(book=>{

   console.log(book.title);
}

);
// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));



