const fs= require('fs')
const chalk=require('chalk')
// const getNotes=function(){
//     const n='Your Notes'
//     return n;
// }
const addNotes=function(title,body){
const notes=load()
notes.push({
   
   title: title,
   body: body
})
saveNotes(notes)
}

const removeNotes=function(title){
    const notes=load()
    const keepNotes=notes.filter(function(note){
     return note.title!==title
    })
    
    if(keepNotes.length===notes.length){
             console.log(chalk.white.bgRed("No Note Found"))
    }
    else if(keepNotes.length!==notes.length){
        console.log(chalk.white.bgGreen("Note Removed"))
    }
     saveNotes(keepNotes)
     
}


const load=function() {
    try{
        const dataBuffer=fs.readFileSync('Notes.json')
      const datastring=dataBuffer.toString()
      const dataJson=JSON.parse(datastring)
      return dataJson
    }
    catch(e){
              return []
    }
      
}
const saveNotes=function(notes){
const NotesString=JSON.stringify(notes)
fs.writeFileSync('Notes.json',NotesString)
}

const listNotes=function(){
    const notes=load();
   notes.forEach((note) => {
       console.log(note.title)
   });
}

const readNotes=function(title){
    const notes=load()
      const match=notes.find((note) => note.title===title )
      if(match){
          console.log('title :'+chalk.green(match.title)+' body :'+ match.body)
      }
      else{
          console.log(chalk.red('Error Not Found'))
      }
}







module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}