using Fellow.Core.Models;

namespace Fellow.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(
            Production.BaseUrl,
            path,
            [TemplateParam.ForServer("subdomain", Production.Subdomain)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://{subdomain}.fellow.app";
        public string Subdomain { get; set; } = "your-fellow-subdomain";
    }
}
