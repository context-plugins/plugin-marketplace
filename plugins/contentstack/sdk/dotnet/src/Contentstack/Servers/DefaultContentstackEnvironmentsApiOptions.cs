using Contentstack.Core.Models;

namespace Contentstack.Servers;

public class DefaultContentstackEnvironmentsApiOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();
    public Environment3Options Environment3 { get; set; } = new();
    public Environment4Options Environment4 { get; set; } = new();
    public Environment5Options Environment5 { get; set; } = new();
    public Environment6Options Environment6 { get; set; } = new();
    public Environment7Options Environment7 { get; set; } = new();
    public Environment8Options Environment8 { get; set; } = new();
    public Environment9Options Environment9 { get; set; } = new();
    public Environment10Options Environment10 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(Production.BaseUrl, path, []),
            () => new UrlTemplate(Environment2.BaseUrl, path, []),
            () => new UrlTemplate(Environment3.BaseUrl, path, []),
            () => new UrlTemplate(Environment4.BaseUrl, path, []),
            () => new UrlTemplate(Environment5.BaseUrl, path, []),
            () => new UrlTemplate(Environment6.BaseUrl, path, []),
            () => new UrlTemplate(Environment7.BaseUrl, path, []),
            () => new UrlTemplate(Environment8.BaseUrl, path, []),
            () => new UrlTemplate(Environment9.BaseUrl, path, []),
            () => new UrlTemplate(Environment10.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.contentstack.io/v3";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://eu-api.contentstack.com/v3";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://au-api.contentstack.com/v3";
    }

    public class Environment4Options
    {
        public string BaseUrl { get; set; } = "https://azure-na-api.contentstack.com/v3";
    }

    public class Environment5Options
    {
        public string BaseUrl { get; set; } = "https://azure-eu-api.contentstack.com/v3";
    }

    public class Environment6Options
    {
        public string BaseUrl { get; set; } = "https://launch-api.contentstack.com";
    }

    public class Environment7Options
    {
        public string BaseUrl { get; set; } = "https://eu-launch-api.contentstack.com";
    }

    public class Environment8Options
    {
        public string BaseUrl { get; set; } = "https://au-launch-api.contentstack.com";
    }

    public class Environment9Options
    {
        public string BaseUrl { get; set; } = "https://azure-na-launch-api.contentstack.com";
    }

    public class Environment10Options
    {
        public string BaseUrl { get; set; } = "https://azure-eu-launch-api.contentstack.com";
    }
}
