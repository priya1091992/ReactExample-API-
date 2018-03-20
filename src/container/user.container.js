import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchUser} from '../actions/user.action'
import Loadable from 'react-loadable';

// dynamic import
const LoadableFooterComponent = Loadable({
  loader: () => import('./../component/footer.component'),
  loading() {
    return <div>Loading...</div>
  },
});

// dynamic import
const LoadableHeaderComponent = Loadable({
  loader: () => import('./../component/header.component'),
  loading() {
    return <div>Loading...</div>
  },
});


class UserDetail extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const { fetchUser } = this.props
    fetchUser()
  }

  render() {
    const { user, error } = this.props
    let mainView = null

    if (user) {
      mainView = user.map((value, i) => {
        return (
          <ul style={{'margin': '20px', 'listStyle': 'none'}} key={i}>
            <li>
              <img src={value.avatar} alt="boohoo"/>
              <span style={{'paddingLeft': '12px'}}>{value.first_name}  {value.last_name}</span>
            </li>
          </ul>
        )
      })
    } else if(error) {
      mainView = (
        <div>
          {`Error while fetching data`}
        </div>
      )
    }
    return (
      <div style={{'margin': '20px'}}>
        <LoadableHeaderComponent />
        {mainView}
        <LoadableFooterComponent />
      </div>
    );
  }
}

const bindAction = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

const mapStateToProps = state => ({
  user: state.UserReducer.user,
  error: state.UserReducer.err
});

export default connect(mapStateToProps, bindAction)(UserDetail);
