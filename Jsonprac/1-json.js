const fs=require('fs')
const book={
   "name":"varun",
   "planet":"earth",
   "age":25
}
const BookS=JSON.stringify(book)
fs.writeFileSync('1-JSON.json',BookS)
const dataBuffer=fs.readFileSync('1-JSON.json')

const dataString=dataBuffer.toString()
const dataObject=JSON.parse(dataString)
dataObject.name='Varun Thapliyal'
dataObject.age=24

const dataJson=JSON.stringify(dataObject)
fs.writeFileSync('1-JSON.json',dataJson)