import {useContext} from "react";
import {StoreContext} from "../utils/Store";
import {Button} from "semantic-ui-react";

const NavButtons = () => {
    const {metaData, setFetchUrl} = useContext(StoreContext);

    function Navigate(trigger : string, title : string) {
        if (metaData[trigger]) {
            return (
                <Button
                    onClick={() => {
                    setFetchUrl(metaData[trigger]);
                }}
                    fluid>
                    {title}
                </Button>
            );
        }
        return (
            <Button disabled fluid>
                {title}
            </Button>
        );
    }
    return (
        <Button.Group widths="2">
            {Navigate("previous", "Back")}
            <Button.Or/> {Navigate("next", "Next")}
        </Button.Group>
    );
};
export default NavButtons;
