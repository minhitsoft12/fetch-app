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

        const fetchArticles = async () => {
            setLoading(true);
            // await axios.get(CORS_PROXY+URL)
            //     .then(function(response){
            //         console.log(response.data);
            //         setArticles(response.data);
            //         setLoading(false);
            //     });
            await fetch(CORS_PROXY+URL, {method: 'get', headers: {'Content-Type': 'application/rss+xml'}})
                .then(response => response.text())
                .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                .then(data => {
                    console.log(data);
                    const items = data.querySelectorAll("item");
                    console.log(items)
                });
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
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
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