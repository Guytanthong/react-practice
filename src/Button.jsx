function Button(){

        const styles = {
            
                backgroundColor: "hsl(78, 75%, 55%)",
                padding : "10px 20px",
                borderRadius: "5px",
                border:"none",
                cursor: "pointer",
              
        }

        
        
        const handleClick = (e) => {
                e.target.textContent ="Ouch!"
                
        };
        


        return(
            <button onDoubleClick={(e) => handleClick(e)} style={styles} > click me</button>
            
        );
}

export default Button