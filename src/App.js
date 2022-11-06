const App = () => {
  const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  // Object
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      {" "}
      {/* 省略了div*/}
      <Header name={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  );
};

const Header = (props) => (
  <>
    <h1>{props.name}</h1>
  </>
);

const Content = (props) => {
  // console.log(props);
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
    <p>Number of exercises {props.total}</p>
    {/* 通过传入的参数名来access参数。即使只有一个参数total，也需要props.total */}
    {/* React JSX里面注释，需要用{}括起来*/}
  </>
);

export default App;
