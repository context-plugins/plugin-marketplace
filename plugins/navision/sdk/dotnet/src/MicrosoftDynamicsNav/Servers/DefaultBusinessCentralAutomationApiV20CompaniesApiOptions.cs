using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Servers;

public class DefaultBusinessCentralAutomationApiV20CompaniesApiOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(
                Production.BaseUrl,
                path,
                [TemplateParam.ForServer("environment", Production.Environment)]),
            () => new UrlTemplate(
                Environment2.BaseUrl,
                path,
                [
                    TemplateParam.ForServer("server", Environment2.Server),
                    TemplateParam.ForServer("port", Environment2.Port),
                    TemplateParam.ForServer("instance", Environment2.Instance),
                ]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.businesscentral.dynamics.com/v2.0/{environment}/api/microsoft/automation/v2.0";
        public string Environment { get; set; } = "production";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://{server}:{port}/{instance}/api/microsoft/automation/v2.0";
        public string Server { get; set; } = "localhost";
        public string Port { get; set; } = "7048";
        public string Instance { get; set; } = "BC";
    }
}
