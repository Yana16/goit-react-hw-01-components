import React from 'react';
import Profile from "../components/Profile/Profile";
import user from "../Data/user.json";
import Statistics from "../components/Statistics/Statistics";
import statdata from "../Data/statdata.json";
import FriendList from "../components/FriendList/FriendList";
import friends from "../Data/friends.json";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import transactions from "../Data/transactions.json";


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
