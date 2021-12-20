using Microsoft.AspNetCore.Mvc;
using AndCultureApi.Model;
using AndCultureApi.Repository;
using Microsoft.AspNetCore.Cors;

namespace AndCultureApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BreweryController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _environment;

        public BreweryController(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _environment = environment;
        }
        
        [HttpGet]
        [EnableCors]
        public async Task<IActionResult> Search(string query)
        {
            string _dataFilePath = _environment.ContentRootPath + _configuration.GetSection("BreweriesList").Value;
            BreweryRepository _repo = new BreweryRepository(_dataFilePath);
            BreweriesResponse _response = await _repo.GetBreweries(query);
            return Ok(_response);
        }
    }
}
