import React, { useContext, useRef, useState } from "react";
import { DescriptionContext } from "../../context/description-context";
import { useDescription } from "../../hooks/description-hook";
import Accordion from "../Accordion/accordion";

export const Sidebar = () => {
  const { keys } = useDescription();

  const [active, setActive] = useState(keys.sort()[0]);

  const [isCollapsed, setCollapsed] = useState(true);

  const { setContent, description } = useContext(DescriptionContext);

  const handleClick = ({ target: { title = "" } = {} }) => {
    setContent(title);
    setActive(title);
    setCollapsed(!isCollapsed); // can be configurable on click of item to be sidebar to be collapsed or not;
  };
  return (
    <React.Fragment>
      <div className='sidebar'>
        <div className='logo-wrapper'>
          <div className='logo' />
        </div>
        <div
          className={`menu${!isCollapsed ? "-expanded" : ""}`}
          onClick={() => setCollapsed(!isCollapsed)}
        />
        <div className={`collapsible${isCollapsed ? "-inverse" : ""}`}>
          {keys.sort().map((item, index) => (
            <Accordion
              key={index}
              isActive={active === item}
              handleClick={handleClick}
              description={description}
              title={item}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
