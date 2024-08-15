import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const ClientCreate = () => (
    
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} label="שם"/>
            <TextInput source="lastName" validate={[required()]} label="שם משפחה"/>
            <TextInput source="address" label="כתובת"/>
            <TextInput source="phone" label="טלפון"/>
            <TextInput source="comments" label="הערות"/>
        </SimpleForm>
    </Create>
);