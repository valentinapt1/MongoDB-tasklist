const {MongoClient} = require("mongodb")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000
const uri = "mongodb+srv://valentinapt1:2Jc0KkhZgVHULERE@atlascluster.tdmx3kf.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser: true});
app.use(express.json());

 //async function mongodbConnect(){
   // try {
        // Connect the client to the server	(optional starting in v4.7)
     //   await client.connect();
        // Send a ping to confirm a successful connection
       // await client.db("admin").command({ ping: 1 });
        //console.log("Base de datos conectado" );
      //} catch (error) {
        // Ensures that the client will close when you finish/error
        //console.log(error);
        //await client.close();
      //}
//}
//mongodbConnect();

app.get("/lista", async (req, res)=> {    
    try {
        await client.connect();
        const db = client.db("listaTareas");
        const collection = db.collection("lista");
        const document = await collection.find({}).toArray();
        res.send(document);
    } catch (error) {
     console.log(error)
    }
 })


app.get("/", (req, res) => {
    res.send("servidor encendido")
})


app.listen( PORT, () => {
    console.log(`http://localhost:${PORT}`);
});