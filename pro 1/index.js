import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
app.use(bodyParser.json())

const port =4000;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE3NDEwLCJpYXQiOjE3MTIyMTcxMTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImEzYjczNjNiLTEyNmMtNDI2MS04Y2ZkLWRhZGE5YzEyZTg2OCIsInN1YiI6ImtpdC4yNS4yMWJjczA2MkBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImEzYjczNjNiLTEyNmMtNDI2MS04Y2ZkLWRhZGE5YzEyZTg2OCIsImNsaWVudFNlY3JldCI6Ik1zZkxST2NvcElmUmJIZVEiLCJvd25lck5hbWUiOiJWaXNobnUgUiIsIm93bmVyRW1haWwiOiJraXQuMjUuMjFiY3MwNjJAZ21haWwuY29tIiwicm9sbE5vIjoiNzExNTIxQkNTMDYyIn0.mq9YfHV2neFh9IWi-eb1ZX4h1D4KV3Nv9xaqtaNaFLA";

app.get("/fetchdata",(req,res)=>{
    axios
    .get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((response)=>{
        const ans=response.data;
        res.json(ans);
    })
    
})

app.listen(port,()=>{
    console.log(`running in port ${port}`);
})