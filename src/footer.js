import React from "react";
import store from "./store";

const FilterLink = props => {
  if (props.filter === store.filter) {
    return <span>{props.children}</span>;
  } else {
    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          store.changeFilter(props.filter);
        }}
      >
        {props.children}
      </a>
    );
  }
};

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer;
