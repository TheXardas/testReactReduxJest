jest.unmock('../src/components/CSelect');
jest.unmock('react-select');

import * as React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CSelect from '../src/components/CSelect';

describe('CSelect', () => {

    it('shows label for values and can be cleared', () => {

        const optionsTest = [
            {value: '', label: '---'},
            {value: 'bmw', label: 'BMW'},
            {value: 'audi', label: 'Audi'}
        ];

        const select = TestUtils.renderIntoDocument(
            <CSelect
                id="markTest"
                onChangeFunction={() => void 0}
                options={optionsTest}
                value="bmw"
            />
        );

        // В компоненте будет отображаться соотвествующий label + "×" (для сброса выбора)
        expect(ReactDOM.findDOMNode(select).textContent).toEqual('BMW' + '×');

        // Сбрасываем выбор
        TestUtils.Simulate.click(
            TestUtils.findRenderedDOMComponentWithClass(select, 'Select-clear')
        );

        // Проверяем стало ли как было по умолчанию
        setTimeout(() => expect(ReactDOM.findDOMNode(select).textContent).toEqual('Выберите'), 100);
    });
});
