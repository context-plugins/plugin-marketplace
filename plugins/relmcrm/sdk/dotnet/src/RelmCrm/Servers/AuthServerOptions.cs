using RelmCrm.Core.Models;

namespace RelmCrm.Servers;

public class AuthServerOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.relmcrm.com/oauth";
    }
}
