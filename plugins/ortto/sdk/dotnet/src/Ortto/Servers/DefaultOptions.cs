using Ortto.Core.Models;

namespace Ortto.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();
    public Environment3Options Environment3 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(Production.BaseUrl, path, []),
            () => new UrlTemplate(Environment2.BaseUrl, path, []),
            () => new UrlTemplate(Environment3.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.ap3api.com/v1";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://api.au.ap3api.com/v1";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://api.eu.ap3api.com/v1";
    }
}
