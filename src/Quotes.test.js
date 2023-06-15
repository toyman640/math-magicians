import React from 'react';
import renderer from 'react-test-renderer';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
import Quotes from './components/Quotes';

it('renders quote and author from API data', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify([
      {
        quote: 'Sample quote',
        author: 'Sample author',
      },
    ]),
  );

  let component;

  await act(async () => {
    component = renderer.create(<Quotes />);
  });

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
