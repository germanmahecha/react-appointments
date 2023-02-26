import { useState, useEffect } from 'react'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ClientList from "./components/ClientList.jsx";
function App() {
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState({});

    //The order of the Hooks in the code is the order in which they are executed (1,2,3)
    useEffect(()=>{
        //Read Storage to update clients
        const getClientsLS = () => {
            //getItems and convert local string to object
            const clientsLS = JSON.parse(localStorage.getItem('clients')) ?? [];
            setClients(clientsLS)
        }
        getClientsLS()
    }, [])//It runs only once

    useEffect(()=>{
        //Follow state clients to send to Storage
        //JSON.stringify = transform object to string
        localStorage.setItem('clients', JSON.stringify( clients))
    }, [clients])

    const deleteClient = id =>{
        const clientsUpdated = clients.filter( client => client.id !== id )
        //console.log(clientsUpdated)
        setClients(clientsUpdated)
    }
    console.log(client)
    return (
        <div className="container mx-auto mt-20">
             <Header />
            <div className="mt-12 md:flex">
                <Form
                    clients={clients}
                    setClients={setClients}
                    client={client}
                    setClient={setClient}
                />
                <ClientList
                    clients={clients}
                    setClient={setClient}
                    client={client}
                    deleteClient={deleteClient}
                />
            </div>
        </div>
  )
}

export default App
