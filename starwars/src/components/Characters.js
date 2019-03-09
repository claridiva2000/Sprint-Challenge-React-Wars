import React from "react";

import "./StarWars.css"
function Characters(props){
  console.log(props);
  return(
<div className="char-card">
{/* <img src="https://vignette.wikia.nocookie.net/lego/images/6/6e/29233146812_13b19275a0_b.jpg/revision/latest?cb=20160901112919"></img> */}
<div className="char-info">
<h2>{props.star.name}</h2>
<p><strong>Birth Year :</strong> {props.star.birth_year}</p>
<p><strong>gender : </strong>{props.star.gender} </p>
<p><strong>Height : </strong>{props.star.height} cm.</p>
</div>
</div>
  );
}

export default Characters;