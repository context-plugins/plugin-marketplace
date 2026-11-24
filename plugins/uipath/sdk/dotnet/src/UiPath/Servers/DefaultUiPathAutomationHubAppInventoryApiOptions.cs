using UiPath.Core.Models;

namespace UiPath.Servers;

public class DefaultUiPathAutomationHubAppInventoryApiOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();
    public Environment3Options Environment3 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(
                Production.BaseUrl,
                path,
                [
                    TemplateParam.ForServer("orgName", Production.OrgName),
                    TemplateParam.ForServer("tenantName", Production.TenantName),
                ]),
            () => new UrlTemplate(
                Environment2.BaseUrl,
                path,
                [
                    TemplateParam.ForServer("organizationName", Environment2.OrganizationName),
                    TemplateParam.ForServer("tenantName", Environment2.TenantName),
                ]),
            () => new UrlTemplate(Environment3.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://cloud.uipath.com/{orgName}/{tenantName}/automationhub_/api/v1";
        public string OrgName { get; set; } = "your-org";
        public string TenantName { get; set; } = "your-tenant";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_";
        public string OrganizationName { get; set; } = "your-org";
        public string TenantName { get; set; } = "your-tenant";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://cloud.uipath.com";
    }
}
