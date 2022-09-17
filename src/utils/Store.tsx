import React, {useState, createContext, useEffect} from "react";
import _ from "lodash";

export const StoreContext = createContext < any > (null);

const Store : React.FC<React.ReactNode> = (props:any) => {
    const [open,
        setOpen] = useState(false);
    const [loading,
        setLoading] = useState(true);
    const [data,
        setData] = useState([]);
    const [metaData,
        setMetaData] = useState({});
    const [character,
        setCharacter] = useState({});
    const indexL : number[] = _.range(data.length);

    const [fetchUrl,
        setFetchUrl] = useState("https://swapi.dev/api/people/");

    useEffect(() => {
        const fetchPeeps = async() => {
            const response = await fetch(fetchUrl);
            const peepsData = await response.json();
            const {
                results,
                ...meta
            } = peepsData;
            setMetaData(meta);
            setData(results);
            setLoading(false);
        };

        fetchPeeps();
    }, [fetchUrl]);
    return (
        <StoreContext.Provider
            value={{
            open,
            setOpen,
            data,
            indexL,
            character,
            setCharacter,
            metaData,
            setFetchUrl,
            loading
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default Store;
