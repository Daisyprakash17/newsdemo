import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,time}=this.props;
    if(!imgUrl)
    { // we are setting the temp img if img url is not given
      imgUrl="https://images.hindustantimes.com/img/2022/07/08/1600x900/1fdb9d4e-fed1-11ec-8171-8e816335ea07_1657296440278.jpg";
    }
    return (
      <div>
        
                <div className="card" style={{margin: "25px 0px"}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6>Published on : {new Date(time).toGMTString()}</h6>
            <a href={newsUrl} className="btn btn-primary">Read More</a>
        </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
