import fetchJsonp from "fetch-jsonp";

/**
 * 音乐播放器
 */

// 获取音乐播放列表
const getSpotifyToken = async () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
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
 * Weather Information (3-Day Forecast) from HeFeng (QWeather)
 */
export const getWeather = async (city) => {
  const apiKey = import.meta.env.VITE_HEFENG_API_KEY;
  const res = await fetch(`https://devapi.qweather.com/v7/weather/3d?key=${apiKey}&location=${city}`);
  return await res.json();
};


// Fetch 3-day weather based on IP location
export const getWeatherInfo = async () => {
  try {
    const locationData = await getAdcode(); // Get city from IP
    const city = locationData.city;
    const weatherData = await getWeather(city); // Get the 3-day weather forecast for the city
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

