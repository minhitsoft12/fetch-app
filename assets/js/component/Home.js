import React, {Component, useState, useEffect} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
// import parser from 'rss-parser';
import axios from "axios";
import Header from './Header'
import Sidebar from './Sidebar';
import PostLager from './PostLager';
import SetTime from './SetTime';


const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const URL = "https://vnexpress.net/rss/suc-khoe.rss";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState([]);
    const [key, setKey] = useState('');

    useEffect(() => {

        const fetchArticles =  () => {
            setLoading(true);
            // await axios.get(CORS_PROXY+URL)
            //     .then(function(response){
            //         console.log(response.data);
            //         setArticles(response.data);
            //         setLoading(false);
            //     });
            // await fetch(CORS_PROXY+URL, {method: 'get', headers: {'Content-Type': 'application/rss+xml'}})
            //     .then(response => response.text())
            //     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            //     .then(data => {
            //         console.log(data);
            //         const items = data.querySelectorAll("item");
            //         console.log(items)
            //     });
            feednami.load(URL,function(result){
                if(result.error){
                    console.log(result.error)
                }
                else{
                    // console.log(result.feed)
                    var entries = result
                    setArticles(entries);
                    setLoading(false);
                }
            })
        };
        const runFetchApi = () => {
            fetchArticles();
            const interval = setInterval(() => {
                fetchArticles();
            }, 60000);
            return () => clearInterval(interval);
        }
        runFetchApi();
    }, []);

    const handleTime = (time) => {
        setTime(time);
    };

    const handleSearch = (e) => {
        const convertKey = change_alias(e.key)
        setKey(convertKey.toUpperCase())
    }
    function change_alias(alias) {
        var str = alias;
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
        str = str.replace(/??|??|???|???|??/g, "i");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
        str = str.replace(/???|??|???|???|???/g, "y");
        str = str.replace(/??/g, "d");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
        str = str.replace(/??|??|???|???|??/g, "I");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
        str = str.replace(/???|??|???|???|???/g, "Y");
        str = str.replace(/??/g, "D");
        str = str.trim();
        return str;
    }


    return (
        <div className="page-wraper">
            <div className="pre-header"></div>
            <Header handleSearch={handleSearch}/>
            <div className="page-main" id="content">
                <div className="blog-page container clearfix">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-12 text-center"><Sidebar articles={articles} handleSearch={handleSearch} /></div>
                        <div className="col-lg-7 col-12 main">
                            <SetTime loading={loading} handleTime={handleTime} />
                            <PostLager articles={articles} loading={loading} time={time} search={key} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;