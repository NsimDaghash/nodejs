
const fs = require('fs')

 fs.writeFileSync('notes.txt', 'My first nodeJs program !.')

 //const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('notes.txt', 'notes_copy.txt', (err) => {
  if (err) throw err;
});

fs.rename('notes_copy.txt', 'notes2.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});

fs.readdir(__dirname, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        console.log(file);
      })
    }
  })
/*
  /// append file:
  fs.appendFileSync('notes.txt', ' , and this is the update ') 
*/
