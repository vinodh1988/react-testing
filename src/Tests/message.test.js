import {shallow,mount} from 'enzyme';
import React from 'react';
import MessageBox from '../MessageBox';

describe("Message component testing",function(){
let wrapper;
    beforeEach(()=>{
       wrapper=shallow(<MessageBox message="World is big"/>);
    })

  it("test should work",function(){
     expect(wrapper).toMatchSnapshot();
  })

  it("Should have one h3",function(){
      expect(wrapper.find('h3').length).toBe(1);
  })

  it("should have World is big in h3",function(){
      expect(wrapper.find('h3').text()).toBe('World is big');
  })

  it("should Mount properly and have World is big inh3",function(){
       wrapper=mount(<MessageBox message="World is big"/>);
       expect(wrapper.find('h3').text()).toBe('World is big');
   

  })

})