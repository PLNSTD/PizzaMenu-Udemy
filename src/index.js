import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const titleStyle = {};

  return (
    <header className="header">
      <h1 style={titleStyle}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <>
              <Pizza pizzaInfo={pizza} key={pizza.name} />
            </>
          );
        })}
      </ul>
    </main>
  );
}

function Pizza({ pizzaInfo }) {
  return (
    <li className={`pizza ${pizzaInfo.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaInfo.photoName} alt={pizzaInfo.name} />
      <h2>{pizzaInfo.name}</h2>
      <p>{pizzaInfo.ingredients}</p>
      <span>{pizzaInfo.soldOut ? "SOLD OUT" : pizzaInfo.price}</span>
    </li>
  );
}

function Footer() {
  const [hour, setHour] = React.useState(new Date().toLocaleTimeString());
  const [timePhrase, setPhrase] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);
  const openHour = 11;
  const closeHour = 22;

  React.useEffect(function () {
    setInterval(function () {
      setHour(new Date().toLocaleTimeString());
      const currentHour = new Date().getHours();
      if (currentHour >= openHour && currentHour < closeHour) {
        setPhrase(
          `We're open until ${closeHour}:00! Come visit us or order online.`
        );
        setOpen(true);
      } else {
        setPhrase(`Sorry! We're currently close! Come back at ${openHour}:00.`);
        setOpen(false);
      }
    }, 1000);
  }, []);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>{timePhrase}</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>{timePhrase}</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
