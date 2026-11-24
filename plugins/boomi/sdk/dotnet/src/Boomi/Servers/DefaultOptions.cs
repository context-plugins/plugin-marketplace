using Boomi.Core.Models;

namespace Boomi.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(
            Production.BaseUrl,
            path,
            [TemplateParam.ForServer("accountId", Production.AccountId)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.boomi.com/api/rest/v1/{accountId}";
        public string AccountId { get; set; } = "your-account-id";
    }
}
