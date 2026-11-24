using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Servers;

public class DefaultOptions
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
        public string BaseUrl { get; set; } = "https://runtime-api-na-west.prod.chatbots.sfdc.sh";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://runtime-api-na-east.prod.chatbots.sfdc.sh";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://runtime-api-eu-west.prod.chatbots.sfdc.sh";
    }

    public class Environment4Options
    {
        public string BaseUrl { get; set; } = "https://runtime-api-eu-east.prod.chatbots.sfdc.sh";
    }

    public class Environment5Options
    {
        public string BaseUrl { get; set; } = "https://runtime-api-ap-west.prod.chatbots.sfdc.sh";
    }

    public class Environment6Options
    {
        public string BaseUrl { get; set; } = "https://runtime-api-ap-east.prod.chatbots.sfdc.sh";
    }
}
