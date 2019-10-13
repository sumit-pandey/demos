// import React, { useState, useEffect, Fragment } from 'react';

// function Article1(){
//     let [content, updateContent] = useState("Loading...");
//     let [heading, updateHeading] = useState("");
//     useEffect(()=>{
//         const regex = /(<([^>]+)>)/ig;
//         fetch("/wp-json/wp/v2/posts")
//         .then(response=>response.json())
//         .then(data=>{
//            updateContent(content=data[0].content.rendered.replace(regex, ""))
//            updateHeading(heading=data[0].title.rendered)
//         })
//     },[])
//     return (
//         <Fragment>
//             <h1>
//                 {heading}
//             </h1>
//             <p>
//                 {content}
//             </p>
//         </Fragment>
//     )
// }
// export default Article1;

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function GetPosts() {
  const { loading, error, data } = useQuery(gql`
    {
      posts {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
console.log(data)
  return (
    <div>
      {data.posts.edges.map((item,id) => {
        return <li key={id}>{item.node.content}</li>;
      })}
    </div>
  );
}
export default GetPosts;
