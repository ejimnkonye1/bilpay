// import BoardLayout from "../components/BoardLayout";
import NavMenu from '../components/Navmenu';
import SideMenu from "../components/SideMenu";

// eslint-disable-next-line react/prop-types
export const Dashboard = ({ theme, setTheme }) => {
  return (
    <section className="flex">
      <SideMenu theme={theme} setTheme={setTheme} />
      <section className="w-[90%] flex-grow">
       <NavMenu currentPage="Dashboard" />
        {/*  <BoardLayout theme={theme} /> */}
      </section>
    </section>
  );
};

