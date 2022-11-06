const App = () => {
  const course = "Half Stack application development";

  // array
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      {/* 省略了div*/}
      <Header name={course} />
      <Content part={parts} />
      <Total part={parts} />
    </>
  );
};

const Header = (props) => (
  <>
    <h1>{props.name}</h1>
  </>
);

const Content = (props) => {
  console.log(props);
  return (
    <>
      {/* 注意：此处为props.part而不是props.parts */}
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </>
  );
};

const Part = (props) => {
  // console.log(props);
  return (
    <>
      <p>
        {props.part.name}: {props.part.exercises}
      </p>
    </>
  );
};

const Total = (props) => (
  <>
    <p>
      Number of exercises{" "}
      {props.part[0].exercises +
        props.part[1].exercises +
        props.part[2].exercises}
    </p>
  </>
);

export default App;
