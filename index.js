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






let total = 0;
let audio = 0; // how many have audio
let read = 0;
const genre = [];// to store genres
const author = [];// to store authors
const diff = [];// to store difficulties
const years = [];// to store years. for random question

for (let i = 0; i< data.length; i++){// loop through data
    let x = data[i]["Date Bought"].split(" ")[2]// to get the year only
    years.push(x);// push year to years array



    if ((data[i]["read?"] == "Yes") || (data[i]["read?"] == "Yes!")){// check if read
        read += 1;// increment read count
        author.push(data[i].author);// push author to author array
        
    }
    if ((data[i]["audio?"] == "Yes") || (data[i]["audio?"] == "Yes!")){
        audio += 1;// increment audio count
    }
    genre.push(data[i].category);

    total +=1

    
}

//Question 2

let preread = (read/total)*100;// calculate percentage read
preread = preread.toFixed(2);// round to 2 decimal places
//Question 1
console.log("You read "+ preread + "% of your total books."); 
//Question 2
console.log(audio + " of the books have accompanying audiobooks.")// print audio count



//Function to calculate mode of an array
function mode(array)
{
    if(array.length == 0)
        return null;
    var genres = {};
    var maxgenre = array[0], maxCount = 1;// initialize maxgenre and maxCount
    for(var i = 0; i < array.length; i++)
    {
        var m = array[i];
        if(genres[m] == null)
            genres[m] = 1;
        else
            genres[m]++;  
        if(genres[m] > maxCount)
        {
            maxgenre = m;
            maxCount = genres[m];
        }
    }
    return maxgenre; 



    
}  






//come up with your own stat likemost popular month for example.

// 







console.log(mode(genre) + " is your most popular genre.");
console.log(mode(author) + " is your most read author."); // print most read author
console.log(mode(years) + " is the year when you buy the most books.");// print most popular year




