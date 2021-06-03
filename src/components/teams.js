import React ,{Component} from 'react';
import { NavLink } from 'react-router-dom';
 import './teamlist.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.min.js';
export default class Teams extends Component{
    constructor(){
        super()
        this.state={
            teams:[]
        }
    }
    handleDelete=id=>{
      const filteredItems=this.state.teams.filter(item=> item.id !==id);
      this.setState({teams:filteredItems})
    }
    renderTeams({teams}){
    if(teams){
        return teams.map((item)=>{
            return(
               
                // <ul  style={{listStyleType:"none",display:"flex"}}>
                // <div style={{position:"relative"}} key={item.id}>
                //     <li>
                //     <NavLink to={`teams/${item.id}`}>
                //         <img style={{width:"40%",marginLeft:"210px"}} src={`/images/${item.cover}.jpg`} />
                //        <div style={{position:"absolute",backgroundColor:"#3366ff",color:"white",left:"210px",bottom:"0px",padding:"10px 20px"}}>
                //             {item.name} </div>
                //         </NavLink>
                       
                //        </li> 
                // </div>
                // </ul>
                
                <div className="col-12 col-md-4  mt-5 mx-auto">
                <div className="card-container"  >
                <div className="card" >
                  <div className="front">
                    <div className="cover">
                    <NavLink to={`teams/${item.id}`}>
                      <img src={`/images/${item.cover}.jpg`} />
                      </NavLink>
                    </div>
                    <div className="user">
                      <img className="img-circle" src={`/images/${item.cover}.jpg`}  />
                    </div>
                    <div className="content">
                      <div className="main">
                        <h3 className="name">{item.name}</h3>
                      </div>
                      <div className="footer">
                        <div className="rating">
                          <i className="fa fa-mail-forward" /> Auto Rotation
                        </div>
                      </div>
                    </div>
                  </div> {/* end front panel */}
                  
                  <div className="back">
                    <div className="header">
                      <h3 className="motto"> <NavLink to={`teams/${item.id}`}>view team</NavLink></h3>
                    </div>
                    <div className="content">
                      <div className="main">
                        <h4 className="text-center">Team Description</h4>
                        <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>
                        <div className="stats-container">
                          <div className="stats">
                          <h6>Update</h6>
                <div className="todo-icon">
                <span className="mx-2 text-success" >
                <i className="fas fa-pen" />
                </span>
                </div>
                          </div>
                          <div className="stats">
                          <h6>view member</h6>
                <div className="todo-icon">
                <i className="fas fa-eye"></i>
                </div>
                          </div>
                          
                          <div className="stats">
                          <h6>Leave</h6>
                <div className="todo-icon">
                <span className="mx-2 text-danger" onClick={this.handleDelete}>
                <i className="fas fa-trash" />
                </span>
                </div>
                
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a href="https://creative-tim.com" className="facebook"><i className="fa fa-facebook fa-fw" /></a>
                        <a href="https://creative-tim.com" className="google"><i className="fa fa-google-plus fa-fw" /></a>
                        <a href="https://creative-tim.com" className="twitter"><i className="fa fa-twitter fa-fw" /></a>
                      </div>
                    </div>
                  </div> {/* end back panel */}
                </div> {/* end card */}
              </div> 
              </div>
              
                // <NavLink to={`/teams/${item.id}`} key={item.id}>
                //         <div className="card col-md-2">
                //             <div className="row">
                //                 <img className="card-image-top" src={`/images/${item.cover}.jpg`} />
                //                 <span className="topTemp">{item.name}</span>
                //             </div>
                //         </div>
                //     </NavLink>
            )
        })
    }
    return 'No Teams'
    }
    render(){
        return(
            <div  className="col">
               <div className="d-flex flex-row">
              {this.renderTeams(this.state)}
              </div>
                {/* {<NavLink to='/' className="text-center" style={{color:'gray',marginLeft:"350px"}}> Teams</NavLink>} */}
                <div className="d-flex" style={{margin:"10px"}}>
               <div> <h2 className="text-center" style={{color:'gray',marginLeft:"350px"}}></h2></div>
                <div><NavLink to= {"/teams/teams/form"}> 
                <button className='btn btn-secondary ' style={{color:'#3366ff',background:'rgb(181, 193, 221)',marginLeft:"110px",width:"180px"}}>Add Team</button>
                </NavLink></div>
                </div>
               
            </div>
        )
    }
    
    componentDidMount(){
        fetch('http://localhost:3004/teams',{method:"GET"})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            this.setState({teams:data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}