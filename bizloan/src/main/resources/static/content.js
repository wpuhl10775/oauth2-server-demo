console.log("Hello from webpack");

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        var style = {
            border: "1px solid black"
        };

        var leftStyle = {
            borderLeft: "1px solid black",
            textAlign: "left"
        };

        var rightStyle = {
            borderLeft: "1px solid black",
            width: "80%"
        };

        return ( <table style = {
                style
            }>
                < tr >
                    < td style = {
                        leftStyle
                    } > < LeftPanel categories = {
                        ['category1', 'category2', 'category3']
                    }
                    /></td >
                    < td style = {
                        rightStyle
                    } > < RightPanel businesses = {
                        ['business1', 'business2', 'business3']
                    }
                    /></td >
                </tr> </table >
        );
    }
};
