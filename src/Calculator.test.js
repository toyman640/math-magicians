import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('updates the screen when buttons are clicked', () => {
  const component = renderer.create(<Calculator />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const button1 = component.root.findByProps({ children: '1' });
  button1.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const button2 = component.root.findByProps({ children: '2' });
  button2.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const button3 = component.root.findByProps({ children: '3' });
  button3.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const buttonPlus = component.root.findByProps({ children: '+' });
  buttonPlus.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const button4 = component.root.findByProps({ children: '4' });
  button4.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const buttonEquals = component.root.findByProps({ children: '=' });
  buttonEquals.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
