import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);
import {MessageRedux} from '../Redux/mappings/mapping';
import {MessageAction} from '../Redux/actions/messageAction'

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
        messages:{message:"World is big"}
      });

      store.dispatch = jest.fn();

      component = renderer.create(
        <Provider store={store}>
          <MessageRedux />
        </Provider>);
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(MessageAction());
    
  });


});