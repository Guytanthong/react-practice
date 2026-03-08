import profilePic from './assets/images.jpg'



function Card(){
    return(
        <div className = "card">
            <img className="cardimg" src={profilePic} alt="profile picture">
            </img>
            <h2 className ="card-title">Tanthong</h2>
            <p className ="card-text">I'm a gradduate from Chulalongkorn</p>
        </div>
    );
}

export default Card