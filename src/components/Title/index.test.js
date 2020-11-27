import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Title from '.'

test('it matches snapshot', () => {
  const tree = renderer.create(<Title />).toJSON()
  expect(tree).toMatchSnapshot()
})
