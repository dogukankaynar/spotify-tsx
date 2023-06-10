import React from "react";
import styles from "./styles.module.css";

type ListItemProps = {
  item: any; // Music türüne göre güncelleyin
  index: number;
};

const SideBarListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={item.img} alt="" />
      </div>
        <p className={styles.artistName}>{item.artist_name}</p>
    </div>
  );
};

export default SideBarListItem;