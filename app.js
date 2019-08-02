const validator=require('validator')
const yargs=require('yargs')
const notes=require('./Notes.js')
// const prin=notes()
yargs.version('13.2.4')


yargs.command({
    command:'Add',
    describe:'adding notes',
    builder:{
        title:{
            describe:'Notes',
            demandOption:true,
            type:'string'
        },
        body:{
             describe:'Notes Body',
             demandOption:true,
             type:'string'
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'Remove',
    describe:'Removing notes',
    builder:{
                 title:{
                     describe:'Remove Notes',
                     demandOption:true,
                     type:'string'
                 }
                
    },
    handler:function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'Read',
    builder:{
          title:{
              describe:'Read Notes',
              demandOption:true,
              type:String
          }
    },
    describe:'Reading notes',
    handler:function(argv){
       notes.readNotes(argv.title)
    }
})

yargs.command({
    command:'List',
    
    describe:'Creating List',
    handler:function(){
        notes.listNotes();
    }
})

yargs.parse();


















// console.log(process.argv)
// console.log(yargs.argv)
// console.log(prin)
// console.log(validator.isEmail('vprakas@gmail.com'))
// const chalk=require('chalk')
// console.log(chalk.red.bold('Error!'))
