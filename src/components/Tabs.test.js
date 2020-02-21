import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';
import tabsProp from './TabsProp';

describe('Tabs Component', () => {
  //Smoke Test
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test of the default tab
  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />)
    expect(tree).toMatchSnapshot()
  })
});
