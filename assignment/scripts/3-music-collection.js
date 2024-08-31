console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  const album = {
    title:title,
    artist:artist,
    yearPublished:yearPublished
  }
  console.log('created new album: ' + album.title);
  collection.push(album);
  return album;
}


console.log(addToCollection(myCollection, '1000 gecs', '100 gecs', 2019));
console.log(addToCollection(myCollection, 'brat', 'charli xcx', 2024));
console.log(addToCollection(myCollection, 'CHASER', 'femtanyl', 2023));
console.log(addToCollection(myCollection, 'Wallsocket', 'Underscores', 2023));
console.log(addToCollection(myCollection, `OIL OF EVERY PEARL'S UN-INSIDES`, 'SOPHIE', 2018));
console.log(addToCollection(myCollection, '1000 gecs and the Tree of Clues', '100 gecs', 2020));
console.log(myCollection);


function showCollection(collection){
  for(let x=0; x < collection.length; x++){
    console.log(collection[x].title + ' by ' + collection[x].artist + ', published in ' + collection[x].yearPublished);
  }
}

showCollection(myCollection);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
