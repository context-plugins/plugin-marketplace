using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Servers;

public class AccessTokenServerOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://oauth2.googleapis.com";
    }
}
