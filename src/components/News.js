import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// so this is the newwmonkey and this is really ccool 
export class News extends Component {

        static defaultProps={
                country:"in",
                pageSize:8, 
                category:"general"
    }

     static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
     }
     articles=[]
    async componentDidMount()
    {
        console.log("There is the change we have created ");
        await this.updatenews();
        console.log("totota res is ",this.state.total);
    }
    constructor(){
        super(); 

        this.state={
         articles:this.articles,// here articled is the state varialble and this.articles is the variable of the class
         loading:false,
         page:1,
         total:0
        }
    }
    async updatenews(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e966808969a0481aa2cd124aa27f0c2e&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
            
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        },  100)
        );

        let data=await fetch(url);
        let parseData=await data.json();  
       await this.setState(
            { 
                total:parseData.totalResults,
                articles:parseData.articles,
                loading:false
            }
        )
    }
    
     fetchMoreData = async() => {
       
         
         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e966808969a0481aa2cd124aa27f0c2e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
         this.setState({loading:true});
             
         await new Promise((resolve) =>
         setTimeout(() => {
             resolve();
         },  100)
         );
 
         let data=await fetch(url);
         let parseData=await data.json();  
         this.setState(
             { 
                
            page:this.state.page+1,
                 total:parseData.totalResults,
                 articles:this.state.articles.concat( parseData.articles),
                 loading:false
             }
         )


      };
  render() {
    return (
        <> 
        <h1 className='text-center'>Latest Top headLines</h1>   

        <InfiniteScroll
          dataLength={this.state.articles && this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles && this.state.articles.length!==this.state.total}
          loader={<Spinner/>}
        >
            
      <div className='container my-3 text-center'>
        <div className="row">

                {   this.state.articles.map((element)=>{
                         return   <div className='col-md-4' key={element.url} >
                         <NewsItem title={element.title} description={element.description} 
                          imgUrl={element.urlToImage} 
                          newsUrl={element.url} 
                          time={element.publishedAt}  />
                           </div>
                    })}
                  
                    
        </div>
        
      </div>
        </InfiniteScroll>


          
      </>
    )
  }
}
export default News


/*

these are the button for pre and next pages of news
   <div className="d-flex justify-content-between">
                        
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.preclick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.total/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextclick}>Next &rarr;</button>
            </div> 
*/



/*
    these are the function to be called whene user click on the pre and next button to fetch the data
       preclick= async()=>{
        console.log('pre is clicked');
         await this.setState({
                page:this.state.page-1
            })
        this.updatenews();
    }
    nextclick=async ()=>{
            console.log("next is clicked")
                console.log("page before click is ",this.state.page);
               await this.setState({
                    page:this.state.page+1
                })
                
              this.updatenews();
             
           
    }

*/ 