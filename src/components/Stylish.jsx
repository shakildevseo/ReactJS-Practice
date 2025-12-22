import "./externalCss.css"

function Stylish(){
    return(
        <>
        {/* Inline CSS Start */}
        <h1  style={{backgroundColor : "black", color : "white", textAlign : "center", margin: "10px 0"}}>Hey This style from Inline CSS</h1>
         {/* Inline CSS End */}




          {/* External  CSS Start */}

          <h2 className="externalCss">Hey This Style From External File(External CSS)</h2>

           {/* External  CSS End  */}






          
        
        </>
    )
}

export default Stylish;