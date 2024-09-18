import fetchJsonp from "fetch-jsonp";

/**
 * 音乐播放器
 */

// 获取音乐播放列表
const getSpotifyToken = async () => {
  const clientId = '69cc477eb83f48a596c8996b9c21a328';
  const clientSecret = '6e6780afa331429ab325ab344cfa566e';
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await result.json();
  return data.access_token;
};

export const getPlayerList = async (playlistId) => {
  const token = await getSpotifyToken();
  const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await res.json();
  return data.tracks.items.map(track => ({
    name: track.track.name,
    artist: track.track.artists[0].name,
    url: track.track.preview_url,
    cover: track.track.album.images[0].url,
    lrc: ''  // No lyrics provided by Spotify API
  }));
};

/**
 * 一言
 */

// 获取一言数据
export const getHitokoto = async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  return await res.json();
}

/**
 * IP Geolocation
 */
export const getAdcode = async () => {
  const apiKey = import.meta.env.VITE_IPGEOLOCATION_API_KEY;
  const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
  return await res.json();
};

/**
 * Weather Information from HeFeng (QWeather)
 */
export const getWeather = async (city) => {
  const apiKey = import.meta.env.VITE_HEFENG_API_KEY;
  const res = await fetch(`https://devapi.qweather.com/v7/weather/now?key=${apiKey}&location=${city}`);
  return await res.json();
};

// Fetch weather based on IP location
export const getWeatherInfo = async () => {
  try {
    const locationData = await getAdcode(); // Get city from IP
    const city = locationData.city;
    const weatherData = await getWeather(city); // Get weather for the city
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
