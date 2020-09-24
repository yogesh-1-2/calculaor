import React , {Component} from 'react';
class Fucntions extends Component{
    constructor(props){
        super(props);
        this.state={
            answer : "nothing"
        };
    }
    handleClick=(operation,num1,num2)=>{
        if(operation==="+"){
            this.setState({
                answer : 1*num1+1*num2
            });
        }
        else if(operation==="-"){
            this.setState({
                answer : num1-num2
            });
        }
        else if(operation==="*"){
            this.setState({
                answer : num1*num2
            });
        }
        else{
            this.setState({
                answer : num1/num2
            });
        }
    }
    componentDidUpdate(){
        console.log(this.state.answer);
    }
    render(){
        return (
            <div>
                <button type="button" class="btn btn-outline-primary"
                    onClick={(e)=>this.handleClick("+",this.props.NumberOne,this.props.NumberTwo)}>+</button>
                <button type="button" class="btn btn-outline-primary"
                    onClick={(e)=>this.handleClick("-",this.props.NumberOne,this.props.NumberTwo)}>-</button>
                <br/>
                <button type="button" class="btn btn-outline-primary"
                    onClick={(e)=>this.handleClick("*",this.props.NumberOne,this.props.NumberTwo)}>x</button>
                <button type="button" class="btn btn-outline-primary"
                    onClick={(e)=>this.handleClick("/",this.props.NumberOne,this.props.NumberTwo)}>/</button>
                {(this.state.answer!=="nothing")?
                        <h3>The answer is {this.state.answer}</h3>:
                        null
                }
            </div>
        );
    }
}
export default Fucntions;