import data from './rawBooks.json' with { type: 'json' };


console.log(data[5]['read?']);

const dataArray = data.filter(book=>{

    return book['# Pages']!=="zzzzzz";
})

const cleanArray = dataArray.filter(book=>{

    return book['title']!=="";
});




const readingBooks = cleanArray.filter(book => { // book that were reads 
    return book['read?'] !== "No";
});

const read



// calculate how many days it took to read all of the books then divided them by how many books were read




//const averagepages= pageCounts.reduce(((a, b) => a + b, 0) / pageCounts.length) // making an attempt for the avg
console.log(readingBooks)
// console.log(dataArray)
// console.log(cleanArray)
// cleanArray.forEach(book=>{

//    console.log(book.title);
// }

//);
// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// 1



