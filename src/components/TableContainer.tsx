import TableContent from "./TableContent";
import {Table} from "semantic-ui-react";
import NavButtons from "./NavButtons";
const TableContainer = () => {
    return ( 
        <> 
        <Table inverted>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Height</Table.HeaderCell>
                <Table.HeaderCell>Mass</Table.HeaderCell>
                <Table.HeaderCell>Hair Color</Table.HeaderCell>
                <Table.HeaderCell>Additional Details</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <TableContent/>
        <Table.Footer fullWidth>
            <Table.Row>
                <Table.Cell colSpan="5">
                    <NavButtons/>
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    </Table> 
    </>
  );
};

export default TableContainer;