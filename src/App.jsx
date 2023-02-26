import { useState } from 'react'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ClientList from "./components/ClientList.jsx";
function App() {
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState({});

    const deleteClient = id =>{
        const clientsUpdated = ( clients.filter( client => client.id !== id ))
        console.log(clientsUpdated)
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
