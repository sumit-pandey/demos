// import React, { Component } from "react";
// // import { Router, Link } from "@reach/router";
// import "./App.css";
// // import Article from "./article/article";
// // import Article1 from "./article1/article1";

// class App extends Component {
//   state = {
//     content: "",
//     isLoaded: false
//   };
//   componentDidMount() {
//     const regex = /(<([^>]+)>)/gi;

//     fetch("http://localhost:8000/wp-json/wp/v2/posts/")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         this.setState({
//           content: data[0].content.rendered.replace(regex, ""),
//           isLoaded: true
//         });
//       });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.isLoaded ? (
//           <p>{this.state.content}</p>
//         ) : (
//           <p>Loading.....</p>
//         )}
//         <Link to="article1" >Click</Link>
//         <Router>
//           <Article1 path="article1"/>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import GetPosts from "./article/article";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <GetPosts />
    </div>
  </ApolloProvider>
);
export default App;
