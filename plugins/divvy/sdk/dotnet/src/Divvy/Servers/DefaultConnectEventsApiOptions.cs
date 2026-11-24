using Divvy.Core.Models;

namespace Divvy.Servers;

public class DefaultConnectEventsApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://gateway.stage.bill.com/connect-events";
    }
}
