import React ,{Component} from 'react';
var listOfAlbums = [];
export default class ArtistDetails extends Component{
    constructor(){
        super()
        this.state={
            team:{}
        }
    }
    renderTeam({team}){ 
        if({team}){
            return(
                <div className='alert alert-light text-center'>
                    <img className='text-center' style={{width:"100px",height:"100px"}} src={`/images/${team.cover}.jpg`} />
                    <h3> {team.name}</h3>
                    <p>{team.description} </p>
                </div>
            )
         }
         return 'No Teams'
    }
    
        
    
    render(){
        return(
            <div className="col">
              {this.renderTeam(this.state)}
              
            </div>
        )
    }
    allData(i) {
        return i.keys().map(i);
    }
    componentDidMount(){
        console.log(this.props.match.params['id'])
        fetch(`http://localhost:3004/teams/${this.props.match.params['id']}`,{method:"GET"})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            this.setState({team:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}