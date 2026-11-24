using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(
            Production.BaseUrl,
            path,
            [TemplateParam.ForServer("region", Production.Region)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://directconnect.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }
}
