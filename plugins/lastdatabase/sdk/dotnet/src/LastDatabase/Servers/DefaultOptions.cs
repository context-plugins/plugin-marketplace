using LastDatabase.Core.Models;

namespace LastDatabase.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://lastdatabase.com";
    }
}
