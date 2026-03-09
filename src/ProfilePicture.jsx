function ProfilePicture() {

    const imgurl = './src/assets/images.jpg';


    const handleClick = (e) => {e.target.style.display = "none"};


    return(<img onClick = {(e)=> handleClick(e)} src ={imgurl}></img>);
}
export default ProfilePicture