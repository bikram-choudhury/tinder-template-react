import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './../../firebase';

function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            const allPeople = snapshot.docs.map(doc => doc.data());
            setPeople([...allPeople]);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return (
        <div className="tinderCards__cardContainer">
            {
                people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
    )
}

export default TinderCards;
