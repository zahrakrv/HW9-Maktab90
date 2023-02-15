`use strict`;
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(container, obj) {
  container.innerHTML = createObj(obj);
}
function createObj(obj) {
  let li = "";
  let ul;
  for (let key in obj) {
    li += "<li>" + key + createObj(obj[key]) + "</li>";
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}
createTree(container, data);
