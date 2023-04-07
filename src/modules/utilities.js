export const editIndex = (arrayOfObject) => {
  arrayOfObject.map((task, i) => {
    task.index = i + 1;
    return arrayOfObject;
  });
};

export const checkboxFunction = (checkbox, arrayOfObject) => {
  checkbox.forEach((check, i) => {
    check.addEventListener("change", (e) => {
      if (e.target.checked) {
        e.target.closest("li").classList.add("checked");
      } else {
        e.target.closest("li").classList.remove("checked");
      }
      if (check.checked) arrayOfObject[i].completed = true;
      else arrayOfObject[i].completed = false;
    });
  });
};
