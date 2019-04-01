import React,{Component} from 'react'
import './styles.css'

class Todolist extends Component{
    constructor(props){
        super(props);

        this.state={
            userInput:'',
            list:[]
        }
    }

    refreshUserInput(input){
        this.setState({
            userInput:input
        })
    }

    save(value=this.state.list){
        localStorage.setItem('listTodos',JSON.stringify(value))
    }

    addToList(){
        let newValue1=this.state.userInput;
        if(newValue1){
        let auxList=this.state.list
        auxList.push(newValue1)
        this.setState({
            userInput:"",
            list:auxList
        })
        this.save()
        }else{
            alert("Digite algo para ser adicionado a lista de tarefas")
        }
    }

    changeTodo(oldValue){
        let newValue=this.state.userInput
        if(newValue){
            let auxList=this.state.list
            let pos=auxList.indexOf(oldValue)
            auxList[pos]=newValue

            this.setState({
                userInput:"",
                list:auxList
            })
            this.save()
        }else{
            alert("Digite algo para alterar esta tarefa")
        }
    }

    deleteTodo(value){
        let auxList=this.state.list;
        let pos=auxList.indexOf(value)
        auxList.splice(pos,1)
        this.setState({
            list:auxList
        })
        this.save()
    }

    deleteAllTodo(){
        
        if(this.state.list.length){
            let auxList=[]
            this.setState({
                list:auxList
            })
            this.save(auxList)
        }else{
            alert("Nenhuma tarefa para remover")
        }
    }

    getCacheList(){
        let auxList = JSON.parse(localStorage.getItem('listTodos'))
        if(auxList){
        this.setState({
            list:auxList
        })}
    }

    componentDidMount(){
        this.getCacheList();
    }

    render(){
        return(
            <div id="maintodolist">
                <div id="createtodo">
                        <input
                            onChange={(input)=>this.refreshUserInput(input.target.value)}
                            value={this.state.userInput}
                            type="text"/>
                        <button
                            onClick={()=>this.addToList()}
                        >Adicionar</button>
                </div>
                <div id="todolist">
                    {this.state.list.map((todo)=>(
                        <div className="todo">
                            <p className="textTodo">{todo}</p>
                            <button className="bTodo" onClick={()=>this.changeTodo(todo)}>Alterar</button>
                            <button className="bTodo" onClick={()=>this.deleteTodo(todo)}>Remover</button>
                        </div>
                    ))}
                    <button className="deleteAll"onClick={()=>this.deleteAllTodo()}>Remover tudo</button>
                </div>
            </div>
        );
    }
}

export default Todolist;