import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
    state = {
        key: '',
    }


    handleChange = (e) => {
        this.setState({
            key: e.target.value
        });
    }
    searchSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state);
    }
    render() {
        return (
            <header className="container clearfix">
                <a className="logo" href="https://www.eatyourselfskinny.com/">Eat Yourself Skinny</a>
                <div className="menu-main-menu-left-container"><ul id="menu-main-menu-left" className="menu"><li className="menu-item menu-item-home"><a href="#">Home</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#">About</a>
                        <ul className="sub-menu">
                            <li className="menu-item"><a href="#">Meet Kelly</a></li>
                            <li className="menu-item"><a href="#">FAQ</a></li>
                            <li className="menu-item menu-item-has-children"><a href="#">Resources</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">How To Start a Blog</a></li>
                                    <li className="menu-item"><a href="#">Food Photography</a></li>
                                    <li className="menu-item"><a href="#">Things I Love</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Recipes</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children"><a href="#">Breakfast</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Eggs</a></li>
                                    <li className="menu-item"><a href="#">Waffles and Pancakes</a></li>
                                    <li className="menu-item"><a href="#">Oatmeal</a></li>
                                    <li className="menu-item"><a href="#">Other</a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="#">Kid Friendly</a></li>
                            <li className="menu-item menu-item-has-children"><a href="#">Lunch</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Salads</a></li>
                                    <li className="menu-item"><a href="#">Sides</a></li>
                                    <li className="menu-item"><a href="#">Soups, Stews and Chili</a></li>
                                    <li className="menu-item"><a href="#">Other</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Dinner</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Appetizers</a></li>
                                    <li className="menu-item"><a href="#">Fish and Seafood</a></li>
                                    <li className="menu-item"><a href="#">Meat and Chicken</a></li>
                                    <li className="menu-item"><a href="#">Pizza and Pasta</a></li>
                                    <li className="menu-item"><a href="#">Vegetarian</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Snacks</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Bars and Balls</a></li>
                                    <li className="menu-item"><a href="#">Dips, Spreads and Salsa</a></li>
                                    <li className="menu-item"><a href="#">Other</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Beverages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Cocktails</a></li>
                                    <li className="menu-item"><a href="#">Punch and Juice</a></li>
                                    <li className="menu-item"><a href="#">Smoothies</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Desserts</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Bars and Cookies</a></li>
                                    <li className="menu-item"><a href="#">Breads, Muffins and Scones</a></li>
                                    <li className="menu-item"><a href="#">Cupcakes and Cake</a></li>
                                    <li className="menu-item"><a href="#">Other</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul></div>
                <div className="menu-main-menu-right-container"><ul id="menu-main-menu-right" className="menu"><li className="menu-item"><a href="#">Press</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#">Contact</a>
                        <ul className="sub-menu">
                            <li className="menu-item"><a href="#">Work With Me</a></li>
                            <li className="menu-item"><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li className="blog-link menu-item current_page_parent"><a href="#" aria-current="page">Blog</a></li>
                </ul></div>
                <ul className="header-social">
                    <li className="facebook"><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li className="twitter"><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                    <li className="pinterest"><a href="#" target="_blank"><i className="fa fa-pinterest-p" /></a></li>
                    <li className="instagram"><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                </ul>
                <div id="search-box">
                    <form method="get" id="searchform" onSubmit={this.searchSubmit.bind(this)}>
                        <input type="text" placeholder="Search..." name="s" id="s" onChange={this.handleChange.bind(this)} />
                        <input type="submit" id="searchsubmit" defaultValue="Search" />
                    </form>
                </div>
            </header>
        );
    }
}

export default Header;