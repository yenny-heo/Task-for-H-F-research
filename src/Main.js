import React from 'react';
import './Main.css'

class Main extends React.Component {
    state = {
        news: [
            {
                img: "./img1.jpg",
                title: "Hello??",
                link: "/"
            },
            {
                img: "./img1.jpg",
                title: "Hello??",
                link: "/"
            },
            {
                img: "./img1.jpg",
                title: "Hello??",
                link: "/"
            },
            {
                img: "./img1.jpg",
                title: "Hello??",
                link: "/"
            }
        ]
    }
    render() {
        return (
            <div>
                <img className="MainImg" src="./main.png"></img>
                <h2 className="Title1">LATEST NEWS</h2>
                <div className="NewsContainer">
                    <News news={this.state.news}></News>
                </div>
            </div>);
    }
}

class News extends React.Component {
    render() {
        return (
            this.props.news.map((news, i) => {
                return (
                <div className="NewsContainer2" key={i}>
                    <img className="NewsImg" src={news.img}></img>
                    <a className="NewsTitle" href={news.link}>{news.title}</a>
                    <a className="NewsBtn" href={news.link}>Read More ...</a>
                </div>);
            })
        );
    }
}

export default Main;