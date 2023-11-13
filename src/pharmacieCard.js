

function PharmacieCard({ name, distance, dureeVoiture, duree }) {

    return (
        <>
            <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 py-4 px-4">



                <div className="flex flex-row justify-between">
                    <div className="text-base mt-2 mb-2">{name}</div>
                    <div className="text-gray-700 text-base font-bold mt-2 mb-2" >{distance}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="text-gray-700 text-base ">{duree}</div>
                    <div className='text-gray-700 text-base '>{dureeVoiture}
                    </div>
                </div>
            </div>




        </>
    )

}

export default PharmacieCard;