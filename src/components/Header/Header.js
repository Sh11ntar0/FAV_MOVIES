import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      FAV_MOVIES
    </span>
  );
};

export default Header;
