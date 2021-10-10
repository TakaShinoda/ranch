import React, { useState, useEffect } from 'react'
import { useLonAndLat } from './hooks/useLonAndLat'
import { Card } from './Card'
import { restaurantData } from './types/types'

export const Search = () => {
  const [lat, lon] = useLonAndLat()
  const [results, setResults] = useState<restaurantData[]>([])

  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      getDate()
    }
    return () => {
      unmounted = true
    }
  }, [lon])

  const getDate = async () => {
    try {
      // console.log(lat)
      // console.log(lon)
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1000&types=restaurant&language=ja&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`
      )
      const json = await res.json()
      setResults(json.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Card results={results} />
    </>
  )
}
