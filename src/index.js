/**
 * https://randomuser.me/api/?results=4
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Idol from "./components/Idol";
import generateIdolGroup from "./generateIdolGroup";
import "./styles.css";

const App = () => {
  const [group, setGroup] = useState(null);

  const generatorClick = async () => {
    const result = await generateIdolGroup();
    setGroup(result);
  };

  // let idols = [];
  // if(group) {
  //   for (let index = 0; index < group.length; index++) {
  //      const idol = group[index];

  //      idols[index] = (
  //       <Idol
  //         imageUrl={idol.picture.large}
  //         name={idol.name.first}
  //         gender={idol.gender}
  //         age={idol.dob.age}
  //       />
  //     );
  //   }
  // }

  const idols = group?.map((idol) => {
    return (
      <Idol
        key={idol.email}
        imageUrl={idol.picture.large}
        name={idol.name.first + idol.name.last}
        gender={idol.gender}
        age={idol.dob.age}
      />
    );
  });

  return (
    <div>
      <button onClick={generatorClick}>아이돌 생성기</button>
      {idols}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * 
------

  const [group, setGroup] = useState(null);

  const generatorClick = async () => {
    const result = await generateIdolGroup();
    setGroup(result);
  };

-----    
-----
<button onClick={generatorClick}>
  CreateIdolGroup
</button>

----

{group && (
  <div>
    <Idol
      imageUrl={group[0].picture.large}
      name={group[0].name.first + group[0].name.last}
    />
  </div>
)}

-----

const idols = group?.map((idol) => {
    return (
      <Idol
        key={idol.email}
        imageUrl={idol.picture.large}
        name={idol.name.first + idol.name.last}
        gender={idol.gender}
        age={idol.dob.age}
      />
    );
  });

 */
