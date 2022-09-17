import {useContext} from "react";
import {Modal, Table, Button} from "semantic-ui-react";
import InfoModal from "./InfoModal";
import {StoreContext} from "../utils/Store";

interface CharDat {
    data : {
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: any[];
        vehicles: string[];
        starships: string[];
        created: string;
        edited: string;
        url: string;
    };
}

const TableContent = () => {
    const {data, open, setOpen, indexL, setCharacter} = useContext(StoreContext);

    function CModal() {
        return (
            <Modal onClose={() => setOpen(false)} open={open}>
                <InfoModal/>
            </Modal>
        );
    }

    function Character(args : CharDat) {
        const {name, height, mass, hair_color} = args.data;
        return (
            <Table.Row key={name}>
                <Table.Cell className={"center"} data-label={"Name"}>
                    {name}
                </Table.Cell>
                <Table.Cell data-label={"Height"}>{height}</Table.Cell>
                <Table.Cell data-label={"Mass"}>{mass}</Table.Cell>
                <Table.Cell data-label={"Hair Color"}>{hair_color}</Table.Cell>
                <Table.Cell>
                    <Button
                        inverted
                        onClick={() => {
                        setCharacter(args.data);
                        setOpen(true);
                    }}
                        style={{
                        width: "100%"
                    }}>
                        More Info
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    }

    return (
        <Table.Body>
            <CModal/> {indexL.map((i : number) => {
                return <Character key={i} data={data[i]}/>;
            })}
        </Table.Body>
    );
};

export default TableContent;
