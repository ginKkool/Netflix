import data from "../assets/movies.json";

const Section = (props) => {
  return (
    <section>
      <h1>{props.category}</h1>
      <div className="images">{props.images}</div>
    </section>
  );
};

export default Section;
