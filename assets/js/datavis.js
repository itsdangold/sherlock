let bookCollectionOriginal = [],
    bookCollectionNames = [],
    bookCollectionOccurrunces = [],
    bookNamesOriginal = [],
    bookAbbrOriginal = [],
    totalWords = [],
    prev;

holmesData.forEach(element => {
    bookCollectionOriginal.push(element.collection);
    bookNamesOriginal.push(element.title);
    bookAbbrOriginal.push(element.abbrev);
    totalWords.push(element.num_words);
});

bookCollectionOriginal.sort();

(function getBookCollectionData(bookCollectionOriginal) {
    for ( var i = 0; i < bookCollectionOriginal.length; i++ ) {
        if ( bookCollectionOriginal[i] !== prev ) {
            bookCollectionNames.push(bookCollectionOriginal[i]);
            bookCollectionOccurrunces.push(1);
        } else {
            bookCollectionOccurrunces[bookCollectionOccurrunces.length-1]++;
        }
        prev = bookCollectionOriginal[i];
    }
    
    return [bookCollectionNames, bookCollectionOccurrunces];
})(bookCollectionOriginal);


var bookCollectionDonut = new Chart(document.getElementById('collection'), { 
    "type": "doughnut", 
    "data": { 
        "labels": bookCollectionNames,
        "datasets": [{ 
            "label": "Books by Collection", 
            "data": bookCollectionOccurrunces, 
            "backgroundColor": [
                "#B9CDFF", 
                "#95ABE0", 
                "#7188C0",
                "#4F69A7", 
                "#3E548A", 
                "#1E2B4A",
            ],
            "borderWidth": 0
        }] 
    },
    "options": {
        "legend": {
            "labels": {
                "fontColor": "white",
                "fontSize": 16,
                "fontFamily": 'Georgia'
            }
        },
        "animation": {animateRotate: true}
    }
});

var bookCollectionDonut = new Chart(document.getElementById('totalWords'), { 
    "type": "line", 
    "data": { 
        "labels": bookAbbrOriginal,
        "datasets": [{ 
            "label": "Number of Words per Book", 
            "data": totalWords,
            "backgroundColor": "#7188C0",
            "borderColor": "#1E2B4A",
            "borderWidth": 1,
            "lineTension": 0.1
        }] 
    },
    "options": {
        "legend": {
            "labels": {
                "fontColor": "white",
                "fontSize": 16,
                "fontFamily": 'Georgia'
            }
        }
    }
});