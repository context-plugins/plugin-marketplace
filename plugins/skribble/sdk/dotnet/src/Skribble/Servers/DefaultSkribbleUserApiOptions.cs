using Skribble.Core.Models;

namespace Skribble.Servers;

public class DefaultSkribbleUserApiOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();
    public Environment3Options Environment3 { get; set; } = new();
    public Environment4Options Environment4 { get; set; } = new();
    public Environment5Options Environment5 { get; set; } = new();
    public Environment6Options Environment6 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(Production.BaseUrl, path, []),
            () => new UrlTemplate(Environment2.BaseUrl, path, []),
            () => new UrlTemplate(Environment3.BaseUrl, path, []),
            () => new UrlTemplate(Environment4.BaseUrl, path, []),
            () => new UrlTemplate(Environment5.BaseUrl, path, []),
            () => new UrlTemplate(Environment6.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.skribble.com/v3";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://api.skribble.de/v3";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://api.skribble.com/v2";
    }

    public class Environment4Options
    {
        public string BaseUrl { get; set; } = "https://api.skribble.de/v2";
    }

    public class Environment5Options
    {
        public string BaseUrl { get; set; } = "https://api.skribble.com/v3";
    }

    public class Environment6Options
    {
        public string BaseUrl { get; set; } = "https://api.skribble.com/v3";
    }
}
