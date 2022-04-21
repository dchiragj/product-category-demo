import React from 'react'
import { shallow } from 'enzyme'
import '../setupTest'
import Categories from '../components/Categories'

describe('Categories test', () => {
  it('should render the component categories', () => {
    const wrapper = shallow(<Categories />)
    expect(wrapper).not.toBe(null)
  })
})