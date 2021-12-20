namespace AndCultureApi.Model
{
    public class Brewery
    {
        public string? id { get; set; }
        public string? name { get; set; }
        public string? brewery_type { get; set; }
        public string? street { get; set; }
        public string? address_2 { get; set; }
        public string? address_3 { get; set; }
        public string? city { get; set; }
        public string? state { get; set; }
        public string? county_province { get; set; }
        public string? postal_code { get; set; }
        public string? country { get; set; }
        public string? longitude { get; set; }
        public string? latitude { get; set; }
        public string? phone { get; set; }
        public string? website_url { get; set; }
        public string? updated_at { get; set; }
        public string? created_at { get; set; }
    }

    public class BreweriesResponse
    {
        public List<Brewery>? Breweries { get; set; }
        public string? ResponseCode { get; set; }
        public string? ResponseMessage { get; set; }
    }
}
