const generateIdolGroup = async () => {
  const result = await fetch("https://randomuser.me/api/?results=4");

  const json = await result.json();
  console.log(json);

  return json.results;
};

export default generateIdolGroup;
