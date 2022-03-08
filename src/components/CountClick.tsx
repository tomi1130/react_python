import React from "react";

const CountClick = ({
  handleClick,
  children,
}: {
  handleClick: any;
  children: any;
}) => {
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(CountClick);
