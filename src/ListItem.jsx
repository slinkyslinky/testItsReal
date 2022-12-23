import React, { useEffect, useState } from 'react'

export default function ListItem({ finishTime, data, setData }) {


   const [time, setTime] = useState(Date.now())

   const leftTime = finishTime - time
   let style = {}

   useEffect(() => {
      setTimeout(() => {
         setTime(Date.now())
      }, 500)

      if (leftTime < 1000) {
         data.splice(data.indexOf(finishTime), 1)
         setData([...data])


      }

   }, [time])


   if (leftTime < 4000) {
      style = {
         fontWeight: 500,
         color: "#cc2222"
      }
   }


   return (
      <div style={style}>Исчезнет через {(leftTime > 0) ? Math.floor(leftTime / 1000) : 0} сек.</div>
   )
}
