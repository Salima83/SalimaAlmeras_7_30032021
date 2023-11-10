import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
            <span> Suggestions</span>
            <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1771&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="travaille entre copain" />
              <span>Pierre</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>

          </div>
          </div>
          <div className="user">
          <div className="userInfo">
              <img src="https://media.istockphoto.com/id/1450770697/fr/photo/comptable-financier-s%C3%A9rieux-et-concentr%C3%A9-sur-la-paperasse-%C3%A0-lint%C3%A9rieur-du-bureau-homme-m%C3%BBr.jpg?s=1024x1024&w=is&k=20&c=l0yph79VXkrz06taWfRclsCrBEq6LAcUf-htV7k2GzI=" alt="travaille entre copain" />
              <span>Elie</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
          </div>
        </div>
        <div className="item">
          <span>Activitées</span>
          <div className="user">
          <div className="userInfo">
              <img src="https://media.istockphoto.com/id/1450770697/fr/photo/comptable-financier-s%C3%A9rieux-et-concentr%C3%A9-sur-la-paperasse-%C3%A0-lint%C3%A9rieur-du-bureau-homme-m%C3%BBr.jpg?s=1024x1024&w=is&k=20&c=l0yph79VXkrz06taWfRclsCrBEq6LAcUf-htV7k2GzI=" alt="travaille entre copain" />
              <p>
              <span>Elie</span> ils ...
              </p>
          </div>
          <span> 1 min ago </span>
          </div>
          <div className="user">
          <div className="userInfo">
              <img src="https://media.istockphoto.com/id/1289220949/fr/photo/femme-de-sourire-r%C3%A9ussi-utilisant-des-lunettes-sur-le-mur-gris.jpg?s=1024x1024&w=is&k=20&c=BgyEAkGVw2kXNixTK3YxhgqJcoRW43FXO7ajqkimNOg=" alt="travaille entre copain" />
              <p>
              <span>Anna</span> ils ...
              </p>
          </div>
          <span> 1 min ago </span>
          </div>
          <div className="user">
          <div className="userInfo">
              <img src="https://media.istockphoto.com/id/1365436662/fr/photo/fructueux-partenariat.jpg?s=1024x1024&w=is&k=20&c=Yd57sKfruyhca6kiR0G1fu2Omcz942Uz7BnTCK-f3TI=" alt="travaille entre copain" />
              <p>
              <span>Sarah</span> ils ...
              </p>
          </div>
          <span> 1 min ago </span>
          </div>
        </div>
        <div className="item">
          <span> Online Friends</span>
          <div className="user">
          <div className="userInfo">
              <img src="https://media.istockphoto.com/id/1365436662/fr/photo/fructueux-partenariat.jpg?s=1024x1024&w=is&k=20&c=Yd57sKfruyhca6kiR0G1fu2Omcz942Uz7BnTCK-f3TI=" alt="travaille entre copain" />
              <div className="online"/>
              <span>Sarah</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
  

};
export default RightBar