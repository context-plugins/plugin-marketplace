using UiPath.Core.Models;

namespace UiPath.Servers;

public class DefaultUiPathPlatformManagementAuditLogsApiOptions
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
        public string BaseUrl { get; set; } = "https://cloud.uipath.com";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://cloud.uipath.com";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://cloud.uipath.com";
    }
}
