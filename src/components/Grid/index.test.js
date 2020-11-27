import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Grid from '.'

test('it matches snapshot', () => {
  const tree = renderer.create(<Grid />).toJSON()
  expect(tree).toMatchSnapshot()
})
