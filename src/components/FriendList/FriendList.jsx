import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(({ id, name, isOnline, avatar }) => {
      return (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      );
    })}
  </ul>
);
export default FriendList;
