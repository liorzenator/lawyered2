import { Datagrid, Edit, List, SimpleForm, TextField, TextInput } from 'react-admin';

export const EditClient = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" label="שם"/>
            <TextInput source="lastName" label="שם משפחה"/>
            <TextInput source="address" label="כתובת"/>
            <TextInput source="phone" label="טלפון"/>
            <TextInput source="comments" label="הערות"/>
        </SimpleForm>
    </Edit>
);