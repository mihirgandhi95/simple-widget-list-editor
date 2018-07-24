
// import {FIND_ALL_WIDGETS, DELETE_WIDGET, ADD_WIDGET, SAVE, HEADING_SIZE_CHANGED} from "../constants/index";

import * as constants from "../constants/index"




export const widgetReducer = (state = {widgets: [], preview: false}, action) =>
{
    let newState
    switch(action.type){


        case constants.PREVIEW:
           /* newState = Object.assign({}, state)
            newState.preview = !state.preview*/
            return {
                widgets: state.widgets,
                preview: !state.preview
            }


        case constants.HEADING_TEXT_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.HEADING_SIZE_CHANGED:
           // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.size = action.size
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState={
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:

            fetch('http://localhost:8080/api/widget/save',{
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            })


            return state;
        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets;
            return newState;
            return{
                widgets: action.widgets
            }
        case constants.DELETE_WIDGET:
            //alert('deleting widget');
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }
        case constants.ADD_WIDGET:
            // alert('adding widget')
            return {
                widgets: [
                    ...state.widgets,
                    {id: state.widgets.length+1 , text: 'New Widget',
                    widgetType: 'Paragraph',
                    size: '2'}
                ]
            }

        default:
            return state;
    }
}