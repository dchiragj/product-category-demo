import React from 'react'
import { shallow } from 'enzyme'
import '../setupTest'
import Products from '../components/Products'

describe('Products test', () => {
  it('should render the component products', () => {
    const wrapper = shallow(<Products />)
    expect(wrapper).not.toBe(null)
  })
})