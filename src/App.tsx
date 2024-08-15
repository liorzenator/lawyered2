import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { defaultTheme } from 'react-admin';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { ClientCreate } from "./components/clientCreate";
import { EditClient } from "./components/clientEdit";
import { ClientList } from "./components/clientList";

const theme = {
  ...defaultTheme,
  direction: 'rtl',
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});


export const App = () => (
  <CacheProvider value={cacheRtl}>
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={theme}
    >
      <Resource
        name="Clients"
        list={ClientList}
        edit={EditClient}
        show={ShowGuesser}
        create={ClientCreate}
        options={{ label: "לקוחות" }}
      />
      <Resource
        name="Services"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        options={{ label: "סוגי שירות" }}
      />
      </Admin>
  </CacheProvider>
);
