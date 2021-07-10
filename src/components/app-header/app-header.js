import React, { useContext } from "react";
import { DescriptionContext } from "../../context/description-context";
import { useDescription } from "../../hooks/description-hook";

export const AppHeader = () => {
  const { keys } = useDescription();

  const { setContent } = useContext(DescriptionContext);

  const handleClick = ({ target: { title = "" } = {} }) => {
    setContent(title);
  };

  return (
    <React.Fragment>
      <div className='app-header'>
        <ul className='nav-links'>
          {keys.reverse().map((item, index) => (
            <li key={index} title={item} onClick={handleClick}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
