using MailerLite.Core.Models;

namespace MailerLite.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(Production.BaseUrl, path, []),
            () => new UrlTemplate(Environment2.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "http://api.mailerlite.com/api/v2";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://api.mailerlite.com/api/v2";
    }
}
