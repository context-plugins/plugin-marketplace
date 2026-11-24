using CloudKit.Core.Models;
using CloudKit.Models.Enums;

namespace CloudKit.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(
            Production.BaseUrl,
            path,
            [
                TemplateParam.ForServer("container", Production.Container),
                TemplateParam.ForServer("environment", Production.Environment),
                TemplateParam.ForServer("database", Production.Database),
            ]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://api.apple-cloudkit.com/database/1/{container}/{environment}/{database}";
        public string Container { get; set; } = "iCloud.com.example.myapp";
        public EnvironmentEnum Environment { get; set; } = EnvironmentEnum.Development;
        public Database Database { get; set; } = Database.Public;
    }
}
