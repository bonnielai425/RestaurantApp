const menu = [
  {
    name: "Banana",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
    price: 34,
    options: [
      {
        label: "Size",
        type: "radio",
        choices: ["S", "M", "L"],
      },
      {
        label: "Dressing",
        type: "checkbox",
        choices: ["Olive Oil", "Ranch", "Mayo"],
      },
    ],
  },
  {
    name: "Apple",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
    price: 94,
    options: [
      {
        label: "Color",
        type: "radio",
        choices: ["Red", "Yellow", "Green"],
      },
      {
        label: "Dressing",
        type: "checkbox",
        choices: ["Olive Oil", "Ranch", "Mayo"],
      },
    ],
  },
  {
    name: "Grape",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
    price: 19,
    options: [
      {
        label: "Size",
        type: "radio",
        choices: ["S", "M", "L"],
      },
      {
        label: "Dressing",
        type: "checkbox",
        choices: ["Olive Oil", "Ranch", "Mayo"],
      },
    ],
  },
  {
    name: "Orange",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
    price: 57,
    options: [
      {
        label: "Size",
        type: "radio",
        choices: ["S", "M", "L"],
      },
      {
        label: "Dressing",
        type: "checkbox",
        choices: ["Olive Oil", "Ranch", "Mayo"],
      },
    ],
  },
  {
    name: "Stawberry",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
    price: 35,
    options: [
      {
        label: "Size",
        type: "radio",
        choices: ["S", "M", "L"],
      },
      {
        label: "Dressing",
        type: "checkbox",
        choices: ["Olive Oil", "Ranch", "Mayo"],
      },
    ],
  },
  {
    name: "Potatoe",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, architecto?",
    price: 88,
    options: [
      {
        label: "Cook",
        type: "radio",
        choices: ["Roasted", "Fried", "Grilled"],
      },
      {
        label: "Dressing",
        type: "checkbox",
        choices: ["Salt", "Pepper", "Ketchup"],
      },
    ],
  },
];

const App = () => {
  const [orders, setOrders] = React.useState([]); //items in basket
  const [openModal, setOpenModal] = React.useState(false); //modal controls
  const [selectedItem, setSelectedItem] = React.useState({}); //modal content

  return (
    <div className="root-container">
      {openModal && (
        <Dialog
          setOpenModal={setOpenModal}
          setOrders={setOrders}
          selectedItem={selectedItem}
        />
      )}
      <div className="menu-area">
        <h1>Express Resturant</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dolorum iusto, blanditiis, labore sapiente laudantium quos ab dicta
          tempora numquam ullam velit quidem, et deserunt sint. Repellendus nemo
          perspiciatis dolor.
        </p>
        <div className="item-container">
          {menu.map((v) => (
            <MenuItem
              item={v}
              key={v.name}
              setOpenModal={setOpenModal}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </div>
      <SubTotal orders={orders} />
    </div>
  );
};

const MenuItem = ({ item, setOpenModal, setSelectedItem }) => {
  return (
    <div className="menu-item">
      <div className="image-placeholder" />
      <p className="title">{item.name}</p>
      <p>{item.desc}</p>
      <p className="price">{`$${item.price}`}</p>
      <button
        onClick={() => {
          setSelectedItem(item);
          setOpenModal(true);
        }}
      >
        Order
      </button>
    </div>
  );
};

const SubTotal = ({ orders }) => {
  return (
    <div className="subtotal-box">
      <p className="title">Your Basket</p>
      {orders.length > 0 ? (
        <div>
          <ul>
            {/* list out all orders */}
            {orders.map((i, id) => (
              <li key={`${i.name}_${id}`}>
                <p>
                  {`${i.qty}x ${i.name}`}
                  <br />
                  {i.options.length > 0 && `( ${i.options.join(", ")} )`}
                </p>
              </li>
            ))}
          </ul>
          {/* print total price */}
          <p className="price">
            {`Total: $${orders.reduce(
              (previousValue, i) => previousValue + i.price * i.qty,
              0
            )}`}
          </p>
        </div>
      ) : (
        <p>Very Empty</p>
      )}
      <button className="checkout" disabled={orders.length <= 0}>
        Check Out
      </button>
    </div>
  );
};

const Dialog = ({ selectedItem: item, setOpenModal, setOrders }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="image-placeholder" />
        <p className="title">{item.name}</p>
        <p>{item.desc}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent default submit behavior of sending form
            const qty = e.target.qty.value; // get qunitiy
            const inputFields = [...e.target.elements]; // turn form inputs into array
            const inputValues = inputFields
              .filter((i) => i.checked) // filter checked input
              .map((i) => i.value); // get checked input values
            setOrders((prev) => [
              ...prev,
              { ...item, options: inputValues, qty },
            ]);
            setOpenModal(false);
          }}
        >
          <input type="number" id="qty" defaultValue={1} min={1}></input>
          {item.options.map((opt) => (
            <div key={opt.label}>
              {/* option title */}
              <p className="options">{opt.label}</p>
              {opt.choices.map((choice) => (
                /* input choices */
                <div key={choice}>
                  <input
                    type={opt.type}
                    id={choice}
                    name={opt.label}
                    value={choice}
                  />
                    <label htmlFor={choice}>{choice}</label>
                  <br />
                </div>
              ))}
            </div>
          ))}
          <div className="button-box">
            <button type="submit">Add to Basket</button>
            <button onClick={() => setOpenModal(false)}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const domContainer = document.querySelector("#app_container");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
