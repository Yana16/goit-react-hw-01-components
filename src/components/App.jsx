import React from 'react';
import Profile from "../components/Profile/Profile";
import user from "../data/user.json";
import Statistics from "../components/Statistics/Statistics";
import statdata from "../data/statdata.json";
import FriendList from "../components/FriendList/FriendList";
import friends from "../data/friends.json";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json";


export const App = () => {
  return (
    <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40',
        color: '#010101',
        paddingTop: '100px',
      }}
>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers = {user.stats.followers}
          views = {user.stats.views}
          likes = {user.stats.likes}
        />

      <Statistics stats={statdata}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
    </>
  );
};
