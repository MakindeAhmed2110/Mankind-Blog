export default function handler(req, res) {

    //Get data submitted in request's body
    const body = req.body 

    //Optional logging to see the responses
    //in the command line where next.js app is running 
    console.log('body : ', body)

    //Guard clause checkes for first name and last name
    //and return early  if they are not found
    if( !body.first  || !body.last){
        //send an http bad request error code
        return res.status(400).json({ data : 'First or last name not found'})
    }

    //Found the name 
    //Sends an HTTP success code
    res.status(200).json({ data : `${body.first} ${body.last}`})
}