import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {pathname === "/" && (
        <Button
          color={showAdd ? "red" : "Green"}
          text={showAdd ? "Close" : "New Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
