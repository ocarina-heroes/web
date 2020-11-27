import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Root, Main } from '.'

test('<Root/>> matches snapshot', () => {
  const tree = renderer.create(<Root />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('<Main/>> matches snapshot', () => {
  const tree = renderer.create(<Main />).toJSON()
  expect(tree).toMatchSnapshot()
})
