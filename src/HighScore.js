import React ,{Component} from 'react';
class HighScore extends Component{
    render(){
        if(this.props.overTen){
            return(
                <div>
                <h1>beat the high score of 10</h1>
                    <button onClick={this.props.resetVal}>reset</button>
                </div>
            );
        }
        else 
            return null;
    }
}
export default HighScore;