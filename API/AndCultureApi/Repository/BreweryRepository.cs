using AndCultureApi.Model;
using Newtonsoft.Json;


namespace AndCultureApi.Repository
{
    public class BreweryRepository
    {
        private readonly string _dataFilePath; 

        public BreweryRepository(string dataFilePath)
        {
            _dataFilePath = dataFilePath;
        }

        public Task<BreweriesResponse> GetBreweries(string query)
        {
            BreweriesResponse _response = new BreweriesResponse();
            List<Brewery>? _breweries = new List<Brewery>();
            string _responseCode = "OK";
            string _responseMessage = "Data fetched successfully";

            query = query.ToLower();    

            try
            {
                string json = File.ReadAllText(_dataFilePath);
                _breweries = JsonConvert.DeserializeObject<List<Brewery>>(json);
                _breweries = _breweries
                                .Where(a => a.city.ToString().ToLower().Contains(query)
                                            || a.name.ToString().ToLower().Contains(query))
                                .ToList();
            }
            catch (Exception ex)
            {
                _responseCode = "ERROR";
                _responseMessage = ex.Message;
            }

            _response.Breweries = _breweries;
            _response.ResponseCode = _responseCode;
            _response.ResponseMessage = _responseMessage;

            return Task.FromResult(_response);
        }
    }
}
