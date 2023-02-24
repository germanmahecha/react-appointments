import { useState } from 'react'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ClientList from "./components/ClientList.jsx";
function App() {
    const [clients, setClients] = useState([]);

    return (
        <div className="container mx-auto mt-20">
             <Header />
            <div className="mt-12 md:flex">
                <Form
                    clients={clients}
                    setClients={setClients}
                />
                <ClientList clients={clients}/>
            </div>
        </div>
  )
}

export default App
