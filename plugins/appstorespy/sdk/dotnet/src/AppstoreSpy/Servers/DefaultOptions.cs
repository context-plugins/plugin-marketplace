using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(
            Production.BaseUrl,
            path,
            [TemplateParam.ForServer("defaultHost", Production.DefaultHost)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://{defaultHost}";
        public string DefaultHost { get; set; } = "www.example.com";
    }
}
