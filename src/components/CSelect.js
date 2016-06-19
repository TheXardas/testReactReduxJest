import * as React from 'react';
import styles from '../theme/index.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class CSelect extends React.Component {
    render () {
         return (
             <Select
                 placeholder="Выберите"
                 searchable={false}
                 className={styles.select}
                 name={this.props.id}
                 options={this.props.options}
                 onChange={this.props.onChangeFunction.bind(this, this.props.id)}
                 value={this.props.value}
             />
         );
    }
}

CSelect.propTypes = {
    id: React.PropTypes.string.isRequired,
    onChangeFunction: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.any.isRequired
};

