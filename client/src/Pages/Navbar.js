
const NavBar = function(props) {
    return (
    <div className="header">
        <div className="nav-bar py-3">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              
              <a className="navbar-brand mx-auto" href="#">
                <div className = "d-inline my-auto">{props.me} ACE • GAMER • APP</div>
                <div className = "d-inline my-auto"></div><img src={require('../Images/logo.png')} alt='logo' width={40}/>
                </a>
                <div className="navbar-info" href = "#">
                  <a className = "d-inline justify-content-end"></a><img src={require('../Images/information.png')} alt='information' width={25}/>
                </div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    
    );
}



export default NavBar;
