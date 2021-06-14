import React, { useState, useEffect, Component } from 'react';


const PostLager = ({ articles, loading, time, search }) => {
    const { start, end } = time;
    if (articles.feed && !loading) {
        let getImg = articles.feed.entries;
        let linkImg = getImg.map((art) => (art.summary.slice(art.summary.indexOf('<img src="') + 10, art.summary.lastIndexOf('</br>') - 7)));
        if (start != null && end != null) {

            const filterArticles = articles.feed.entries.filter((article) => {
                return (
                    new Date(article.pubDate).getTime() > new Date(start).getTime() &&
                    new Date(article.pubDate).getTime() < new Date(end).getTime()
                );
            });

            return filterArticles.length > 0 ? (
                <div className="post-wrap">
                    {filterArticles.map((article, index) => (
                        <div key={index} className="post-preview clearfix">
                            {/* <div data-mh="post-preview-group" className="thumbnail jpibfi_container" style={{ height: '204px' }} dangerouslySetInnerHTML={{ __html: article.content }}/> */}
                            <div data-mh="post-preview-group" className="thumbnail jpibfi_container" >
                                <a href={article.link}><span><img width={320} src={article.summary.slice(article.summary.indexOf('<img src="') + 10, article.summary.lastIndexOf('</br>') - 7)} className="attachment-thumbnail size-thumbnail wp-post-image" /></span></a>
                            </div>
                            <div data-mh="post-preview-group" className="info">
                                <p className="post-meta">{article.pubDate} <span className="sep">•</span> <a href="https://www.eatyourselfskinny.com/hot-italian-sliders/#respond">0 Comments</a></p>
                                <h2><a href={article.link} rel="bookmark" title={article.title}>{article.title}</a></h2>
                                <div className="excerpt jpibfi_container">
                                    <p>{article.contentSnippet}</p>
                                    <a className="read-more" href={article.link}>READ MORE</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                    <div className="alert-notfond">Not found new paper</div>
                );
        } else if (search.length > 0) {
            // console.log("Searching");
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
            let arr = [];

            let adaa = articles.feed.entries.map((arct) => {
                let nameCon = change_alias(arct.title);
                if (nameCon.toUpperCase().indexOf(search) > -1) {
                    arr.push(arct)
                }
            });
            return arr.length > 0 ? (
                <div className="post-wrap">
                    {arr.map((art, inx)=>(
                        <div key={inx} className="post-preview clearfix">
                        {/* <div data-mh="post-preview-group" className="thumbnail jpibfi_container" style={{ height: '204px' }} dangerouslySetInnerHTML={{ __html: article.content }}/> */}
                        <div data-mh="post-preview-group" className="thumbnail jpibfi_container" >
                            <a href={art.link}><span><img width={320} src={art.summary.slice(art.summary.indexOf('<img src="') + 10, art.summary.lastIndexOf('</br>') - 7)} className="attachment-thumbnail size-thumbnail wp-post-image" /></span></a>
                        </div>
                        <div data-mh="post-preview-group" className="info">
                            <p className="post-meta">{art.pubDate} <span className="sep">•</span> <a href="https://www.eatyourselfskinny.com/hot-italian-sliders/#respond">0 Comments</a></p>
                            <h2><a href={art.link} rel="bookmark" title={art.title}>{art.title}</a></h2>
                            <div className="excerpt jpibfi_container">
                                <p>{art.contentSnippet}</p>
                                <a className="read-more" href={art.link}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            ) : (<div className="alert-notfond">Nothing Found</div>);
        } else {
            let postAd = [];
            for(let i = 0; i < 20; i++) {
                postAd.push(articles.feed.entries[i])
            }
            return (
                <div className="post-wrap">
                    {postAd.map((article, index) => (
                        <div key={index} className="post-preview clearfix">
                            {/* <div data-mh="post-preview-group" className="thumbnail jpibfi_container" style={{ height: '204px' }} dangerouslySetInnerHTML={{ __html: article.content }}/> */}
                            <div className="thumbnail jpibfi_container" >
                                <a href={article.link}><span><img width={320} src={article.summary.slice(article.summary.indexOf('<img src="') + 10, article.summary.lastIndexOf('</br>') - 7)} className="attachment-thumbnail size-thumbnail wp-post-image" /></span></a>
                            </div>
                            <div data-mh="post-preview-group" className="info">
                                <p className="post-meta">{article.pubDate} <span className="sep">•</span> <a href="https://www.eatyourselfskinny.com/hot-italian-sliders/#respond">0 Comments</a></p>
                                <h2><a href={article.link} rel="bookmark" title="Permanent Link to Hot Italian Sliders">{article.title}</a></h2>
                                <div className="excerpt jpibfi_container">
                                    <input className="jpibfi" type="hidden" /><p>{article.contentSnippet}</p>
                                    <a className="read-more" href={article.link}>READ MORE</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    } else {
        return <div>Loading ...</div>;
    }
};

export default PostLager;