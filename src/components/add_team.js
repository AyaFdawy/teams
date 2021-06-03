import React, { Component } from 'react';
import axios from 'axios';


export default class Add extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            description:'',
            img:''
        }
    }
    Name = (event)=>{
        this.setState({
            name :event.target.value
        })
    }
    Description= (event)=>{
        this.setState({
            description :event.target.value
        })
    }
    Image = (event)=>{
        this.setState({
            img :event.target.value
        })
    }
    Submit = event =>{
        axios.post(`http://localhost:3005/teams/`,{
            name:this.state.name,
            description:this.state.description,
            cover:this.state.img
 
        })
        .then(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
     }


    render() {
            return (
                <div  style={{backgroundColor:'rgb(181, 193, 221)' , height:'300px', width:'100%', padding:'50px'}}>
                    
                    <form onSubmit={this.Submit}>
                        
                            <div className="row d-flex  ">
                                <div className="col mt-6">
                                <input type="input" className=" btn-outline-Info"  placeholder="Enter Team Name " required="required"
                                    value={this.state.name} onChange={this.Name}/>
                                </div>
                            </div>
                            <div className="row d-flex  ">
                                <div className="col mt-6">
                                <input type="input" className=" btn-outline-Info"  placeholder="Enter Team Description " required="required"
                                    value={this.state.description} onChange={this.Description}/>
                                </div>
                            </div>
                            
                            <div className="custom-file mt-3 ">
                                <input type="file" className='btn-outline-Info w-50' accept="image/png, image/jpeg , image/jpg"
                                value={this.state.img} required="required" onChange={this.Image}/>
                            </div>
                            <input type="submit" value="Add Team" className=" btn-outline-primary  text-dark w-25"  />
                     
                    </form>
                </div>
            )
        }
    }