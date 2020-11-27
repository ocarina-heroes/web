import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Card from '.'

test('it matches snapshot', () => {
  const tree = renderer.create(<Card />).toJSON()
  expect(tree).toMatchSnapshot()
})
