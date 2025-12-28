import React from "react"
import List from "./components/List.jsx"
import axios from "axios"

axios.defaults.baseURL = "https://hn.algolia.com/api/v1"

class App extends React.Component{
    state = {
      stories: []
    }

    async componentDidMount(){
      let response = await axios.get("/search?query=react")
      this.setState({stories:response.data.hits})
    }

    render(){
      let content;
      if(this.state.stories.length > 0){
        content = <List stories={this.state.stories}></List>
      }
      else{
        content = <h2>Downloading...</h2>
      }
      return(
        <>
          <div>
            {content}
          </div>
        </>
      )
    }
}
export default App