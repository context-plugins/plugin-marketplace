using Beehiiv.Core.Models;

namespace Beehiiv.Servers;

public class DefaultOAuth2AuthorizationsApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://app.beehiiv.com";
    }
}
