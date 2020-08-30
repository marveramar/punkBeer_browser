
import React from 'react';
import List from './list';
import { ApiCall } from '../services/Api';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allElements: [],
        }
    }
    componentDidMount() {
        ApiCall()
            .then(data => {
                console.log(data)
                this.setState({
                    allElements: data
                });
            })
    }
    render() {
        return (
            <div>
                <h1>PUNK BEERS</h1>
                <List elements={this.state.allElements} />
            </div>
        )
    }
}
export default App;