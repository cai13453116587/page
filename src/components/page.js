import React,{Component} from "react"



function page(com){
    return class extends Component{
        state={
            num:0,
            Com:com,
            value:"5",
            list:[]
        }
            render(){
                let {num,Com,value,list} = this.state;
                let listPage = list.slice(num*value,(num+1)*value)
                let items = [];
                for(let i=0; i < Math.ceil(list.length/value); i++){
                            items.push(i+1)   
                        }
                return <>
                <Com {...this.props} ref="page" listPage={listPage}></Com>
                <select value={value} onChange={(e)=>{
              this.setState({
                  value:e.target.value
              })
                }}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>30</option>
                </select>
                <button onClick={()=>{
                    num = num > 0  ? num-1 : 0 ;
                    this.setState({num:num})
                    
                }}>上</button>
                <span>{"第"+(num+1)+"页"}</span>
                <button onClick={()=>{
                    num = list.length <= (num+1) * value ? num : num+1;
                    this.setState({num:num})
                }}>下</button>
                {
                     items.map((item,index)=><span key={index}>{item}</span>)
                }
                </>
            }
            componentDidMount(){
                this.setState({list:this.refs.page.state.list})
            }
    }
}
export default page;