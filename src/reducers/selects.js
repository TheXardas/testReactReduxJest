import * as types from '../constants/ActionTypes';

const initialState = {
    selects: {
        'mark': false,
        'series': false,
        'model': false,
        'engine': false
    }
};

export default function selects(state = initialState, action) {
    switch (action.type) {
        case types.SET_SELECT_VALUE:
            let newValues = {};
            switch (action.select.key) {
                case 'mark':
                    newValues = {
                        'mark': action.select.value,
                        'series': false,
                        'model': false,
                        'engine': false
                    }
                    break;
                case 'series':
                    newValues = {
                        'mark': state.selects.mark,
                        'series': action.select.value,
                        'model': false,
                        'engine': false
                    }
                    break;
                case 'model':
                    newValues = {
                        'mark': state.selects.mark,
                        'series': state.selects.series,
                        'model': action.select.value,
                        'engine': false
                    }
                    break;
                case 'engine':
                    newValues = {
                        'mark': state.selects.mark,
                        'series': state.selects.series,
                        'model': state.selects.model,
                        'engine': action.select.value
                    }
                    break;
            }
            return Object.assign(
                {},
                state,
                {
                    selects: Object.assign(
                        {},
                        newValues
                    )
                }
            )

        default:
            return state;
    }
}