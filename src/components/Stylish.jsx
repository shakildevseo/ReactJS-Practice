import "./externalCss.css"
import styles from "./stylish.module.css"

function Stylish(){


    // Javascript Object CSS
const myStyle = {
    backgroundColor : "yellow",
    color : "black",
    textAlign : "center",
    fontSize : "30px",
    margin : "10px 0"

}





    return(
        <>
        {/* Inline CSS Start */}
        <h1  style={{backgroundColor : "black", color : "white", textAlign : "center", margin: "10px 0"}}>Hey This style from Inline CSS</h1>
         {/* Inline CSS End */}




          {/* External  CSS Start */}

          <h2 className="externalCss">Hey This Style From External File(External CSS)</h2>

           {/* External  CSS End  */}



          {/* Javascript Object  Style Start */}

          <h2 style={myStyle}>Hey This Style From Javascript Object</h2>

           {/* Javascript Object  Style   End  */}


          {/* Module CSS Start */}

          <h2 className={styles.styleModule}>Hey This Style From Module CSS</h2>

           {/* Module CSS  End  */}


         



          
        
        </>
    )
}

export default Stylish;