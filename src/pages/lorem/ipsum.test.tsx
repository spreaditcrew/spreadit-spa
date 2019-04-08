import React from 'react';
import Ipsum from './ipsum';
import renderer from 'react-test-renderer';

describe('Routes', (): void => {
  test('something is happening', (): void => {
    const parameters: object = {
      router: { query: { id: 3 } },
    };

    const component = renderer.create(<Ipsum {...parameters} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
