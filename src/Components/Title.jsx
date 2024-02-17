import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black text-center">
        {props.Name}
      </h1>
    </div>
  );
};

export default Title;
