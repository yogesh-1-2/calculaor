import { render } from '@testing-library/react';
import React,{Component} from 'react';
class Button extends Component{
    render(){
        return(
            <div>
                <button Class="calc_button">click</button>
            </div>
        )
    }
}
export default Button;