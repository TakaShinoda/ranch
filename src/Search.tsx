import React, { useState, useEffect } from 'react'
import { useLonAndLat } from './hooks/useLonAndLat'
import { Card } from './Card'
import { restaurantData } from './types/types'
import { Box, Center, Select } from '@chakra-ui/react'

export const Search = () => {
  const [lat, lon] = useLonAndLat()
  const [results, setResults] = useState<restaurantData[]>([])
  const [radius, setRadius] = useState<string>('300')

  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      getDate()
    }
    return () => {
      unmounted = true
    }
  }, [lon])

  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      getDate()
    }
    return () => {
      unmounted = true
    }
  }, [radius])

  const getDate = async () => {
    const PROXY_URL = `https://cors-anywhere.herokuapp.com/`
    const TARGET_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&types=restaurant&language=ja&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`
    const URL = `${PROXY_URL}${TARGET_URL}`
    try {
      console.log(`${URL}`)
      const res = await fetch(`${URL}`)
      const json = await res.json()
      setResults(json.results)
    } catch (err) {
      alert('通信失敗')
      console.error(err)
    }
  }

  const meters = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500,
  ]

  const handleChangemeter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRadius(e.target.value)
  }

  return (
    <>
      <Center>
        <Box mt={4}>
          <p>緯度: {lat}</p>
          <p>経度: {lon}</p>
        </Box>
        <Box mt={4} w={150}>
          <Select
            placeholder="距離を選ぶ"
            onChange={(e) => handleChangemeter(e)}
          >
            {meters.map((m, i) => (
              <option value={m} key={i}>
                {m}
              </option>
            ))}
          </Select>
        </Box>

        <Card results={results} />
      </Center>
    </>
  )
}
