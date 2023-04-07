// Deleting from List
const remove = (itemIndex, arrayOfObject) => {
  arrayOfObject.splice(itemIndex, 1);
  return arrayOfObject;
};

export default remove;
