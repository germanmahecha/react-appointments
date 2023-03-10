import { useState, useEffect } from 'react';
import Error from "./Error.jsx";
const Form = ({clients,setClients,client, setClient}) => {
    const [petName, setPetName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [dateIni, setDateIni] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false)

    useEffect( () => {
        if( Object.keys(client).length > 0 ){
            setPetName(client.petName)
            setOwner(client.owner)
            setEmail(client.email)
            setDateIni(client.dateIni)
            setSymptoms(client.symptoms)
        }
    }, [client])
    const IdGenerator = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }
    const handleSubmit = (e) => {
        //Prevent form submission
        e.preventDefault();
        //Form validation
        if( [ petName, owner, email, dateIni, symptoms ].includes('') ){
            setError(true)
            return;
        }
        setError(false)

        //Object Client
        const objClient = {
            petName,
            owner,
            email,
            dateIni,
            symptoms,
            id: IdGenerator()
        }

        if( client.id ){
            //Editing
            objClient.id = client.id

            const clientsModified = clients.map( clientState => clientState.id  === client.id ? objClient : clientState )
            setClients(clientsModified)
            //Reset State
            setClient({})

        }else{
            //New client
            objClient.id = IdGenerator();
            //Take a copy of the current customers and add the new one
            setClients([...clients, objClient])
        }

        //Reset form
        setPetName('')
        setOwner('')
        setEmail('')
        setDateIni('')
        setSymptoms('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-blue-600 font-bold ">manage them</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                { error &&  <Error message='All fields are required'/>}

                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
                        Pet Name
                    </label>
                    <input
                        id="pet"
                        type="text"
                        placeholder="Pet Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={petName}
                        onChange={ (e) => setPetName(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Owner Name
                    </label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Owner Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={ (e) => setOwner(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Owner Contact"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="dateIni" className="block text-gray-700 uppercase font-bold">
                        Discharge date
                    </label>
                    <input
                        id="dateIni"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={dateIni}
                        onChange={ (e) => setDateIni(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe the symptoms"
                        value={symptoms}
                        onChange={ (e) => setSymptoms(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors"
                    value={ client.id ? 'Edit Patient' : 'Add Patient' }
                />
            </form>

        </div>

    )
}
export default Form;