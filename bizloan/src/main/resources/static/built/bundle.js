/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by wpuhl on 1/23/2017.
	 */
	/*
	const React = require('react');
	const ReactDOM = require('react-dom');
	const client = require('./client');
	*/

	/*import React from 'react';
	import ReactDOM from 'react-dom';*/

	// var request = require("request");
	//import Request from 'react-http-request';

	// var saml2 = require('saml2-js');

	// import saml2 from 'saml2-js';

	// saml2-js
	// Create identity provider
	var idp_options = {
	    sso_login_url: "https://idp.ssocircle.com/sso/UI/Login",
	    sso_logout_url: "https://idp.ssocircle.com/sso/UI/Logout"
	    // certificates: [fs.readFileSync("cert-file1.crt").toString(), fs.readFileSync("cert-file2.crt").toString()]
	};
	// var idp = new saml2.IdentityProvider(idp_options);

	// Starting point for login
	// app.get("/login", function(req, res) {
	//     sp.create_login_request_url(idp, {}, function(err, login_url, request_id) {
	//         if (err != null)
	//             return res.send(500);
	//         res.redirect(login_url);
	//     });
	// });

	// Assert endpoint for when login completes
	// app.post("/assert", function(req, res) {
	//     var options = {request_body: req.body};
	//     sp.post_assert(idp, options, function(err, saml_response) {
	//         if (err != null)
	//             return res.send(500);
	//
	//         // Save name_id and session_index for logout
	//         // Note:  In practice these should be saved in the user session, not globally.
	//         name_id = saml_response.user.name_id;
	//         session_index = saml_response.user.session_index;
	//
	//         res.send("Hello #{saml_response.user.name_id}!");
	//     });
	// });

	// auth0
	var options = { method: 'GET',
	    url: 'https://wpuhl10775.auth0.com/api/v2/connections/CONNECTION_ID',
	    headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1EWXdSVEEwTmpkQk1qTkZNRU15TTBZd05UWTBRemt5TjBRd05FSTRNMEZFUlVSRE56WkNOdyJ9.eyJpc3MiOiJodHRwczovL3dwdWhsMTA3NzUuYXV0aDAuY29tLyIsInN1YiI6Ikh5U1cwRjhtbkpwVG5KcDZvalYwZjZqU1VLN1N0SHZFQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3dwdWhsMTA3NzUuYXV0aDAuY29tL2FwaS92Mi8iLCJleHAiOjE0ODk3NTUyNjAsImlhdCI6MTQ4OTY2ODg2MCwic2NvcGUiOiIifQ.ijwZGowYfmkWrxG73QWWdiL4MHnS7BKsDEPOANVLFRuyH5cu6zKIv01h9DrLkMCxvA41ql76Uw9mxbuI1wmAgKb0yRV0JmQ1rb5lfUUj39rFwGMyyUQWlv1Fkqs05ySzA3luWzG0CiZK3mrZy8DkEc9Lgz-8b5t-x41ymQdBwhzJTs1v6J1NfraJFx3Cli7j0bx6r3iRHolr_DoO74SNhvt3yGyylO9s46xfRXd8f3-es8sCyvqVw_fRHBRGce32EGbVnSsJ9_MQ5IZK5OBr3KoK2QUAOlevlhZAMHQP_53MOoR_S4QgsgggM5ASnIxvzQFv1faTVWqwjidbFkud_A' } };

	// request(options, function (error, response, body) {
	//   if (error) throw new Error(error);
	//
	//   console.log(body);
	// });

	var Account = function Account(fname, lname, email, telephone) {
	    _classCallCheck(this, Account);

	    this.state = {
	        firstName: fname,
	        lastName: lname,
	        email: email,
	        // password: password,
	        // address: address,
	        telephone: telephone
	    };
	};

	;

	var Address = function Address(addr1, addr2, city, state, zip) {
	    _classCallCheck(this, Address);

	    this.state = {
	        addr1: addr1,
	        addr2: addr2,
	        city: city,
	        state: state,
	        zip: zip
	    };
	};

	;

	var Asset = function Asset(name, amount) {
	    _classCallCheck(this, Asset);

	    this.state = {
	        name: name,
	        amount: amount
	    };
	};

	;

	var Liability = function Liability(name, amount) {
	    _classCallCheck(this, Liability);

	    this.state = {
	        name: name,
	        amount: amount
	    };
	};

	;

	var BalanceSheet = function BalanceSheet(assets, liabilities) {
	    _classCallCheck(this, BalanceSheet);

	    this.state = {
	        assets: assets,
	        liabilities: liabilities
	    };
	};

	;

	var Business = function Business(name, value, owner, location, balanceSheet) {
	    _classCallCheck(this, Business);

	    this.state = {
	        name: name,
	        value: value,
	        owner: owner,
	        location: location,
	        selected: false,
	        balanceSheet: balanceSheet
	    };
	};

	;

	var Category = function Category(name, val, businesses, selected) {
	    _classCallCheck(this, Category);

	    // super(ClickableItem);
	    this.state = {
	        name: name,
	        value: val,
	        businesses: businesses,
	        selected: selected
	    };
	};

	;

	var User = function User(fname, lname, email, telephone) {
	    _classCallCheck(this, User);

	    this.state = {
	        firstName: fname,
	        lastName: lname,
	        email: email,
	        // password: password,
	        // address: address,
	        telephone: telephone
	    };
	};

	;

	var user = null;

	var accountCategories = [new Category("Cash", 0, [], true), new Category("Inventory", 0, [], false), new Category("Accounts Receivable", 0, [], false), new Category("Land", 0, [], false), new Category("Buildings", 0, [], false), new Category("Equipment", 0, [], false), new Category("Notes Payable", 0, [], false), new Category("Owners Equity", 0, [], false)];

	var categories = [new Category("Restaurants", 0, [new Business("Angelo's Pizzeria", 0, "user1", "Caracas", new BalanceSheet([new Asset("cash", 5000), new Asset("ovens", 1500), new Asset("cheese", 500)], [new Liability("mortgage", 10000)])), new Business("McDonald's", 1, "user2", "Valencia", new BalanceSheet([new Asset("hamburgers", 2500)], [])), new Business("Burger King", 2, "user3", "Maracaibo", new BalanceSheet([], []))], true), new Category("Financial Services", 1, [new Business("A1 Credit", 0, "user4", "Caracas", new BalanceSheet([], [])), new Business("Rocket Mortgage", 1, "user5", "Valencia", new BalanceSheet([], []))], false), new Category("Groceries", 2, [new Business("ACME", 0, "user6", "Caracas", new BalanceSheet([new Asset("apples", 1000), new Asset("bananas", 1500)], [])), new Business("SuperFresh", 1, "user7", "Maracaibo", new BalanceSheet([], [])), new Business("Trader Joe's", 2, "user8", "Maracaibo", new BalanceSheet([], []))], false), new Category("Bakeries", 3, [new Business("Dunkin Donuts", 0), new Business("Panero", 1)], false)];

	var AddCashForm = function (_React$Component) {
	    _inherits(AddCashForm, _React$Component);

	    function AddCashForm(props) {
	        _classCallCheck(this, AddCashForm);

	        var _this = _possibleConstructorReturn(this, (AddCashForm.__proto__ || Object.getPrototypeOf(AddCashForm)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(AddCashForm, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "cash-add-form" },
	                React.createElement(
	                    "form",
	                    { className: "form-inline" },
	                    React.createElement(
	                        "div",
	                        { className: "form-group" },
	                        React.createElement(
	                            "label",
	                            { className: "sr-only", "for": "email" },
	                            "Amt:"
	                        ),
	                        React.createElement("input", { type: "amount", className: "form-control", id: "amount" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "form-group" },
	                        React.createElement(
	                            "label",
	                            { className: "sr-only", "for": "pwd" },
	                            "Date:"
	                        ),
	                        React.createElement("input", { type: "date", className: "form-control", id: "date" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "form-group" },
	                        React.createElement(
	                            "label",
	                            { className: "sr-only", "for": "pwd" },
	                            "Desc:"
	                        ),
	                        React.createElement("input", { type: "text", className: "form-control", id: "desc" })
	                    ),
	                    React.createElement(
	                        "button",
	                        { type: "submit", className: "btn btn-default" },
	                        "Add"
	                    )
	                )
	            );
	        }
	    }]);

	    return AddCashForm;
	}(React.Component);

	;

	var CashForm = function (_React$Component2) {
	    _inherits(CashForm, _React$Component2);

	    function CashForm(props) {
	        _classCallCheck(this, CashForm);

	        return _possibleConstructorReturn(this, (CashForm.__proto__ || Object.getPrototypeOf(CashForm)).call(this, props));
	    }

	    _createClass(CashForm, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "cash-form" },
	                React.createElement(
	                    "h1",
	                    null,
	                    "Cash Account"
	                ),
	                React.createElement(AddCashForm, null),
	                React.createElement("hr", null),
	                React.createElement(
	                    "table",
	                    { className: "w3-table w3-striped w3-hoverable" },
	                    React.createElement(
	                        "tbody",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                null,
	                                "Amount"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Date"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Description"
	                            ),
	                            React.createElement("th", null)
	                        ),
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "td",
	                                null,
	                                "$1000"
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                "2/27/2017"
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                "Initial deposit"
	                            )
	                        ),
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "td",
	                                null,
	                                "$2100"
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                "2/28/2017"
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                "another deposit"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return CashForm;
	}(React.Component);

	;

	var BusinessList = function (_React$Component3) {
	    _inherits(BusinessList, _React$Component3);

	    function BusinessList(props) {
	        _classCallCheck(this, BusinessList);

	        var _this3 = _possibleConstructorReturn(this, (BusinessList.__proto__ || Object.getPrototypeOf(BusinessList)).call(this, props));

	        _this3.state = {
	            selected: [false, false, false, false, false],
	            changeFunc: props.changeBusiness
	        };
	        return _this3;
	    }

	    _createClass(BusinessList, [{
	        key: "render",
	        value: function render() {
	            var selectItem = this.selectItem;
	            var selected = this.state.selected;

	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "table",
	                    { className: "w3-table w3-striped w3-hoverable" },
	                    React.createElement(
	                        "tbody",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                null,
	                                "Business Name"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Location"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Owner"
	                            ),
	                            React.createElement("th", null)
	                        ),
	                        this.props.businessList.map(function (listValue, f) {
	                            return React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    React.createElement(ClickableItem, { changeCategory: selectItem, label: listValue.state.name,
	                                        value: listValue.state.value, selected: selected[listValue.state.value] })
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    listValue.state.location
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    listValue.state.owner
	                                )
	                            );
	                        })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "w3-tiny w3-center" },
	                    "Click on business to see details"
	                )
	            );
	        }
	    }]);

	    return BusinessList;
	}(React.Component);

	;

	var Content = function (_React$Component4) {
	    _inherits(Content, _React$Component4);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this4 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this4.state = {
	            date: new Date()
	        };
	        _this4.showLock = _this4.showLock.bind(_this4);
	        return _this4;
	    }

	    _createClass(Content, [{
	        key: "showLock",
	        value: function showLock() {
	            this.props.lock.show({
	                // callbackURL: 'https://wpuhl10775.auth0.com/login/callback',
	                // callbackURL: 'http://localhost:8080/index.html',
	                callbackURL: 'http://www.google.com',
	                rememberLastLogin: false
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var style = { border: "1px solid black" };

	            var leftStyle = {
	                borderLeft: "1px solid black",
	                textAlign: "left"
	            };

	            var rightStyle = {
	                borderLeft: "1px solid black",
	                width: "80%"
	            };

	            console.log("category= " + categories[0]);
	            console.log("owner= " + categories[this.props.curCategory].state.owner);
	            console.log("biz= " + categories[this.props.curCategory].state.businesses);
	            console.log("location= " + categories[this.props.curCategory].state.location);

	            var curCategory = this.props.curCategory;
	            var curBusiness = this.props.curBusiness;
	            var balanceSheet = categories[this.props.curCategory].state.businesses[curBusiness].state.balanceSheet;

	            var displayLeftPanel = {
	                display: this.props.appState == 'default' || this.props.appState == 'edit-account' ? 'block' : 'none'
	            };

	            var displayDetailPanel = {
	                display: this.props.appState == 'default' ? 'block' : 'none'
	            };

	            var displayList = this.props.appState == 'default' ? categories : accountCategories;

	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "div",
	                    { className: "login-box" },
	                    React.createElement(
	                        "a",
	                        { onClick: this.showLock },
	                        "Sign In"
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "table",
	                        { style: style },
	                        React.createElement(
	                            "tbody",
	                            null,
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    { style: leftStyle },
	                                    React.createElement(
	                                        "div",
	                                        { style: displayLeftPanel },
	                                        React.createElement(LeftPanel, {
	                                            categories: displayList,
	                                            changeCategory: this.props.changeCategory,
	                                            curCategory: curCategory })
	                                    )
	                                ),
	                                React.createElement(
	                                    "td",
	                                    { style: rightStyle },
	                                    React.createElement(RightPanel, {
	                                        businessList: categories[curCategory].state.businesses,
	                                        changeBusiness: this.props.changeBusiness,
	                                        curBusiness: curBusiness,
	                                        appState: this.props.appState,
	                                        changeState: this.props.changeState,
	                                        loginSubmit: this.props.loginSubmit
	                                    })
	                                ),
	                                React.createElement(
	                                    "td",
	                                    { style: rightStyle },
	                                    React.createElement(
	                                        "div",
	                                        { style: displayDetailPanel },
	                                        React.createElement(DetailPanel, { balanceSheet: balanceSheet })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Content;
	}(React.Component);

	;

	var Header = function (_React$Component5) {
	    _inherits(Header, _React$Component5);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this5 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	        _this5.state = {
	            curCategory: 0,
	            curBusiness: 0,
	            loginState: false,
	            user: props.user
	        };
	        _this5.handleClick = _this5.handleClick.bind(_this5);
	        return _this5;
	    }

	    _createClass(Header, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "handleClick",
	        value: function handleClick(props) {
	            if (this.state.loginState) {
	                // alert("You are now logged out.");
	                this.setState({ loginState: false });
	                props.login(null);
	            } else {
	                console.log("Header login activated");
	                props.login(user);
	            }
	        }
	    }, {
	        key: "handleClickAccount",
	        value: function handleClickAccount(props) {
	            props.changeState('edit-account');
	        }
	    }, {
	        key: "render",
	        value: function render(title) {
	            var _this6 = this;

	            var style = {
	                border: "1px solid black",
	                width: "100%"
	            };
	            var headerClass = "w3-container w3-indigo";
	            var divClass = "w3-xxlarge";
	            var divClass2 = "w3-btn w3-teal w3-large w3-round-xxlarge w3-right";

	            // this.state.user = this.props.user;
	            var loggedIn = this.state.appState == 'login';
	            var category = this.state.appState == 'default' ? this.props.curCategory : null;

	            console.log("Changing header state");
	            return React.createElement(
	                "nav",
	                { className: "navbar navbar-default" },
	                React.createElement(
	                    "header",
	                    { className: headerClass },
	                    React.createElement(
	                        "table",
	                        { style: style },
	                        React.createElement(
	                            "tbody",
	                            null,
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    { className: "navbar-text" },
	                                    " ",
	                                    this.props.title,
	                                    " "
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    category
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    this.props.user != null ? "Welcome " + this.props.user.state.firstName : ""
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    this.props.user != null ? React.createElement(
	                                        "p",
	                                        { className: "navbar-text navbar-right" },
	                                        " ",
	                                        React.createElement(
	                                            "a",
	                                            { href: "#", onClick: function onClick() {
	                                                    return _this6.handleClickAccount(_this6.props);
	                                                }, className: "navbar-link" },
	                                            "My Account"
	                                        )
	                                    ) : ""
	                                ),
	                                React.createElement(
	                                    "td",
	                                    { className: "nav-bar-right" },
	                                    React.createElement(
	                                        "button",
	                                        { onClick: function onClick() {
	                                                return _this6.handleClick(_this6.props);
	                                            } },
	                                        " ",
	                                        this.props.user == null ? "Login" : "Logout",
	                                        " "
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Header;
	}(React.Component);

	;

	var ClickableItem = function (_React$Component6) {
	    _inherits(ClickableItem, _React$Component6);

	    function ClickableItem(props) {
	        _classCallCheck(this, ClickableItem);

	        var _this7 = _possibleConstructorReturn(this, (ClickableItem.__proto__ || Object.getPrototypeOf(ClickableItem)).call(this, props));

	        _this7.state = {
	            category: props.value,
	            selected: false
	        };
	        return _this7;
	    }

	    _createClass(ClickableItem, [{
	        key: "handleClick",
	        value: function handleClick(obj) {
	            // alert("clicked " + obj.label + ":" + obj.value);
	            this.setState({ selected: true });
	            if (obj.changeCategory != null) {
	                obj.changeCategory(obj.value);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render(label, value) {
	            var _this8 = this;

	            var isSelected = this.props.selected;

	            return React.createElement(
	                "a",
	                { className: this.props.selected ? "w3-blue" : "w3-transparent", onClick: function onClick() {
	                        return _this8.handleClick(_this8.props);
	                    }, value: this.props.value },
	                this.props.label
	            );
	        }
	    }]);

	    return ClickableItem;
	}(React.Component);

	;

	var CategoryList = function (_React$Component7) {
	    _inherits(CategoryList, _React$Component7);

	    function CategoryList(props) {
	        _classCallCheck(this, CategoryList);

	        return _possibleConstructorReturn(this, (CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).call(this, props));
	    }

	    _createClass(CategoryList, [{
	        key: "render",
	        value: function render() {
	            var changeFunc = this.props.changeFunc;
	            var selected = this.props.selected;

	            return React.createElement(
	                "div",
	                { className: "category-list" },
	                React.createElement(
	                    "table",
	                    { className: "w3-table w3-striped" },
	                    React.createElement(
	                        "tbody",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                null,
	                                "Business Category"
	                            )
	                        ),
	                        this.props.categories.map(function (listItem) {
	                            var i = 0;
	                            return React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    React.createElement(ClickableItem, { changeCategory: changeFunc, label: listItem.state.name, value: listItem.state.value, selected: selected[listItem.state.value] })
	                                )
	                            );
	                        })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "w3-tiny w3-center" },
	                    "Click on category to see businesses"
	                )
	            );
	        }
	    }]);

	    return CategoryList;
	}(React.Component);

	;

	var LeftPanel = function (_React$Component8) {
	    _inherits(LeftPanel, _React$Component8);

	    function LeftPanel(props) {
	        _classCallCheck(this, LeftPanel);

	        var _this10 = _possibleConstructorReturn(this, (LeftPanel.__proto__ || Object.getPrototypeOf(LeftPanel)).call(this, props));

	        _this10.state = {
	            selectedCategory: 0,
	            selected: [false, false, false, false],
	            changeFunc: props.changeCategory
	        };

	        _this10.changeCategory = _this10.changeCategory.bind(_this10);
	        return _this10;
	    }

	    _createClass(LeftPanel, [{
	        key: "changeCategory",
	        value: function changeCategory(newCategory) {
	            console.log("new category=" + newCategory);
	            this.state.changeFunc(newCategory);

	            for (var i = 0; i < 4; ++i) {
	                if (newCategory == i) {
	                    this.state.selected[i] = true;
	                } else {
	                    this.state.selected[i] = false;
	                }
	            }

	            console.log("selected=" + this.state.selected);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            // this.state.changeFunc = this.props.changeCategory;
	            var changeFunc = this.changeCategory;
	            var selected = this.state.selected;
	            this.state.categories = this.props.categories;
	            var displayCategoryList = {
	                display: true ? 'block' : 'none'
	            };

	            return React.createElement(
	                "div",
	                { className: "left-panel", style: displayCategoryList },
	                React.createElement(CategoryList, {
	                    categories: this.state.categories,
	                    selected: selected,
	                    changeFunc: changeFunc })
	            );
	        }
	    }]);

	    return LeftPanel;
	}(React.Component);

	;

	var LoginForm = function (_React$Component9) {
	    _inherits(LoginForm, _React$Component9);

	    function LoginForm(props) {
	        _classCallCheck(this, LoginForm);

	        var _this11 = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

	        _this11.state = {
	            username: '',
	            password: ''
	        };

	        _this11.changeState = _this11.changeState.bind(_this11);
	        return _this11;
	    }

	    _createClass(LoginForm, [{
	        key: "handleClick",
	        value: function handleClick(props) {
	            props.loginSubmit(new User(this.state.username, "", "", ""));
	        }
	    }, {
	        key: "handleUsernameChange",
	        value: function handleUsernameChange(event) {
	            this.setState({ username: event.target.value });
	        }
	    }, {
	        key: "handlePasswordChange",
	        value: function handlePasswordChange(event) {
	            this.setState({ password: event.target.value });
	        }
	    }, {
	        key: "changeState",
	        value: function changeState(props) {
	            console.log("changing state (loginform)");
	            props.changeState('registration');
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this12 = this;

	            return React.createElement(
	                "div",
	                { className: "login-form" },
	                React.createElement(
	                    "h1",
	                    null,
	                    "Login to Your Account"
	                ),
	                React.createElement(
	                    "table",
	                    null,
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            "Username:"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "text",
	                                value: this.state.firstName,
	                                onChange: this.handleChangeFirstName })
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            "Password:"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "text",
	                                value: this.state.lastName,
	                                onChange: this.handleChangeLastName })
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement("td", null),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "submit", onClick: function onClick() {
	                                    return _this12.handleClick(_this12.props);
	                                } }),
	                            React.createElement(
	                                "button",
	                                { className: "login loginmodal-submit" },
	                                "Cancel"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement("td", { colSpan: "2" })
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            { className: "text-center" },
	                            "To register click",
	                            React.createElement(
	                                "button",
	                                { className: "btn btn-link", onClick: function onClick() {
	                                        return _this12.changeState(_this12.props);
	                                    } },
	                                "here"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return LoginForm;
	}(React.Component);

	var RegistrationForm = function (_React$Component10) {
	    _inherits(RegistrationForm, _React$Component10);

	    function RegistrationForm(props) {
	        _classCallCheck(this, RegistrationForm);

	        var _this13 = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

	        _this13.state = {
	            firstName: '',
	            lastName: '',
	            email: '',
	            phone: ''
	        };
	        _this13.handleClick = _this13.handleClick.bind(_this13);
	        _this13.cancel = _this13.cancel.bind(_this13);
	        _this13.handleChangeFirstName = _this13.handleChangeFirstName.bind(_this13);
	        _this13.handleChangeLastName = _this13.handleChangeLastName.bind(_this13);
	        _this13.handleChangeEmail = _this13.handleChangeEmail.bind(_this13);
	        _this13.handleChangePhone = _this13.handleChangePhone.bind(_this13);
	        return _this13;
	    }

	    _createClass(RegistrationForm, [{
	        key: "handleClick",
	        value: function handleClick(props) {
	            console.log(props);
	            props.onSubmit(new Account(this.state.firstName, this.state.lastName, this.state.email, this.state.phone));
	        }
	    }, {
	        key: "cancel",
	        value: function cancel(props) {
	            props.onSubmit(null);
	        }
	    }, {
	        key: "handleChangeFirstName",
	        value: function handleChangeFirstName(event) {
	            this.setState({ firstName: event.target.value });
	        }
	    }, {
	        key: "handleChangeLastName",
	        value: function handleChangeLastName(event) {
	            this.setState({ lastName: event.target.value });
	        }
	    }, {
	        key: "handleChangeEmail",
	        value: function handleChangeEmail(event) {
	            this.setState({ email: event.target.value });
	        }
	    }, {
	        key: "handleChangePhone",
	        value: function handleChangePhone(event) {
	            this.setState({ phone: event.target.value });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this14 = this;

	            return React.createElement(
	                "div",
	                { className: "registration-form" },
	                React.createElement(
	                    "h1",
	                    null,
	                    "Create a New Account"
	                ),
	                React.createElement(
	                    "table",
	                    null,
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            "First Name:"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "text",
	                                value: this.state.firstName,
	                                onChange: this.handleChangeFirstName })
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            "Last Name:"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "text",
	                                value: this.state.lastName,
	                                onChange: this.handleChangeLastName })
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            "Email:"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "text",
	                                value: this.state.email,
	                                onChange: this.handleChangeEmail })
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            "Telephone:"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { type: "text",
	                                value: this.state.phone,
	                                onChange: this.handleChangePhone })
	                        )
	                    ),
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement("td", null),
	                        React.createElement(
	                            "td",
	                            null,
	                            React.createElement("input", { className: "btn btn-submit", type: "submit", onClick: function onClick() {
	                                    return _this14.handleClick(_this14.props);
	                                } }),
	                            React.createElement(
	                                "button",
	                                { className: "btn btn-cancel", type: "cancel", onClick: function onClick() {
	                                        return _this14.cancel(_this14.props);
	                                    } },
	                                "Cancel"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return RegistrationForm;
	}(React.Component);

	var DetailPanel = function (_React$Component11) {
	    _inherits(DetailPanel, _React$Component11);

	    function DetailPanel(props) {
	        _classCallCheck(this, DetailPanel);

	        var _this15 = _possibleConstructorReturn(this, (DetailPanel.__proto__ || Object.getPrototypeOf(DetailPanel)).call(this, props));

	        _this15.state = {
	            balanceSheet: null
	        };
	        return _this15;
	    }

	    _createClass(DetailPanel, [{
	        key: "render",
	        value: function render() {
	            var selectItem = this.selectItem;
	            var balanceSheet = this.props.balanceSheet;

	            console.log("balance sheet:" + this.props);

	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "table",
	                    { className: "w3-table w3-table-all" },
	                    React.createElement(
	                        "tbody",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                { colSpan: "2" },
	                                "Balance Sheet"
	                            )
	                        ),
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "td",
	                                null,
	                                React.createElement(
	                                    "table",
	                                    { className: "w3-table" },
	                                    React.createElement(
	                                        "tbody",
	                                        null,
	                                        React.createElement(
	                                            "tr",
	                                            null,
	                                            React.createElement(
	                                                "th",
	                                                { colSpan: "2" },
	                                                "Assets"
	                                            )
	                                        ),
	                                        React.createElement(
	                                            "tr",
	                                            null,
	                                            React.createElement(
	                                                "th",
	                                                null,
	                                                "Name"
	                                            ),
	                                            React.createElement(
	                                                "th",
	                                                null,
	                                                "Amount"
	                                            )
	                                        ),
	                                        balanceSheet.state.assets.map(function (obj) {
	                                            return React.createElement(
	                                                "tr",
	                                                null,
	                                                React.createElement(
	                                                    "td",
	                                                    null,
	                                                    obj.state.name
	                                                ),
	                                                React.createElement(
	                                                    "td",
	                                                    null,
	                                                    "$",
	                                                    obj.state.amount,
	                                                    ".00"
	                                                )
	                                            );
	                                        })
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                React.createElement(
	                                    "table",
	                                    { className: "w3-table w3-striped" },
	                                    React.createElement(
	                                        "tbody",
	                                        null,
	                                        React.createElement(
	                                            "tr",
	                                            null,
	                                            React.createElement(
	                                                "th",
	                                                { colSpan: "2" },
	                                                "Liabilities"
	                                            )
	                                        ),
	                                        React.createElement(
	                                            "tr",
	                                            null,
	                                            React.createElement(
	                                                "th",
	                                                null,
	                                                "Name"
	                                            ),
	                                            React.createElement(
	                                                "th",
	                                                null,
	                                                "Amount"
	                                            )
	                                        ),
	                                        balanceSheet.state.liabilities.map(function (obj) {
	                                            return React.createElement(
	                                                "tr",
	                                                null,
	                                                React.createElement(
	                                                    "td",
	                                                    null,
	                                                    obj.state.name
	                                                ),
	                                                React.createElement(
	                                                    "td",
	                                                    null,
	                                                    "$",
	                                                    obj.state.amount,
	                                                    ".00"
	                                                )
	                                            );
	                                        })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return DetailPanel;
	}(React.Component);

	;

	var RightPanel = function (_React$Component12) {
	    _inherits(RightPanel, _React$Component12);

	    function RightPanel(props) {
	        _classCallCheck(this, RightPanel);

	        var _this16 = _possibleConstructorReturn(this, (RightPanel.__proto__ || Object.getPrototypeOf(RightPanel)).call(this, props));

	        _this16.state = {
	            selected: [false, false, false, false, false],
	            changeFunc: props.changeBusiness
	        };

	        _this16.selectItem = _this16.selectItem.bind(_this16);
	        return _this16;
	    }

	    _createClass(RightPanel, [{
	        key: "getInitialState",
	        value: function getInitialState() {
	            return {};
	        }
	    }, {
	        key: "selectItem",
	        value: function selectItem(item) {
	            // alert(item);
	            console.log("selected business=" + item);
	            this.state.changeFunc(item);

	            this.state.selected.map(function (select, index, item) {
	                console.log("index=" + index + " select=" + select + " item=" + item);
	                if (item == index) {
	                    select = true;
	                } else {
	                    select = false;
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var selectItem = this.selectItem;
	            var selected = this.state.selected;

	            var displayBusinessList = {
	                display: this.props.appState == 'default' ? 'block' : 'none'
	            };

	            var displayLoginForm = {
	                display: this.props.appState == 'login' ? 'block' : 'none'
	            };

	            var displayRegistrationForm = {
	                display: this.props.appState == 'registration' ? 'block' : 'none'
	            };

	            var displayCashList = {
	                display: this.props.appState == 'edit-account' ? 'block' : 'none'
	            };

	            return React.createElement(
	                "div",
	                { className: "right-panel" },
	                React.createElement(
	                    "div",
	                    { className: "business-list", style: displayBusinessList },
	                    React.createElement(BusinessList, { businessList: this.props.businessList })
	                ),
	                React.createElement(
	                    "div",
	                    { style: displayRegistrationForm },
	                    React.createElement(RegistrationForm, { onSubmit: this.props.loginSubmit })
	                ),
	                React.createElement(
	                    "div",
	                    { style: displayLoginForm },
	                    React.createElement(LoginForm, {
	                        changeState: this.props.changeState,
	                        loginSubmit: this.props.loginSubmit
	                    })
	                ),
	                React.createElement(
	                    "div",
	                    { style: displayCashList },
	                    React.createElement(CashForm, {
	                        changeState: this.props.changeState })
	                )
	            );
	        }
	    }]);

	    return RightPanel;
	}(React.Component);

	var Footer = function (_React$Component13) {
	    _inherits(Footer, _React$Component13);

	    function Footer(props) {
	        _classCallCheck(this, Footer);

	        var _this17 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

	        _this17.state = {
	            date: new Date()
	        };
	        return _this17;
	    }

	    _createClass(Footer, [{
	        key: "render",
	        value: function render() {
	            var style = {
	                border: "1px solid black"
	            };

	            return React.createElement(
	                "div",
	                { style: style },
	                " ",
	                React.createElement(Clock, null)
	            );
	        }
	    }]);

	    return Footer;
	}(React.Component);

	;

	var Page = function (_React$Component14) {
	    _inherits(Page, _React$Component14);

	    function Page(props) {
	        _classCallCheck(this, Page);

	        var _this18 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

	        _this18.state = {
	            curCategory: 0,
	            curBusiness: 0,
	            user: null,
	            appState: 'default'
	        };
	        _this18.changeCategory = _this18.changeCategory.bind(_this18);
	        _this18.changeBusiness = _this18.changeBusiness.bind(_this18);
	        _this18.login = _this18.login.bind(_this18);
	        _this18.changeState = _this18.changeState.bind(_this18);
	        _this18.loginSubmit = _this18.loginSubmit.bind(_this18);
	        return _this18;
	    }

	    _createClass(Page, [{
	        key: "changeCategory",
	        value: function changeCategory(category) {
	            this.state.curCategory = category;
	            this.setState({ curCategory: category });
	            console.log("changing category to " + category);
	        }
	    }, {
	        key: "changeState",
	        value: function changeState(appState) {
	            console.log("changing state to " + appState);
	            this.setState({ appState: appState });
	        }
	    }, {
	        key: "login",
	        value: function login() {
	            if (null == this.state.user) {
	                console.log("Logging in user");
	                this.setState({ appState: 'login' });
	            } else {
	                console.log("Logging out user " + this.state.user.firstName);
	                this.setState({ user: null });
	                this.setState({ appState: 'default' });
	            }
	        }
	    }, {
	        key: "loginSubmit",
	        value: function loginSubmit(user) {
	            this.setState({ user: user });
	            this.setState({ appState: 'default' });
	        }
	    }, {
	        key: "changeBusiness",
	        value: function changeBusiness(business) {
	            this.state.curBusiness = business;
	            this.setState({ curBuiness: business });
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.lock = new Auth0Lock('NSGgH5oAnsFk0CK31AHpP3nzE2xlpYbJ', 'wpuhl10775.auth0.com');
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            console.log("CurCategory=" + this.state.curCategory);
	            var title = this.state.loginState ? "Please Login" : this.props.title;

	            return React.createElement(
	                "div",
	                null,
	                React.createElement(Header, {
	                    title: title,
	                    curCategory: categories[this.state.curCategory].state.name,
	                    login: this.login,
	                    changeState: this.changeState,
	                    user: this.state.user }),
	                React.createElement(Content, {
	                    lock: this.lock,
	                    appState: this.state.appState,
	                    curCategory: this.state.curCategory,
	                    curBusiness: this.state.curBusiness,
	                    changeCategory: this.changeCategory,
	                    changeBusiness: this.changeBusiness,
	                    changeState: this.changeState,
	                    loginSubmit: this.loginSubmit }),
	                React.createElement(Footer, null),
	                React.createElement(
	                    "div",
	                    { className: "w3-modal" },
	                    React.createElement(
	                        "a",
	                        { title: "Close" },
	                        "X"
	                    ),
	                    React.createElement(
	                        "h2",
	                        null,
	                        "Modal"
	                    ),
	                    React.createElement(
	                        "p",
	                        null,
	                        "This is a sample modal"
	                    )
	                )
	            );
	        }
	    }]);

	    return Page;
	}(React.Component);

	;

	var Clock = function (_React$Component15) {
	    _inherits(Clock, _React$Component15);

	    function Clock(props) {
	        _classCallCheck(this, Clock);

	        var _this19 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

	        _this19.state = { date: new Date() };
	        return _this19;
	    }

	    _createClass(Clock, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this20 = this;

	            this.timerID = setInterval(function () {
	                return _this20.tick();
	            }, 1000);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            clearInterval(this.timerID);
	        }
	    }, {
	        key: "tick",
	        value: function tick() {
	            this.setState({
	                date: new Date()
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                "It is ",
	                this.state.date.toLocaleTimeString()
	            );
	        }
	    }]);

	    return Clock;
	}(React.Component);

	ReactDOM.render(React.createElement(Page, { title: "Biz Loan", curCategory: "0" }), document.getElementById('container'));

/***/ }
/******/ ]);