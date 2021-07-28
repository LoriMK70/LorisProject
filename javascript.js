const myComments = [ 
    'I made a JavaScript Array',
    'Just to show I know what I am doing',
    'If this coding thing does not work out',
    'I might become a mime',
    'We both work in boxes, right?',
    'Is there a MIME Louisville?'


];

myComments.unshift ('HI THERE!');

myComments.pop ('Is there a MIME Louisville?')

for ( let i=0; i<myComments.length; i++) {

    console.log (myComments[i]);
}

function createListItems (arr) {
    let items='';
    for ( let i=0; i<myComments.length; i++ )  {
            items += `<li>${arr[i]}</li>`
    }
    return items;
}

document.querySelector ('#test').innerHTML= 
    `<ul>
        ${createListItems(myComments) }
    </ul>
    `;
