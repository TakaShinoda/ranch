import React from 'react'
import { useLonAndLat } from './hooks/useLonAndLat'
import { Card } from './Card'

export const Search = () => {
  const [lat, lon] = useLonAndLat()
  console.log(lat)
  console.log(lon)

  //   if (lat && lon) {
  //     fetch(
  //       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6715962,139.4632724&radius=1250&types=restaurant&language=ja&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => {
  //         console.error('Error:', error)
  //       })
  //   }

  return (
    <>
      <h1>検索</h1>
      <p>{lat}</p>
      <p>{lon}</p>
      <Card />
    </>
  )
}
