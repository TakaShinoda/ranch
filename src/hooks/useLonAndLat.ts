import { useState } from 'react'

export const useLonAndLat = () => {
  // 緯度
  const [lat, setLat] = useState<number>(0)
  // 経度
  const [lon, setLon] = useState<number>(0)

   // Geolocation APIに対応している
   if (navigator.geolocation) {
    // alert("この端末では位置情報が取得できます")
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(
      // 取得成功した場合
      function(position) {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      },
      // 取得失敗した場合
      function(error) {
        switch(error.code) {
          case 1: //PERMISSION_DENIED
            alert("位置情報の利用が許可されていません")
            break;
          case 2: //POSITION_UNAVAILABLE
            alert("現在位置が取得できませんでした")
            break;
          case 3: //TIMEOUT
            alert("タイムアウトになりました")
            break;
          default:
            alert("その他のエラー(エラーコード:"+error.code+")")
            break;
        }
      }
    )
  // Geolocation APIに対応していない
  } else {
    alert("この端末では位置情報が取得できません")
  }
  return [lon, lat]
}
