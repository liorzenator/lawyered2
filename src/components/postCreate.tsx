import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const PostCreate = () => (
    
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="lastName" multiline={true} label="Last Name" />
        </SimpleForm>
    </Create>

    
);