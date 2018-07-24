import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {FIND_ALL_WIDGETS,DELETE_WIDGET,ADD_WIDGET,SAVE} from "./constants/index";
import {widgetReducer} from "./reducers/widgetReducer";
import {WidgetContainer} from "./components/widget";
import {findAllWidgets,addWidget,save} from "./actions/index";
import App from "./containers/widgetList";
/*const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets=>dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}

const addWidget = dispatch => (

    dispatch({type: ADD_WIDGET})
)

const save = dispatch => (
    dispatch({
        type: SAVE
    })
)*/
// e => (
//     this.props.dispatch({
//         type: 'ADD_WIDGET'
//     })
// )


// let initialState = {
//     widgets: [
//         {id: 0, text: 'Widget 1'},
//         {id: 1, text: 'Widget 2'},
//         {id: 2, text: 'Widget 3'}
//     ]
// }




/*const Widget = ({widget, dispatch}) =>
    (
        <li> {widget.id} {widget.text}
            <button onClick= {e => (
                dispatch({
                    type: DELETE_WIDGET, id: widget.id
                })
            )}>Delete</button>
        </li>
    )

//
// let idAutoIncrement = 3;



const WidgetContainer = connect()(Widget)*/
/*
class WidgetList extends Component {
    constructor(props){
        super(props);
        this.props.findAllWidgets();
    }

    render(){
        return(
            <div>
                <h1> Widget List {this.props.widgets.length} </h1>
                <button onClick={this.props.save}>
                    Save
                </button>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         key={widget.id} />
                    ))}
                </ul>

                <button onClick={this.props.addWidget}>Add Widget</button>
            </div>
        )
    }

}

const stateToPropertiesMapper = (state) => (
    {
        widgets: state.widgets
    }
)

const dispatcherToPropsMapper = dispatch => (
    {
        findAllWidgets: () => findAllWidgets(dispatch),
        addWidget: () => addWidget(dispatch),
        save: () => save(dispatch)
    }
)



const App = connect(stateToPropertiesMapper,dispatcherToPropsMapper) (WidgetList)

*/


/*const widgetReducer = (state = {widgets: []}, action) =>
{
    switch(action.type){
        case SAVE:

            fetch('http://localhost:8080/api/widget/save',{
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            })


            return state;
        case FIND_ALL_WIDGETS:
            return{
                widgets: action.widgets
            }
        case DELETE_WIDGET:
            //alert('deleting widget');
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }
        case ADD_WIDGET:
            // alert('adding widget')
            return {
                widgets: [
                    ...state.widgets,
                    {id: state.widgets.length+1 , text: 'New Widget'}
                ]
            }

        default:
            return state;
    }
}*/



let store = createStore(widgetReducer)

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)















