import "./App.css";
import data from "./assets/data-movies.json";
import Logo from "./assets/logo-netF.png";

// console.log(data);

const App = () => {
  return (
    <>
      <header className="wrapper">
        <img src={Logo} alt="logo Netflix" />
      </header>

      <main className="wrapper">
        {data.map((category) => {
          // console.log(category.category);
          return (
            <section>
              <h1>{category.category}</h1>
              <div>
                {category.images.map((url) => {
                  // console.log(element);
                  return <img src={url} alt="Affiche de film" />;
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default App;
