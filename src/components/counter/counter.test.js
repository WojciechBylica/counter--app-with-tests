import Counter from './counter';
import { shallow } from 'enzyme';
import React from 'react';

describe('Counter component', () => {
  it('should have initial state 0 if no start props provided', () => {
    const wrapper = shallow(<Counter />);
    const result = wrapper.find('p');
    expect(result.text()).toBe('0');
  });

  it('should have initial state 10 if props start=10 provided', () => {
    const wrapper = shallow(<Counter start={10} />);
    const result = wrapper.find('p');
    expect(result.text()).toBe('10');
  });

  it('should have addition and subtraction buttons', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.containsMatchingElement(<button>+</button>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<button>-</button>)).toEqual(true);
  });

  it("should increment result if '+' button is clicked", () => {
    const wrapper = shallow(<Counter />);
    let result = wrapper.find('p');
    const button = wrapper.find('[data-test="additionButton"]');
    expect(result.text()).toBe('0');
    button.simulate('click');
    result = wrapper.find('p');
    expect(result.text()).toBe('1');
  });

  it("should decrease result if '-' button is clicked", () => {
    const wrapper = shallow(<Counter />);
    let result = wrapper.find('p');
    const button = wrapper.find('[data-test="subtractionButton"]');
    expect(result.text()).toBe('0');
    button.simulate('click');
    result = wrapper.find('p');
    expect(result.text()).toBe('-1');
  });

  it('should change initial state when number provided in input and button clicked', () => {
    const wrapper = shallow(<Counter start={10} />);
    let result = wrapper.find('p');
    let input = wrapper.find('[data-test="input"]');
    expect(result.text()).toBe('10');
    input.simulate('change', {
      target: { value: '2' },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    result = wrapper.find('p');
    expect(result.text()).toBe('2');
  });

  it('should change result to initial state after clicking Reset button', () => {
    const wrapper = shallow(<Counter start={10} />);
    let result = wrapper.find('p');
    const resetButton = wrapper.find('[data-test="resetButton"]');
    const additionButton = wrapper.find('[data-test="additionButton"]');
    expect(result.text()).toBe('10');
    additionButton.simulate('click');
    result = wrapper.find('p');
    expect(result.text()).toBe('11');
    resetButton.simulate('click');
    result = wrapper.find('p');
    expect(result.text()).toBe('10');
  });
});
