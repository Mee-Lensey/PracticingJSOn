import data from './rawBooks.json' with { type: 'json' };


console.log(data[5]['read?']);

const dataArray = data.filter(book=>{

    return book['# Pages']!=="zzzzzz";
})

const cleanArray = dataArray.filter(book=>{

    return book['title']!=="";
});




const readBooks = cleanArray.filter(book => { // book that were reads 
    return book['read?'] !== "No" && (book["Time on TBR (days)"]>36525);  // come back to this = why cant i print the books that have  less than 36525 for [Time on TBR Days]?
});

let readingtime= 0;

    readBooks.forEach(book=>{

                console.log(book["read?"])

        
                 
        console.log(book["Time on TBR (days)"]>36525)



    });


[cleanArray.filter];


//document.getElementById("demo").innerHTML = numbers.reduce(getSum,0);

function getSum(total,num) {
    
    return total+Math.round(num);
}







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



