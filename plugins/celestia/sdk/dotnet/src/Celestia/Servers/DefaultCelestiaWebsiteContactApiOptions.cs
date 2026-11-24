using Celestia.Core.Models;

namespace Celestia.Servers;

public class DefaultCelestiaWebsiteContactApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://celestia.org";
    }
}
