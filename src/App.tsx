import TableContainer from "./components/TableContainer";
import { useContext } from "react";
import { StoreContext } from "./utils/Store";
import Loading from "./components/Loading";
import Search from "./components/Search";

export default function App() {
  const { loading } = useContext(StoreContext);
  return (
    <div className="ui container">
      <h1 style={{"color":"white"}}>Starwars Deluxe</h1>
      <hr />
      <Search />
      <div>
        {loading === true && <Loading />}
        {loading === false && <TableContainer />}
      </div>
    </div>
  );
}
