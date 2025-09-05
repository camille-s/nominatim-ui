const host = process.env.SERVER_HOST || 'geocoder';
const port = process.env.SERVER_PORT || '8123';
// Nominatim_Config.Nominatim_API_Endpoint = 'http://localhost:8123/';
Nominatim_Config.Nominatim_API_Endpoint = `http://${host}:${port}/`;
Nominatim_Config.Page_Title = 'Nominatim geocoder';
// Baltimore MD
Nominatim_Config.Map_Default_Lat = 39.291;
Nominatim_Config.Map_Default_Lon = -76.611;
Nominatim_Config.Map_Default_Zoom = 15;
Nominatim_Config.Map_Tile_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
Nominatim_Config.Map_Tile_Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
Nominatim_Config.Search_AreaPolygons = false;