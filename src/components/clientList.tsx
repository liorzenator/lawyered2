import { Datagrid, List, TextField } from 'react-admin';

export const ClientList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="שם"/>
            <TextField source="lastName" label="שם משפחה"/>
            <TextField source="address" label="כתובת"/>
            <TextField source="phone" label="טלפון"/>
            <TextField source="comments" label="הערות"/>
        </Datagrid>
    </List>
);