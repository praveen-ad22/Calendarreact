import dayjs from "dayjs";

export const generateDays = (currentDate) => {
  const startOfMonth = currentDate.startOf('month')
 

  const startDay = startOfMonth.day() // 0 (Sun) to 6 (Sat)
  const daysInMonth = currentDate.daysInMonth()

  const daysArray = []


  for (let i = startDay - 1; i >= 0; i--) {
    daysArray.push(startOfMonth.subtract(i + 1, 'day'))
  }

  
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(startOfMonth.date(i))
  }
  while (daysArray.length < 42) {
    const lastday = daysArray[daysArray.length - 1]
    daysArray.push(lastday.add(1, 'day'))
  }

  return daysArray
}