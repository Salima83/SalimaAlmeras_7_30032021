import "./leftBar.scss"
import reunionemployees from '../../assets/reunionemployees.jpg';
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Learning from "../../assets/12.png";
import Fund from "../../assets/13.png"


const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
      <div className="menu">
        <div className="user">
        <img src={reunionemployees} alt="reunion"/>
          <span>Sali</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Icon 1" className="icon"/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Icon 2" className="icon"/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="Icon 3" className="icon"/>
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Icon 4" className="icon"/>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Icon 5" className="icon"/>
            <span>Memories</span>
          </div>
          </div>
          <hr/>

          <div className="menu">
            <span>Your shorcuts</span>
            <div className="item">
            <img src={Events} alt="Icon 6" className="icon"/>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Icon 7" className="icon"/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Icon 8" className="icon"/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Icon 9" className="icon"/>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Icon 10" className="icon"/>
            <span>Messages</span>
          </div>
          </div>
          <hr/>
          <div className="menu">
            <span>Others  </span>
          <div className="item">
            <img src={Fund} alt="Icon 11" className="icon"/>
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Icon 12" className="icon"/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Learning} alt="Icon 13" className="icon"/>
            <span>Learning</span>
          </div>
        
       </div>
      </div>
      </div>
  );

};
export default LeftBar