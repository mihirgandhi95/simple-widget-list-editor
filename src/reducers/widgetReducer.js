
// import {FIND_ALL_WIDGETS, DELETE_WIDGET, ADD_WIDGET, SAVE, HEADING_SIZE_CHANGED} from "../constants/index";

import * as constants from "../constants/index"




export const widgetReducer = (state = {widgets: [], preview: false}, action) =>
{
    let newState
    switch(action.type){




        case constants.HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
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


        case constants.PARAGRAPH_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PARAGRAPH_TEXT_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PARAGRAPH_SIZE_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.size = action.size
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.LIST_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LIST_TEXT_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.IMAGE_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.IMAGE_URL_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.src = action.src
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.link = action.link
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LINK_URL_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.link = action.link
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LIST_TYPE_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.listType = action.listType
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PREVIEW:
           /* newState = Object.assign({}, state)
            newState.preview = !state.preview*/
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.MOVE_UP:
            let widgets = state.widgets;
            var state = JSON.parse(JSON.stringify(state));

            let index = widgets.indexOf(action.widget);
            widgets.move(index, index - 1);
            widgets= widgets.splice(0);
            state.widgets=widgets;
            return state;


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
            alert('saving to database!');
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
                    {
                        id:state.widgets.length+1 ,
                        text: 'New Widget',
                        widgetType: 'Paragraph',
                        size: '2',
                        name: 'Widget Name',
                        listType: 'ordered',
                        src: '',
                        link: '',


                    }
                ]
            }

        default:
            return state;
    }
}