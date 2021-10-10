import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './card.css'
// import { useHistory } from 'react-router-dom'

export const Card = ({ results }: any) => {
  // let history = useHistory()
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction: any, nameToDelete: string, geometry: any) => {
    console.log(direction)
    if (direction === 'right') {
      window.location.assign(
        `https://www.google.com/maps/search/?api=1&query=${geometry.location.lat},${geometry.location.lng}`
      )
      // history.push('/detail')
    }
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!')
  }

  const viewPhoto = (reference: string) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`
  }

  return (
    <>
      <div>
        <div className="cardContainer">
          {lastDirection ? (
            <h2 className="infoText">You swiped {lastDirection}</h2>
          ) : (
            <h2 className="infoText">You swiped start</h2>
          )}
          {results.map((result: any, i: number) => (
            <TinderCard
              className="swipe"
              key={i}
              onSwipe={(dir) => swiped(dir, result.name, result.geometry)}
              onCardLeftScreen={() => outOfFrame(result.name)}
            >
              <div
                style={{
                  backgroundImage:
                    'url(' + viewPhoto(result.photos[0].photo_reference) + ')',
                }}
                className="card"
              >
                <h3>{result.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  )
}
