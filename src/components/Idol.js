/**
 * https://randomuser.me/api/?results=4
 */
import React from "react";

const Idol = (props) => {
  return (
    <div style={styles.container}>
      <img src={props.imageUrl} alt={props.name} />
      <div style={styles.info}>
        <div>Name: {props.name}</div>
        <div>Gender: {props.gender}</div>
        <div>Age: {props.age}</div>
      </div>
    </div>
  );
};

export default Idol;

const styles = {
  container: {
    display: "flex",
    paddingTop: 15
  },
  info: {
    paddingLeft: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
};
/**
import React from "react";

const Idol = (props) => {
  return (
    <div
      style={{
        display: "flex",
        borderWidth: 2,
        paddingTop: 10
      }}
    >
      <img src={props.imageUrl} alt={props.name} />
      <div
        style={{
          paddingLeft: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <div>Name: {props.name}</div>
        <div>Gender: {props.gender}</div>
        <div>Age: {props.age}</div>
      </div>
    </div>
  );
};

export default Idol;

 */
