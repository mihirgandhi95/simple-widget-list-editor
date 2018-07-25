import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {save,findAllWidgets,addWidget} from "../actions/index";
import WidgetContainer from "../components/widget";
import * as actions from "../actions"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class WidgetList extends Component {
    constructor(props){
        super(props);
        this.props.findAllWidgets();
    }

    render(){
        return(
            <div>
                <h1> Widget List {this.props.widgets.length} </h1>
                <button className= "float-right btn btn-success" hidden = {this.props.previewMode} onClick={this.props.save}>
                    Save
                </button>
                <button className="float-right btn btn-warning" onClick={this.props.preview}>
                    Preview
                </button>
                <br/>
                <br/>

                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                       //  widgets = {widgets}
                                         preview = {this.props.previewMode}
                                         key={widget.id} />
                    ))}
                </ul>

                <button className="float-right btn btn-success" onClick={this.props.addWidget}>Add Widget</button>

            </div>
        )
    }

}

const stateToPropertiesMapper = (state) => (
    {
        widgets: state.widgets,
        previewMode: state.preview
    }
)



const dispatcherToPropsMapper = dispatch => (
    {
        findAllWidgets: () => actions.findAllWidgets(dispatch),
        addWidget: () => actions.addWidget(dispatch),
        save: () => actions.save(dispatch),
        preview: () => actions.preview(dispatch)
    }
)


const App = connect(stateToPropertiesMapper,dispatcherToPropsMapper) (WidgetList)

export default App;