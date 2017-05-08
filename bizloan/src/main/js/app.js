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

class Account {
    constructor(fname, lname, email, telephone) {
        this.state = {
            firstName: fname,
            lastName: lname,
            email: email,
            // password: password,
            // address: address,
            telephone: telephone
        }
    }
};

class Address {
    constructor(addr1, addr2, city, state, zip) {
        this.state = {
            addr1: addr1,
            addr2: addr2,
            city: city,
            state: state,
            zip: zip
        }
    }
};

class Asset {
    constructor( name, amount){
        this.state = {
            name: name,
            amount: amount
        }
    }
};

class Liability {
    constructor( name, amount){
        this.state = {
            name: name,
            amount: amount
        }
    }
};

class BalanceSheet {
    constructor(assets, liabilities) {
        this.state = {
            assets: assets,
            liabilities: liabilities
        }
    }
};

class Business {
    constructor(name, value, owner, location, balanceSheet) {
        this.state = {
            name: name,
            value: value,
            owner: owner,
            location: location,
            selected: false,
            balanceSheet: balanceSheet
        }
    }
};

class Category  {
    constructor(name, val, businesses, selected) {
        // super(ClickableItem);
        this.state = {
            name: name,
            value: val,
            businesses: businesses,
            selected: selected
        }
    }
};

class User {
    constructor( fname, lname, email, telephone) {
        this.state = {
            firstName: fname,
            lastName: lname,
            email: email,
            // password: password,
            // address: address,
            telephone: telephone
        }
    }
};

var user = null;

var accountCategories = [
    new Category("Cash",0, [], true),
    new Category("Inventory",0,[],false),
    new Category("Accounts Receivable",0,[],false),
    new Category("Land",0,[],false),
    new Category("Buildings",0,[],false),
    new Category("Equipment",0,[],false),
    new Category("Notes Payable",0,[],false),
    new Category("Owners Equity",0,[],false)
];

var categories = [
    new Category("Restaurants", 0,
        [
            new Business("Angelo's Pizzeria",0,"user1","Caracas",
                new BalanceSheet(
                    [new Asset("cash", 5000), new Asset("ovens",1500), new Asset("cheese", 500)],
                    [new Liability("mortgage", 10000)])),
            new Business("McDonald's",1, "user2", "Valencia",
                new BalanceSheet([new Asset("hamburgers", 2500)],[])),
            new Business("Burger King",2, "user3", "Maracaibo",
                new BalanceSheet([],[]))
        ], true),
    new Category("Financial Services", 1,
        [
            new Business("A1 Credit",0,"user4", "Caracas",
                new BalanceSheet([],[])),
            new Business("Rocket Mortgage",1,"user5", "Valencia",
                new BalanceSheet([],[]))
        ], false),
    new Category("Groceries", 2,
        [
            new Business("ACME", 0,"user6", "Caracas",
                new BalanceSheet([new Asset("apples", 1000),new Asset("bananas", 1500)],[])),
            new Business("SuperFresh", 1,"user7", "Maracaibo",
                new BalanceSheet([],[])),
            new Business("Trader Joe's", 2,"user8", "Maracaibo",
                new BalanceSheet([],[]))
        ], false),
    new Category("Bakeries", 3,
        [
            new Business("Dunkin Donuts",0),
            new Business("Panero",1)
        ], false),
];

class AddCashForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       }
    };

    render() {
        return (
            <div className="cash-add-form">
                <form className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" for="email">Amt:</label>
                        <input type="amount" className="form-control" id="amount"/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" for="pwd">Date:</label>
                        <input type="date" className="form-control" id="date"/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" for="pwd">Desc:</label>
                        <input type="text" className="form-control" id="desc"/>
                    </div>
                    <button type="submit" className="btn btn-default">Add</button>
                </form>
            </div>
        );
    };
};

class CashForm extends React.Component
{
    constructor(props){
        super(props);
    };

    render()
    {
        return (
            <div className="cash-form">
                <h1>Cash Account</h1>
                <AddCashForm/>
                <hr/>
                <table className="w3-table w3-striped w3-hoverable">
                    <tbody>
                    <tr>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>$1000</td>
                        <td>2/27/2017</td>
                        <td>Initial deposit</td>
                    </tr>
                    <tr>
                        <td>$2100</td>
                        <td>2/28/2017</td>
                        <td>another deposit</td>
                    </tr>
                    </tbody>
                </table>

            </div>

        );
    };
};

class BusinessList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [false, false, false, false, false],
            changeFunc: props.changeBusiness
        }
    }

    render() {
        const selectItem = this.selectItem;
        const selected = this.state.selected;

        return (
            <div>
                <table className="w3-table w3-striped w3-hoverable">
                    <tbody>
                    <tr>
                        <th>Business Name</th>
                        <th>Location</th>
                        <th>Owner</th>
                        <th></th>
                    </tr>
                    { this.props.businessList.map(
                        function (listValue, f) {
                            return <tr>
                                <td><ClickableItem changeCategory={selectItem} label={listValue.state.name}
                                                   value={listValue.state.value} selected={selected[listValue.state.value]}/></td>
                                <td>{listValue.state.location}</td>
                                <td>{listValue.state.owner}</td>
                            </tr>;
                        }
                    )}
                    </tbody>
                </table>
                <div className="w3-tiny w3-center">Click on business to see details</div>
            </div>);
    }
};

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.showLock = this.showLock.bind(this);
    }

    showLock() {
      this.props.lock.show({
              // callbackURL: 'https://wpuhl10775.auth0.com/login/callback',
              // callbackURL: 'http://localhost:8080/index.html',
              callbackURL: 'http://www.google.com',
        rememberLastLogin: false
      }
      );
    }

    render() {
        var style = {border: "1px solid black"};

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
        const balanceSheet = categories[this.props.curCategory].state.businesses[curBusiness].state.balanceSheet;

        var displayLeftPanel = {
            display: (this.props.appState == 'default') || (this.props.appState == 'edit-account') ? 'block' : 'none'
        }

        var displayDetailPanel = {
            display: (this.props.appState == 'default') ? 'block' : 'none'
        }

        var displayList = this.props.appState == 'default' ? categories : accountCategories;

        return ( <div>
        <div className="login-box">
                 </div>
              <div>
              <table style = {style}>
                <tbody>
                 <tr>
                    <td style = {leftStyle}>
                        <div style = {displayLeftPanel}>
                        <LeftPanel
                            categories = {displayList}
                            changeCategory={this.props.changeCategory}
                            curCategory={curCategory}/>
                        </div>
                    </td>
                    < td style = {rightStyle} >
                        <RightPanel
                            businessList={categories[curCategory].state.businesses}
                            changeBusiness={this.props.changeBusiness}
                            curBusiness={curBusiness}
                            appState = {this.props.appState}
                            changeState = {this.props.changeState}
                            loginSubmit = {this.props.loginSubmit}
                        />
                    </td>
                    <td style = {rightStyle}>
                        <div style = {displayDetailPanel}>
                          <DetailPanel balanceSheet={balanceSheet} />
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
        );
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curCategory: 0,
            curBusiness:0,
            loginState: false,
            user: props.user
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
    }

    handleClick(props) {
        if( this.state.loginState) {
          // alert("You are now logged out.");
          this.setState({loginState:false});
                   props.login(null);

        } else {
         console.log( "Header login activated");
          props.login(user);
        }
    }

    handleClickAccount(props) {
        props.changeState('edit-account');
    }

    render(title) {
        var style = {
            border: "1px solid black",
            width: "100%"
        };
        var headerClass = "w3-container w3-indigo";
        var divClass = "w3-xxlarge";
        var divClass2 = "w3-btn w3-teal w3-large w3-round-xxlarge w3-right";

        // this.state.user = this.props.user;
        const loggedIn = this.state.appState == 'login';
        const category = this.state.appState == 'default' ? this.props.curCategory : null;

        console.log("Changing header state");
        return ( <nav className="navbar navbar-default">
            <header className = {headerClass}>
                <table style = {style}>
                    <tbody>
                    <tr>
                        <td className="navbar-text"> {this.props.title} </td>
                        <td>{category}</td>
                        <td >{this.props.user != null ? "Welcome " + this.props.user.state.firstName :"" }</td>
                        <td >{this.props.user != null ? <p className="navbar-text navbar-right"> <a href="#" onClick={()=> this.handleClickAccount(this.props)} className="navbar-link">My Account</a></p> :"" }</td>
                        <td className="nav-bar-right">
                            <button onClick={()=> this.handleClick(this.props)}> { this.props.user == null ? "Login" : "Logout"} </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </header></nav>
        );
    };
};

    class ClickableItem extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                category: props.value,
                selected: false
            }
         }

        handleClick(obj) {
            // alert("clicked " + obj.label + ":" + obj.value);
            this.setState({selected: true});
            if( obj.changeCategory != null) {
                obj.changeCategory(obj.value);
            }
        }

        render(label, value) {
            var isSelected = this.props.selected;

            return <a className={this.props.selected ? "w3-blue": "w3-transparent"} onClick={()=> this.handleClick(this.props)} value={this.props.value}>{this.props.label}</a>
                ;
        }
    };

    class CategoryList extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const changeFunc = this.props.changeFunc;
            const selected = this.props.selected;

            return (
            <div className="category-list">
                <table className="w3-table w3-striped">
                    <tbody>
                    <tr>
                        <th>Business Category</th>
                    </tr>
                    {
                        this.props.categories.map(
                            function( listItem) {
                                var i = 0;
                                return <tr>
                                    <td>
                                        <ClickableItem changeCategory={changeFunc} label={listItem.state.name} value={listItem.state.value} selected={selected[listItem.state.value]}/>
                                    </td>
                                </tr>}
                        )
                    }
                    </tbody>
                </table>
                <div className="w3-tiny w3-center">Click on category to see businesses</div>
            </div>
            );
        }
    };

    class LeftPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedCategory:0,
                selected: [false, false, false, false],
                changeFunc: props.changeCategory
            }

            this.changeCategory = this.changeCategory.bind(this);
        };

        changeCategory(newCategory) {
            console.log("new category=" + newCategory);
            this.state.changeFunc(newCategory);

            for(var i=0; i < 4; ++i) {
                if( newCategory == i) {
                    this.state.selected[i] = true;
                } else {
                    this.state.selected[i] = false;
                }
            }

            console.log("selected=" + this.state.selected);
        }

    render() {
            // this.state.changeFunc = this.props.changeCategory;
            const changeFunc = this.changeCategory;
            const selected = this.state.selected;
        this.state.categories = this.props.categories;
        const displayCategoryList = {
            display: true ? 'block' : 'none'
        };

        return(
            <div className="left-panel" style={displayCategoryList}>
              <CategoryList
                            categories = {this.state.categories}
                            selected = {selected}
                            changeFunc = {changeFunc} />
            </div>
        );
        }
    };

    class LoginForm extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                username: '',
                password: ''
            }

            this.changeState = this.changeState.bind(this);
        }

        handleClick(props) {
            props.loginSubmit(new User(this.state.username, "", "", ""));
        }

        handleUsernameChange(event) {
            this.setState({username: event.target.value});
        }

        handlePasswordChange(event) {
            this.setState({password: event.target.value});
        }

        changeState(props) {
            console.log("changing state (loginform)");
            props.changeState('registration');
        }

        render() {
            return (
                <div className = "login-form">
                    <h1>Login to Your Account</h1>
                    <table>
                        <tr>
                            <td>Username:</td>
                            <td><input type="text"
                                       value={this.state.firstName}
                                       onChange={this.handleChangeFirstName}/></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="text"
                                       value={this.state.lastName}
                                       onChange={this.handleChangeLastName}/></td>
                        </tr>
                         <tr>
                             <td></td>
                            <td><input type="submit" onClick={()=> this.handleClick(this.props)}/>
                                <button className="login loginmodal-submit">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2"/>
                        </tr>
                        <tr>
                            <td className="text-center">To register click
                                <button className="btn btn-link" onClick={()=> this.changeState(this.props)}>here</button></td>
                        </tr>
                    </table>
                </div>
            );
        }
    }

    class RegistrationForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                firstName: '',
                lastName:'',
                email: '',
                phone: ''
            }
            this.handleClick = this.handleClick.bind(this);
            this.cancel = this.cancel.bind(this);
            this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
            this.handleChangeLastName = this.handleChangeLastName.bind(this);
            this.handleChangeEmail = this.handleChangeEmail.bind(this);
            this.handleChangePhone = this.handleChangePhone.bind(this);
        }

        handleClick(props) {
            console.log(props);
            props.onSubmit(new Account(this.state.firstName, this.state.lastName, this.state.email, this.state.phone));
        }

        cancel(props) {
            props.onSubmit(null);
        }

        handleChangeFirstName(event) {
            this.setState({firstName: event.target.value});
        }

        handleChangeLastName(event) {
            this.setState({lastName: event.target.value});
        }

        handleChangeEmail(event) {
            this.setState({email: event.target.value});
        }

        handleChangePhone(event) {
            this.setState({phone: event.target.value});
        }

        render() {
            return (
                <div className="registration-form">
                    <h1>Create a New Account</h1>
                    <table>
                        <tr>
                            <td>First Name:</td>
                            <td><input type="text"
                                       value={this.state.firstName}
                                       onChange={this.handleChangeFirstName}/></td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td><input type="text"
                                       value={this.state.lastName}
                                       onChange={this.handleChangeLastName}/></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="text"
                                       value={this.state.email}
                                       onChange={this.handleChangeEmail}/></td>
                        </tr>
                        <tr>
                            <td>Telephone:</td>
                            <td><input type="text"
                                       value={this.state.phone}
                                       onChange={this.handleChangePhone}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input className="btn btn-submit" type="submit" onClick={()=> this.handleClick(this.props)}/>
                                <button className="btn btn-cancel" type="cancel" onClick={()=> this.cancel(this.props)}>Cancel</button>
                            </td>
                        </tr>
                    </table>
                </div>
            )
        }
    }

    class DetailPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                balanceSheet:null
            };
        };

        render() {
            const selectItem = this.selectItem;
            const balanceSheet = this.props.balanceSheet;

            console.log("balance sheet:" + this.props);

            return (
                <div>
                    <table className="w3-table w3-table-all">
                        <tbody>
                        <tr>
                            <th colSpan="2">Balance Sheet</th>
                        </tr>
                        <tr>
                            <td>
                                <table className="w3-table">
                                    <tbody>
                                    <tr>
                                        <th colSpan="2">Assets</th>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <th>Amount</th>
                                    </tr>
                                    { balanceSheet.state.assets.map( function(obj) {
                                            return <tr>
                                                <td>{obj.state.name}</td>
                                                <td>${obj.state.amount}.00</td>
                                            </tr>;
                                        })
                                    }
                                    </tbody>
                                </table>
                            </td>
                            <td>
                            <table className="w3-table w3-striped">
                                <tbody>
                                <tr>
                                  <th colSpan="2">Liabilities</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                </tr>
                                { balanceSheet.state.liabilities.map( function(obj) {
                                    return <tr>
                                        <td>{obj.state.name}</td>
                                        <td>${obj.state.amount}.00</td>
                                    </tr>;
                                })
                                }
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
         };
    };

class RightPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [false, false, false, false, false],
            changeFunc: props.changeBusiness
        }

        this.selectItem = this.selectItem.bind(this);
    };

    getInitialState() {
        return {
        }
    };

    selectItem(item) {
        // alert(item);
        console.log("selected business=" + item);
        this.state.changeFunc(item);

        this.state.selected.map( function(select, index, item) {
            console.log("index=" + index + " select=" + select + " item=" + item);
            if( item == index) {
                select = true;
            } else {
                select = false;
            }
        });
    };

    render() {
        const selectItem = this.selectItem;
        const selected = this.state.selected;

        var displayBusinessList = {
            display: this.props.appState == 'default' ? 'block' : 'none'
        }

        var displayLoginForm = {
            display: this.props.appState == 'login' ? 'block' : 'none'
        }

        var displayRegistrationForm = {
            display: this.props.appState == 'registration' ? 'block' : 'none'
        }

        var displayCashList = {
            display: this.props.appState == 'edit-account' ? 'block' : 'none'
        }

        return (
            <div className="right-panel">
                <div className="business-list" style={displayBusinessList}>
                    <BusinessList businessList = {this.props.businessList}/>
                </div>
                <div style={displayRegistrationForm}>
                    <RegistrationForm onSubmit = {this.props.loginSubmit}/>
                </div>
                <div style={displayLoginForm}>
                    <LoginForm
                        changeState = {this.props.changeState}
                        loginSubmit = {this.props.loginSubmit}
                    />
                </div>
                <div style={displayCashList}>
                    <CashForm
                        changeState = {this.props.changeState}/>
                </div>
            </div>
        )
    };
}

    class Footer extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          date: new Date()
        };
      };

      render() {
        var style = {
          border: "1px solid black"
        };

        return ( < div style = {style} > <Clock/></div>);
      };
    };

    class Page extends React.Component {
      constructor(props) {
        super(props);
          this.state = {
              curCategory: 0,
              curBusiness: 0,
              user: null,
              appState: 'default'
          };
          this.changeCategory = this.changeCategory.bind(this);
          this.changeBusiness = this.changeBusiness.bind(this);
          this.login = this.login.bind(this);
          this.changeState = this.changeState.bind(this);
          this.loginSubmit = this.loginSubmit.bind(this);
      }

      changeCategory( category) {
          this.state.curCategory = category;
          this.setState({curCategory: category});
          console.log("changing category to " + category)
      }

      changeState(appState) {
          console.log("changing state to " + appState);
          this.setState( {appState : appState});
      }

      login() {
        if( null == this.state.user ) {
            console.log("Logging in user");
            this.setState({ appState: 'login'});
        } else {
            console.log("Logging out user " + this.state.user.firstName);
            this.setState({ user: null});
            this.setState({ appState: 'default'});
        }
      }

      loginSubmit(user) {
          this.setState({user: user});
          this.setState({ appState: 'default'});
      }

      changeBusiness( business) {
          this.state.curBusiness = business;
          this.setState({curBuiness:business});
      }

      componentWillMount() {
        this.lock = new Auth0Lock('NSGgH5oAnsFk0CK31AHpP3nzE2xlpYbJ', 'wpuhl10775.auth0.com');
      }

      render() {
         console.log("CurCategory=" + this.state.curCategory);
          var title = this.state.loginState ? "Please Login" : this.props.title;

        return ( < div >
                   < Header
                       title = {title}
                       curCategory={categories[this.state.curCategory].state.name}
                       login = {this.login}
                       changeState = {this.changeState}
                       user = {this.state.user}/>
                   < Content
                       lock = {this.lock}
                       appState = {this.state.appState}
                       curCategory = {this.state.curCategory}
                       curBusiness= {this.state.curBusiness}
                       changeCategory = {this.changeCategory}
                       changeBusiness = {this.changeBusiness}
                       changeState = {this.changeState}
                       loginSubmit = {this.loginSubmit}/>
                    < Footer />

                             <div className='w3-modal'>
                                <a title='Close'>X</a>
                                <h2>Modal</h2>
                                <p>This is a sample modal</p>
                              </div>
                 </div>);
      }
    };

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                It is {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}
    ReactDOM.render( < Page title = "Biz Loan" curCategory="0"/> ,
                document.getElementById('container')
    );