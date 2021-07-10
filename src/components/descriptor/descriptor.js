import React, { useContext } from "react";
import { DescriptionContext } from "../../context/description-context";

export const Descriptor = () => {
  const { title, description } = useContext(DescriptionContext);
  return (
    <React.Fragment>
      <div className='descriptor'>
        <h1 className='product-title'>{title}</h1>
        <h4>{description}</h4>
      </div>
    </React.Fragment>
  );
};
