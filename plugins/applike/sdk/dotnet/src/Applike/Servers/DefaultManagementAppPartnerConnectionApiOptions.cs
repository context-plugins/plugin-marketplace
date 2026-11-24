using Applike.Core.Models;

namespace Applike.Servers;

public class DefaultManagementAppPartnerConnectionApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.justtrack.io";
    }
}
