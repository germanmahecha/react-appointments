import Client from "./Client.jsx";
const ClientList = ({clients, setClient, deleteClient}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {
                clients && clients.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Patient List</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Manage your {''}
                            <span className="text-blue-600 font-bold ">Patients and Appointments</span>
                        </p>

                        {
                            clients.map( client  => (
                                <Client
                                    key={client.id}
                                    client={client}
                                    setClient={setClient}
                                    deleteClient={deleteClient}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">Patient List empty</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Add a new patient {''}
                            <span className="text-blue-600 font-bold ">patient</span>
                        </p>
                    </>
                )}



        </div>
    )
}
export default ClientList;