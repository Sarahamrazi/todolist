const NavBar = (props) => {
  return (
    <header>
      <span>{props.notCompleted}</span> <h2> are not completed</h2>
    </header>
  );
};

export default NavBar;
