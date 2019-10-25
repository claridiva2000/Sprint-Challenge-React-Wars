import React, { Component } from 'react';

import Pics from "./Pics"
import './StarWars.css';

const pics = [
  {img: "components/img/luke.jpg"},
  {img: "starwars\src\components\img\c3po.jpg"},
  {img: "starwars\src\components\img\r2d2.jpg"},
  {img: "starwars\src\components\img\dathvader.jpg"},
  {img: "starwars\src\components\img\leia.jpg"},
  {img: "starwars\src\components\img\owenlars.jpg"},
  {img: "starwars\src\components\img\beru.JPG"},
  {img: "starwars\src\components\img\r5d4.jpg"},
  {img: "starwars\src\components\img\biggs.png"},
  {img: "starwars\src\components\img\obiwan.png"}
]

class Pictures extends Component {
  constructor() {
    super();
    this.state = {
      legopics: pics
    };
  }


  render() {
    return (
       
        <div className="pic-list"> 
 <img id="luke" src="https://vignette.wikia.nocookie.net/lego/images/6/6e/29233146812_13b19275a0_b.jpg/revision/latest/scale-to-width-down/250?cb=20160901112919"></img>
 <img id="c3po" src="https://img.brickowl.com/files/image_cache/large/lego-c-3po-minifigure-25.jpg"></img>
 <img id="r2d2" src="https://img.brickowl.com/files/image_cache/large/lego-r2-d2-set-30611-15.jpg"></img>
 <img id="darth" src="https://target.scene7.com/is/image/Target/GUEST_d01667f0-8d07-4e94-8573-98742ed9258b?wid=1400&fmt=webp"></img>
 <img id="leia" src="http://img.bricklink.com/ItemImage/MN/0/sw0878.png"></img>
 <img id="owen"src="http://img.bricklink.com/ItemImage/MN/0/sw0559.png"></img>
 <img id="beru"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m0gNqy_L7GkPwG4Ye3qbSGjLyVGnwLiQqFIWm7eKvHMQFtOI"></img>
 <img id="r5d4" src="http://images.shoutwiki.com/lego/thumb/b/b3/R5D4-75059.jpg/1200px-R5D4-75059.jpg"></img>
 <img id="biggs"src="https://i.ebayimg.com/images/i/253947957886-0-1/s-l1000.jpg"></img>
 <img id="obiwan" src="https://img.brickowl.com/files/image_cache/larger/lego-obi-wan-kenobi-minifigure-947561-25.jpg"></img>
</div>
 
    );
  }

}

export default Pictures;