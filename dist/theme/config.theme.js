// import { SERVER_HOST, SERVER_PORT } from '../custom-env.js';
// Nominatim_Config.Page_Title = 'Nominatim geocoder';
// const host = SERVER_HOST || 'geocoder';
// const port = SERVER_PORT || '8123';
// go back to hardcoding for now
const host = 'localhost';
const port = '8123';
Nominatim_Config.Nominatim_API_Endpoint = `http://${host}:${port}/`;
// coords for Baltimore, MD
Nominatim_Config.Map_Default_Lat = 39.291;
Nominatim_Config.Map_Default_Lon = -76.611;
Nominatim_Config.Map_Default_Zoom = 15;
Nominatim_Config.Map_Tile_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
Nominatim_Config.Map_Tile_Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
Nominatim_Config.Search_AreaPolygons = false;