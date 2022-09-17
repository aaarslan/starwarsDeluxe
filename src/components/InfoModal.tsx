import {useContext} from "react";
import {
    Button,
    Modal,
    Table,
    Segment,
    Divider,
    Header
} from "semantic-ui-react";
import {StoreContext} from "../utils/Store";

function InfoModal() {
    const {setOpen} = useContext(StoreContext);

    const {character} = useContext(StoreContext);

    return (
        <Segment padding="very">
            <Header>{character.name}</Header>
            <Modal.Content>
                <Modal.Description>
                    <Segment inverted>
                        <Table inverted definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Height:</Table.Cell>
                                    <Table.Cell>{character.height}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Mass:</Table.Cell>
                                    <Table.Cell>{character.mass}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Hair Color:</Table.Cell>
                                    <Table.Cell>{character.hair_color}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Skin Color:</Table.Cell>
                                    <Table.Cell>{character.skin_color}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Eye Color:</Table.Cell>
                                    <Table.Cell>{character.eye_color}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Birth Year:</Table.Cell>
                                    <Table.Cell>{character.birth_year}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Gender:</Table.Cell>
                                    <Table.Cell>{character.gender}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                </Modal.Description>
            </Modal.Content>
            <Divider horizontal>
                <Button color="red" onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Divider>
        </Segment>
    );
}

export default InfoModal;
