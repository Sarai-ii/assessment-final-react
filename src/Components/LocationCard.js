export default function LocationCard({allLocations}) {
    return (
        <div className="locations">
            <ul className="details">
                {allLocations.map(({ name, climate, terrain, id }) => {
                    return (
                        <li key={id}>
                            <ul>
                                <li><strong>Name: </strong>{name}</li>
                                <li> <strong>Climate: </strong> {climate}</li>
                                <li><strong>Terrain: </strong> {terrain}</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}