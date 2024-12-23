
import Layout from '../components/Layout';
import NavMenu from '../components/Navmenu';
import SideMenu from "../components/SideMenu";

// eslint-disable-next-line react/prop-types
export const Trending = ({ theme, setTheme }) => {
  return (
    <section className="flex">
      <SideMenu theme={theme} setTheme={setTheme} />
      <section className="w-[90%] flex-grow">
       <NavMenu currentPage="Trending" />
          {/* <Layout theme={theme} />  */}
      </section>
    </section>
  );
};

