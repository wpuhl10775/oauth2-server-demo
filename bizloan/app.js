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

var categories = [
    new Category("Restaurants", 0,
        [
            new Business("Angelo's Pizzeria",0,"user1","Caracas",
                new BalanceSheet(
                    [new Asset("cash", 5000), new Asset("ovens",1500), new Asset("cheese", 500)],
                    [new Liability("mortgage", 10000)])),
            new Business("McDonald's",1, "user2", "Valencia",
                new BalanceSheet([],[])),
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
                new BalanceSheet([],[])),
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

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
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
        const balanceSheet = categories[this.props.curCategory].state.businesses[0].state.balanceSheet;

        return ( <table style = {style}>
                <tbody>
                 <tr>
                    <td style = {leftStyle}>
                        <LeftPanel categories = {categories} changeCategory={this.props.changeCategory} curCategory={curCategory}/>
                    </td>
                    < td style = {rightStyle} >
                        <RightPanel businessList={categories[curCategory].state.businesses} curBusiness="{curBusiness}"/>
                    </td>
                    <td style = {rightStyle}>
                        <DetailPanel balanceSheet={balanceSheet} />
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curCategory: 0,
            loginState: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
    }

    handleClick() {
        if( this.state.loginState) {
            alert("You are now logged out.");
            this.setState({loginState:false});
        } else {
            alert("You are now logged in.");
            this.setState({loginState:true});
        }
    }

    render(title) {
        var style = {
            border: "1px solid black",
            width: "100%"
        };
        var headerClass = "w3-container w3-indigo";
        var divClass = "w3-xxlarge";
        var divClass2 = "w3-btn w3-teal w3-large w3-round-xxlarge w3-right";

        // this.setState({curCategory:this.props.curCategory});
        this.state.curCategory = this.props.curCategory;
        const loggedIn = this.state.loginState;

        console.log("Changing header state");
        return ( <header className = {headerClass}>
                <table style = {style}>
                    <tbody>
                    <tr>
                        <td width = "70%" > {this.props.title} </td>
                        <td>{this.state.curCategory}</td>
                        <td>{loggedIn ? "Welcrrome user! " :"" } <button onClick={this.handleClick}> { loggedIn ? "Logout" : "Login"} </button> </td>
                    </tr>
                    </tbody>
                </table>
                </header>

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

            return <div>
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
            </div>;
        }
    };

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
            selected: [false,false,false,false,false],
            changeFunc: props.selectItem
        }

        this.selectItem = this.selectItem.bind(this);
    };

    selectItem(item) {
        // alert(item);
        console.log("selected business=" + item);

        for(var i=0; i < this.state.selected.length; ++i) {
            if( item == i) {
                this.state.selected[i] = true;
            } else {
                this.state.selected[i] = false;
            }
        }
    };

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
                    </tr>
                { this.props.businessList.map(
                    function (listValue, f) {
                    return <tr>
                        <td><ClickableItem changeCategory={selectItem} label={listValue.state.name}
                                           value={listValue.state.value} selected={selected[listValue.state.selected]}/></td>
                        <td>{listValue.state.location}</td>
                        <td>{listValue.state.owner}</td>
                    </tr>;
                }
                )}
                    </tbody>
                </table>
                <div className="w3-tiny w3-center">Click on business to see details</div>
            </div>);
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
              curBusiness: 0
          };
          this.changeCategory = this.changeCategory.bind(this);
      }

      changeCategory( category) {
          this.state.curCategory = category;
          this.setState({curCategory: category});
          console.log("changing category to " + category)
      }

      render() {
         console.log("CurCategory=" + this.state.curCategory);
        return ( < div >
                   < Header title = {this.props.title} curCategory={this.state.curCategory}/>
                   < Content curCategory = {this.state.curCategory} curBusiness= {this.state.curBusiness} changeCategory = {this.changeCategory}/>
                    < Footer />
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