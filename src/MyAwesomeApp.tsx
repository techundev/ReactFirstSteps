import type { CSSProperties } from "react";

const firstName = 'Armando';
const lastName = 'Santos';

const favoriteGames = ['GTA', 'Metal Gear']
const isActive = false;

const address = {
    zipCode: 'abc',
    country: 'Canada'
}

const myStyle: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginTop: 30
};

export const MyAwesomeApp = () => {



    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>
            <h1>{isActive ? 'A' : 'N'}</h1>
            <p
                style={myStyle}
            >{JSON.stringify(address)}</p>
        </>
    )
}
