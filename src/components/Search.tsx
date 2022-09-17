import {useContext} from "react";
import {StoreContext} from "../utils/Store";

const Search = () => {
    const {setFetchUrl} = useContext(StoreContext);

    let inputHandler = (e : any) => {
        let lowerCase = e
            .target
            .value
            .toLowerCase();
        setFetchUrl(`https://swapi.dev/api/people/?search=${lowerCase}`);
    };

    return ( <> <div className={"ui icon input fluid"}>
        <input onChange={inputHandler} placeholder="Enter a name..."/>
        <i className="search icon"></i>
    </div> < br /> </>);
};

export default Search;
