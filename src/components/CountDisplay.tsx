import React from "react";

const CountDisplay = ({ name, count }: { name: string; count: number }) => {
  console.log(name);
  return <div>{count}</div>;
};

export default React.memo(CountDisplay);
