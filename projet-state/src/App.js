import React  from 'react';
import "./App.css";

export default class App extends React.Component {
  
  state = {
    fullName:"Yahyaoui Ramzi",
    bio:"I am ramzi I am 31 years old and I like sport",
    image :"/pic.jpg",
    profession:"manager in a private company",
    show: false,
    count : 0 ,
  }

  
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
  
  }

  
  render() {
    return(
      <div >
      <button style={{marginTop:"55px",backgroundColor:"#C1F4F0",fontSize:"large",fontWeight:"bold",marginLeft:"43%"}} onClick={()=>this.setState({show:!this.state.show})} >salem / filamen</button>
      <br/>
      <br/>
      
      <div style={{color:"black",fontWeight:"normal",textAlign:"center"}}>
I think you are interested in my profile because you have been looking at it for <span style={{color:"blue",fontWeight:"bolder"}} >{this.state.count} seconds</span>.</div>
      {this.state.show?
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderColor:"blue",borderRadius:"17px",width:"60%",height:"520px",margin:"auto",backgroundColor:"#F1F2E2 ",marginTop:"30px"}}>
        <h1> Name:  {this.state.fullName}</h1>
        <h4 style={{color:"#4E787B "}}>{this.state.bio}. </h4>
        <h2 style={{color:"black  "}}>Profession:  {this.state.profession}</h2>
        <img src={this.state.image} style={{width:"25%",height:"50%",borderRadius:"17px"}} alt="" />
      </div>
    :null
    }
    
    </div>
)
}
}

