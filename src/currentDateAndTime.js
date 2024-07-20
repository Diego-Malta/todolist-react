function getCurrentDateAndTime() {
  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  const hour = currentDate.getHours()
  const minutes = currentDate.getMinutes() < 20 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes()

  return `${month}\/${date}\/${year} - ${hour}:${minutes}`
}

export default getCurrentDateAndTime