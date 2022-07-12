var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var menu = [{
  name: "Banana",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
  price: 34,
  options: [{
    label: "Size",
    type: "radio",
    choices: ["S", "M", "L"]
  }, {
    label: "Dressing",
    type: "checkbox",
    choices: ["Olive Oil", "Ranch", "Mayo"]
  }]
}, {
  name: "Apple",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
  price: 94,
  options: [{
    label: "Color",
    type: "radio",
    choices: ["Red", "Yellow", "Green"]
  }, {
    label: "Dressing",
    type: "checkbox",
    choices: ["Olive Oil", "Ranch", "Mayo"]
  }]
}, {
  name: "Grape",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
  price: 19,
  options: [{
    label: "Size",
    type: "radio",
    choices: ["S", "M", "L"]
  }, {
    label: "Dressing",
    type: "checkbox",
    choices: ["Olive Oil", "Ranch", "Mayo"]
  }]
}, {
  name: "Orange",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
  price: 57,
  options: [{
    label: "Size",
    type: "radio",
    choices: ["S", "M", "L"]
  }, {
    label: "Dressing",
    type: "checkbox",
    choices: ["Olive Oil", "Ranch", "Mayo"]
  }]
}, {
  name: "Stawberry",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
  price: 35,
  options: [{
    label: "Size",
    type: "radio",
    choices: ["S", "M", "L"]
  }, {
    label: "Dressing",
    type: "checkbox",
    choices: ["Olive Oil", "Ranch", "Mayo"]
  }]
}, {
  name: "Potatoe",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
  price: 88,
  options: [{
    label: "Cook",
    type: "radio",
    choices: ["Roasted", "Fried", "Grilled"]
  }, {
    label: "Dressing",
    type: "checkbox",
    choices: ["Salt", "Pepper", "Ketchup"]
  }]
}];

var App = function App() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      orders = _React$useState2[0],
      setOrders = _React$useState2[1]; //items in basket


  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openModal = _React$useState4[0],
      setOpenModal = _React$useState4[1]; //modal controls


  var _React$useState5 = React.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedItem = _React$useState6[0],
      setSelectedItem = _React$useState6[1]; //modal content

  return React.createElement(
    "div",
    { className: "root-container" },
    openModal && React.createElement(Dialog, {
      setOpenModal: setOpenModal,
      setOrders: setOrders,
      selectedItem: selectedItem
    }),
    React.createElement(
      "div",
      { className: "menu-area" },
      React.createElement(
        "h1",
        null,
        "Express Resturant"
      ),
      React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum iusto, blanditiis, labore sapiente laudantium quos ab dicta tempora numquam ullam velit quidem, et deserunt sint. Repellendus nemo perspiciatis dolor."
      ),
      React.createElement(
        "div",
        { className: "item-container" },
        menu.map(function (v) {
          return React.createElement(MenuItem, {
            item: v,
            key: v.name,
            setOpenModal: setOpenModal,
            setSelectedItem: setSelectedItem
          });
        })
      )
    ),
    React.createElement(SubTotal, { orders: orders })
  );
};

var MenuItem = function MenuItem(_ref) {
  var item = _ref.item,
      setOpenModal = _ref.setOpenModal,
      setSelectedItem = _ref.setSelectedItem;

  return React.createElement(
    "div",
    { className: "menu-item" },
    React.createElement("div", { className: "image-placeholder" }),
    React.createElement(
      "p",
      { className: "title" },
      item.name
    ),
    React.createElement(
      "p",
      null,
      item.desc
    ),
    React.createElement(
      "p",
      { className: "price" },
      "$" + item.price
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          setSelectedItem(item);
          setOpenModal(true);
        }
      },
      "Order"
    )
  );
};

var SubTotal = function SubTotal(_ref2) {
  var orders = _ref2.orders;

  return React.createElement(
    "div",
    { className: "subtotal-box" },
    React.createElement(
      "p",
      { className: "title" },
      "Your Basket"
    ),
    orders.length > 0 ? React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        orders.map(function (i, id) {
          return React.createElement(
            "li",
            { key: i.name + "_" + id },
            React.createElement(
              "p",
              null,
              i.qty + "x " + i.name,
              React.createElement("br", null),
              i.options.length > 0 && "( " + i.options.join(", ") + " )"
            )
          );
        })
      ),
      React.createElement(
        "p",
        { className: "price" },
        "Total: $" + orders.reduce(function (previousValue, i) {
          return previousValue + i.price * i.qty;
        }, 0)
      )
    ) : React.createElement(
      "p",
      null,
      "Very Empty"
    ),
    React.createElement(
      "button",
      { className: "checkout", disabled: orders.length <= 0 },
      "Check Out"
    )
  );
};

var Dialog = function Dialog(_ref3) {
  var item = _ref3.selectedItem,
      setOpenModal = _ref3.setOpenModal,
      setOrders = _ref3.setOrders;

  return React.createElement(
    "div",
    { className: "modal" },
    React.createElement(
      "div",
      { className: "modal-content" },
      React.createElement("div", { className: "image-placeholder" }),
      React.createElement(
        "p",
        { className: "title" },
        item.name
      ),
      React.createElement(
        "p",
        null,
        item.desc
      ),
      React.createElement(
        "form",
        {
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            var qty = e.target.qty.value; // get qunitiy
            var inputFields = [].concat(_toConsumableArray(e.target.elements)); // turn form inputs into array
            var inputValues = inputFields.filter(function (i) {
              return i.checked;
            }) // filter checked input
            .map(function (i) {
              return i.value;
            }); // get checked input values
            setOrders(function (prev) {
              return [].concat(_toConsumableArray(prev), [Object.assign({}, item, { options: inputValues, qty: qty })]);
            });
            setOpenModal(false);
          }
        },
        React.createElement("input", { type: "number", id: "qty", defaultValue: 1, min: 1 }),
        item.options.map(function (opt) {
          return React.createElement(
            "div",
            { key: opt.label },
            React.createElement(
              "p",
              { className: "options" },
              opt.label
            ),
            opt.choices.map(function (choice) {
              return (
                /* input choices */
                React.createElement(
                  "div",
                  { key: choice },
                  React.createElement("input", {
                    type: opt.type,
                    id: choice,
                    name: opt.label,
                    value: choice
                  }),
                  "\xA0 ",
                  React.createElement(
                    "label",
                    { htmlFor: choice },
                    choice
                  ),
                  React.createElement("br", null)
                )
              );
            })
          );
        }),
        React.createElement(
          "div",
          { className: "button-box" },
          React.createElement(
            "button",
            { type: "submit" },
            "Add to Basket"
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                return setOpenModal(false);
              } },
            "Close"
          )
        )
      )
    )
  );
};

var domContainer = document.querySelector("#app_container");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));