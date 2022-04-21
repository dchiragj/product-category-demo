import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import '../setupTest'
import AddNewProduct from '../components/AddNewProduct'

let wrapper:any

describe('AddProduct test', () => {
  const mockSubmit = jest.fn()
  // window.alert = jest.fn()
  global.alert = jest.fn();
  // expect(global.alert).toHaveBeenCalledTimes(1);
  // const alert = jest.fn()
  // Object.defineProperty(window, 'alert', alert);
  beforeEach(() => {
    wrapper = mount(
        <BrowserRouter>
          <AddNewProduct />
        </BrowserRouter>
    )
  })

  it('should be called after input is filled', () => {
    // input name
    wrapper.find('#name').simulate('change', {
      target: {
        name: 'name',
        value: 'laptop'
      }
    })
    // input best price
    wrapper.find('#price').simulate('change', {
      target: {
        price: 'price',
        value: 'laptop'
      }
    })
    // input category
    wrapper.find('#category').simulate('change', {
      target: {
        category: 'category',
        value: 'laptop'
      }
    })
    // input desc
    wrapper.find('#description').simulate('change', {
      target: {
        description: 'description',
        value: 'laptop bekas'
      }
    })
    // input avatar
    wrapper.find('#avatar').simulate('change', {
      target: {
        avatar: 'avatar',
        value: 'laptop'
      }
    })
    // input developerEmail
    wrapper.find('#developerEmail').simulate('change', {
      target: {
        developerEmail: 'developerEmail',
        value: 'laptop'
      }
    })
  })

  it('should be action onSubmit form', () => {
    wrapper.find('#form-add').simulate('submit')
    // window.alert.mockClear()
  })
})
