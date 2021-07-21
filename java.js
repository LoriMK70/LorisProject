const myComments = [ 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit '


];

for ( let i=0; i<myComments.length; i++) {

    console.log (myComments[i]);
}

function createListItems (myComments) {
    let items='myComments';
    for ( let i=0;<i =myComments.length; i++ ) {
            items += `<li>${arr[i]}</li>`
    }
    return items;
}

document.querySelector ('main').innerHTML= 
    `<ul>
        ${createListItems(myComments) }
    </ul>
    `;
