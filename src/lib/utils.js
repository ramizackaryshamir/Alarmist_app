export const setHour = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  const hourRatio = (minuteRatio + date.getHours()) / 12;
  return hourRatio;
};

export const setMinute = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  return minuteRatio;
};

export const setSecond = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  return secondRatio;
};

export const showLocalTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  return hour + ':' + minute + ':' + second;
};

//export const fetchAllTimes = async () => {
//  const data = fetch(
//    'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_98pZ7wTOYBCGewZWMp0wZhhrvR3e5dPvtTYns7oO0qNa7BAyLjA67pRs4vyItbpy',
//    {
//      method: 'GET',
//    },
//  )
//    .then((response) => {
//      if (response.ok) {
//        return response.json();
//      }
//      Promise.reject(response);
//    })
//    .then((body) => body);

//  console.log(await data);
//};

export const showISO = (timestampMS, styleLight, styleDark) => {
  const zoneISO = new Date(timestampMS * 1000).toISOString();
  const zoneISOhhmmss = zoneISO.slice(11, 16);
  return zoneISOhhmmss;
};

export const angleClock = (hour, minutes) => {
  const minuteAngle = minutes * 6;
  const hourAngle = hour * 30 + minutes * 0.5;
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
};
