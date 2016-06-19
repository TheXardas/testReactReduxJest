import * as React from 'react';
import {CSelect} from './';

export default class CMultiSelect extends React.Component {

    optionsMark = [
        {value: '', label: '---'},
        {value: 'bmw', label: 'BMW'},
        {value: 'audi', label: 'Audi'}
    ];
    optionsSeries = [];
    optionsModel = [];
    optionsEngine = [];

    getSeriesOptions = () => {
        if (!this.props.selects.mark) {
            return [];
        } else {
            if (this.props.selects.mark === 'bmw') {
                return [
                    {value: '', label: '---'},
                    {value: 'series-1', label: '1 series'},
                    {value: 'series-3', label: '3 series'}
                ]
            } else {
                return [
                    {value: '', label: '---'},
                    {value: 'a1', label: 'A1'},
                    {value: 'a3', label: 'A3'}
                ]
            }
        }
    };

    getModelOptions = () => {
        if (!this.props.selects.series) {
            return [];
        } else {
            let arr = [{value: '', label: '---'}];
            if (this.props.selects.series === 'series-1') {
                arr.push({value: '3-doors', label: '3 doors'}, {value: '5-doors', label: '5 doors'});
            }
            if (this.props.selects.series === 'series-1' || this.props.selects.series === 'series-3') {
                arr.push({value: 'coupe', label: 'Coupe'}, {value: 'cabrio', label: 'Cabrio'});
            }
            arr.push({value: 'sedan', label: 'Sedan'});
            if (this.props.selects.series === 'series-3') {
                arr.push({value: 'touring', label: 'Touring'});
            }
            if (this.props.selects.series === 'a3') {
                arr.push({value: 'sportback', label: 'Sportback'}, {value: 'cabriolet', label: 'Cabriolet'});
            }
            return arr;
        }
    };

    getEngineOptions = () => {
        if (this.props.selects.model && (this.props.selects.series === "series-3" || this.props.selects.series === "a3")) {
            let arr = [
                {value: '', label: '---'},
                {value: '25-petrol', label: '2.5 petrol'},
                {value: '30-petrol', label: '3.0 petrol'}
            ];
            if (this.props.selects.series === "series-3" && this.props.selects.model === "sedan") {
                arr.push({value: '30-diesel', label: '3.0 diesel'});
            }
            return arr;
        }
        return [];
    };

    render () {
        this.optionsSeries = this.getSeriesOptions();
        this.optionsModel = this.getModelOptions();
        this.optionsEngine = this.getEngineOptions();

        return (
            <div>
                <CSelect
                    id="mark"
                    onChangeFunction={this.props.onChangeFunction}
                    options={this.optionsMark}
                    value={this.props.selects.mark}
                />
                {this.optionsSeries.length
                    ? <CSelect
                        id="series"
                        onChangeFunction={this.props.onChangeFunction}
                        options={this.optionsSeries}
                        value={this.props.selects.series}
                        />
                    : ""
                }
                {this.optionsModel.length
                    ? <CSelect
                        id="model"
                        onChangeFunction={this.props.onChangeFunction}
                        options={this.optionsModel}
                        value={this.props.selects.model}
                    />
                    : ""
                }
                {this.optionsEngine.length
                    ? <CSelect
                        id="engine"
                        onChangeFunction={this.props.onChangeFunction}
                        options={this.optionsEngine}
                        value={this.props.selects.engine}
                    />
                    : ""
                }
            </div>

        )
    }
}

CMultiSelect.propTypes = {
    onChangeFunction: React.PropTypes.func.isRequired,
    selects: React.PropTypes.object
};

