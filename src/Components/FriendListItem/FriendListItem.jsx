import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classes = clsx(isOnline ? [css.onLine] : [css.offLine]);
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={classes}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem;
