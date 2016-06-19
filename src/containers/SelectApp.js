import * as React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import {CMultiSelect} from '../components';



class SelectApp extends React.Component {

    handleSelect = (key, selected) => {
        this.props.dispatch(
            Actions.setSelectValue({key: key, value: selected ? selected.value : false})
        );
    };
    
    render() {
        return (
            <div>
                <CMultiSelect
                    onChangeFunction={this.handleSelect}
                    selects={this.props.selects}
                />
            </div>

        )
    }
}

SelectApp.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    selects: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        selects: state.selects.selects
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectApp)
