// import React, {Component, Fragment} from 'react';

// class Atricle extends Component{
//     state = {
//         content: "",
//         isLoaded: false
//     }
//     componentDidMount(){
//         const regex = /(<([^>]+)>)/ig;
//         fetch("/wp-json/wp/v2/posts")
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({
//                 content: data[0].content.rendered.replace(regex,""),
//                 isLoaded: true
//             })
//         })
//     }
//     render(){
//         return (
//             <Fragment>
//                {(this.state.isLoaded)? <p>{this.state.content}</p>: <p>Loading.....</p>}
//             </Fragment>
//         )
//     }
// }
// export default Atricle;