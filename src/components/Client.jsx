const Client = ({client}) => {
    const { petName, owner, email, dateIni, symptoms, id } = client
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 pt-10 pb-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
                <span className="font-normal normal-case">{petName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Date: {''}
                <span className="font-normal normal-case">{dateIni}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="flex justify-between mt-5 py-1">
                <button
                    type="button"
                    className="py-2 px-10 bg-blue-600 hover:bg-blue-600 text-white font-bold uppercase rounded-lg"

                >Edit</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"

                >Delete</button>
            </div>
        </div>
    )
}

export default Client
