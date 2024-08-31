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
  for(const album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);


function findByArtist(collection, artist){
  let result = [];
  for(const album of collection){
    if(album.artist === artist) result.push(album);
  }
  return result;
}

console.log(findByArtist(myCollection, '100 gecs'));


function search(collection, searchCriteria){
  let result = [];

  if(arguments.length < 2){
    return collection;
  }

  if(!('artist' in searchCriteria) || !('yearPublished' in searchCriteria)){
    return collection;
  }

  if(searchCriteria.artist === '' || searchCriteria.yearPublished === ''){
    return collection;
  }

  for(album of collection){
    if(album.artist === searchCriteria.artist && album.yearPublished === searchCriteria.yearPublished){
      result.push(album);
    } 
  }

  return result;

}

console.log('case: no searchCritera');
console.log(search(myCollection));
console.log('case: empty search criteria');
console.log(search(myCollection, {}));
console.log('case: empty artist');
console.log(search(myCollection, {artist: '', yearPublished: 2022}));
console.log('case: unfound search critera');
console.log(search(myCollection, {artist: 'laura les', yearPublished: 2022}));
console.log('case: found search criteria');
console.log(search(myCollection, {artist: 'charli xcx', yearPublished: 2024}));





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
