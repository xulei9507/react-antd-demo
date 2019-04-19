import React from 'react'
import Child from './Child'
// import './index.css'
import './index.less'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    // state={
    //     count:0
    // }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        });
    }
    render(h) {
        let style={
            padding:30
        }

        // return <div style={{padding:30}}>
        // return <div style={style}>
        return <div className="content">
            <p>React生命周期介绍</p>
            {/* this指组件的实例 */}
            <button onClick={this.handleAdd}>点击</button>
            <button onClick={this.handleClick.bind(this)}>点击</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}