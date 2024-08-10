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
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
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
