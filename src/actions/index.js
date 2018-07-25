// import {ADD_WIDGET,FIND_ALL_WIDGETS,HEADING_SIZE_CHANGED, DELETE_WIDGET,SAVE} from "../constants/index";

import * as constants from "../constants/index";

export const headingSizeChanged =(dispatch,widgetId, newSize) => dispatch(
    {
        type: constants.HEADING_SIZE_CHANGED, id:widgetId, size: newSize
    }
)

export const headingTextChanged =(dispatch,widgetId, newText) => dispatch(
    {
        type: constants.HEADING_TEXT_CHANGED, id:widgetId, text: newText
    }
)

export const headingNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.HEADING_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const paragraphSizeChanged =(dispatch,widgetId, newSize) => dispatch(
    {
        type: constants.PARAGRAPH_SIZE_CHANGED, id:widgetId, size: newSize
    }
)

export const paragraphTextChanged =(dispatch,widgetId, newText) => dispatch(
    {
        type: constants.PARAGRAPH_TEXT_CHANGED, id:widgetId, text: newText
    }
)

export const paragraphNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.PARAGRAPH_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const listTypeChanged =(dispatch,widgetId, newType) => dispatch(
    {
        type: constants.LIST_TYPE_CHANGED, id:widgetId, listType: newType
    }
)

export const listTextChanged =(dispatch,widgetId, newText) => dispatch(
    {
        type: constants.LIST_TEXT_CHANGED, id:widgetId, text: newText
    }
)

export const listNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.LIST_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const imageURLChanged =(dispatch,widgetId, newURL) => dispatch(
    {
        type: constants.IMAGE_URL_CHANGED, id:widgetId, src: newURL
    }
)

export const imageNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.IMAGE_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const linkChanged =(dispatch,widgetId, newLink) => dispatch(
    {
        type: constants.LINK_URL_CHANGED, id:widgetId, link: newLink
    }
)

export const linkNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.LINK_NAME_CHANGED, id:widgetId, name: newName
    }
)



export const incrementPos =(dispatch,widget) => dispatch(
    {
        type: constants.MOVE_UP, widget:widget
    }
)

export const decrementPos =(dispatch,widget) => dispatch(
    {
        type: constants.MOVE_DOWN, widget:widget
    }
)






export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets=>dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}

export const addWidget = dispatch => (

    dispatch({type: constants.ADD_WIDGET})
)

export const save = dispatch => (
    dispatch({
        type: constants.SAVE
    })
)

export const preview = dispatch => (
    dispatch({
        type: constants.PREVIEW
    })
)