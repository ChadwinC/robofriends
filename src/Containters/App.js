import React, {Component} from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox"
import Scroll from "../Components/Scroll";
import "./App.css"

class App extends Component{ // smart component(Lifecycle components)
    constructor() {
        super()// must always be called before state is being used.
        this.state = {
            robots: [],// empty robot array, where all data will be stored in when being called from API
            searchfield:'' // Search field empty string, which will be filled when typed in input box  
        }
    }
 //component below mounts API data to the robots array   
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")//fetching data from API
    .then(response => response.json())//returning data from the API
    .then(user => this.setState({robots: user})) // change the state, inserting data into robots array  

}
//Below is the onchange event, that listens to the input value provided in the searchBox Component.
onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
}
//The below renders what we see on the page.
render() {
    const {robots,searchfield} = this.state;//Some destructuring
    const filteredRobot =robots.filter(robot => {//filter when you type inside input box
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length?// return true if robots length is zero.
        <h1 className="tc f1">Loading</h1> :
        (
                <div className ='tc'>
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchchange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>       
        )    
        }
    }
export default App;