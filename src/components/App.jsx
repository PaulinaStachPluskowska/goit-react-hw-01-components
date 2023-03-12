import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList} from "./Friends/FriendList";
import { TransactionHistory } from "./Transactions/Transactions";
import user from '../data/user.json';
import statistics from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
    style={{
      padding: 50,
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 75,
      color: 'white',
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
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
