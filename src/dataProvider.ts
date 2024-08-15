import fakeRestDataProvider from "ra-data-fakerest";
import { v4 as uuidv4 } from 'uuid';
import data from "./data.json";

export const fakeDataProvider = fakeRestDataProvider(
  data,
  process.env.NODE_ENV !== "test"
);


const ClientsDataProvider = {
  // Should implement the following methods:
   getList: (params) => 
   {
    console.log("getList", params);
    var clients = JSON.parse(localStorage.getItem("data") ?? "[]").Clients;

    return Promise.resolve({data: clients, total: clients.length});
   },
  getOne: (params) => {
    console.log("getOne", params);
    return Promise.resolve({data: data.Clients.find(client => client.id === params.id)});
  },
   getMany: (params) => 
  {
    console.log("getMany", params);
    return Promise.resolve({data: data.Clients.filter(client => params.ids.includes(client.id))});
  }, 
  // getManyReference: (resource, params) => handle('getManyReference', resource, params),
  // update: (resource, params) => handle('update', resource, params),
  // updateMany: (resource, params) => handle('updateMany', resource, params),
  // create: (resource, params) => handle('create', resource, params),
  // delete: (resource, params) => handle('delete', resource, params),
  // deleteMany: (resource, params) => handle('deleteMany', resource, params),
  create: (params) => {
    console.log("create", params);
    const newUser = {id: uuidv4(), ...params.data} // adding some random ID. This is not a good practice, but it's just an example
    // This updates the current data.json file but only in memory, on refresh it will be gone
    data.Clients.push(newUser);
    localStorage.setItem("data", JSON.stringify(data));
    // TODO: Save the data to a file, send a request to server, etc.
    // fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
    return Promise.resolve({data: newUser});
  }
}

// Easy way to add providers for other resources
// this one creates a provider for the Services resource, which implements all the methods
// just need to support that in the backend
// import simpleRestDataProvider from 'ra-data-simple-rest';
// const ServicesDataProvider = simpleRestDataProvider('http://your.server.com/api/services');

const DataProviders = {
  Clients: ClientsDataProvider,
  // Services: ServicesDataProvider
}

const realDataProvider = {
  create: (resource, params) => {
    return DataProviders[resource].create(params);
  },
  getOne: (resource, params) => {
    return DataProviders[resource].getOne(params);
  },
  getList: (resource, params) => {
    return DataProviders[resource].getList(params);
  },
  getMany: (resource, params) => {
    return DataProviders[resource].getMany(params);
  },
}
export const dataProvider = {...fakeDataProvider, ...realDataProvider};