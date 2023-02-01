import React from 'react';
import style from '../FriendList/friendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';



const FriendList = ({ friends }) => {
  const friendItem = friends.map(({id, avatar, name, isOnline }) => (
<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return (

<ul className={style.list}>{friendItem}

</ul>

  )};

  FriendList.defaultProps = {
    friends: [],
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.string,
        id: PropTypes.number.isRequired,
      })
    ),
  };


  export default FriendList;