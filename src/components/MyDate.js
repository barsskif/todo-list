import React from 'react';
import ReactDOM from 'react-dom'


function MyDate() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 10) {
      timeOfDay = "Доброе утро"
    } else if (hours >= 10 && hours < 17) {
      timeOfDay = "Добрый день"
    } else {
      timeOfDay = "Добрый вечер"
    }

    const styles = {
      color: "#FF8C00", 
      backgroundColor: "#FF2D00"
    }
    
    return (
      <h1 tyle={styles}> {timeOfDay}!</h1>
    )
  }

  export default MyDate;