const express = require('express');
const newsRouter = express.Router();
const axios  =  require('axios');
newsRouter.get('/',async(req,res)=>{
 
 try {

   var url = `
   https://newsapi.org/v2/top-headlines?`+
   `country=in&` +
   `apiKey=23055e2fc4e542c7b1230014cc08d162`;
   const newsAPI = await axios.get(url);
  res.render('news',{articles: newsAPI.data.articles});

} catch (e) {
   if (e.response) {
      res.render('news',{articles: null});
      console.log(e)
      console.log(e.response.status)
      console.log(e.response.headers)
   }
   else if(e.request){
      res.render('news',{articles: null});
      console.log(e.request)
   }
   else{
      res.render('news',{articles: null});
      console.log('Error',e.message);
   }
 }
});

newsRouter.post('/search',async(req,res)=>{
   const search=req.body.search
   //console.log(req.body.search)
   try {
       var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=23055e2fc4e542c7b1230014cc08d162`
       const news_get =await axios.get(url)
       res.render('news',{articles:news_get.data.articles})
   } catch (error) {
       if(error.response){
           console.log(error)
       }
   }
})

newsRouter.get('/news/:category',async(req,res)=>{
   var category = req.params.category;
   try {
       var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=23055e2fc4e542c7b1230014cc08d162';

       const news_get =await axios.get(url)
       res.render('category',{articles:news_get.data.articles})

   } catch (error) {
       if(error.response){
           console.log(error)
       }
   }
})

newsRouter.get
module.exports = newsRouter;