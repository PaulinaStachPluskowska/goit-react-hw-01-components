import { Profile } from "./Profile";
import user from '../data/user.json';
import { Statistics } from "./Statistics";
import statistics from '../data/data.json';
import {FriendList} from "./FriendList";
// import { FriendListItem } from "./FriendItem";
import friends from '../data/friends.json';
import { TransactionHistory } from "./Transactions";
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
    style={{
      padding: 50,
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 50,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      color: '#010101',
      backgroundColor: 'lightgray',
    }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" statistics={statistics} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />


    </div>
  );
};
