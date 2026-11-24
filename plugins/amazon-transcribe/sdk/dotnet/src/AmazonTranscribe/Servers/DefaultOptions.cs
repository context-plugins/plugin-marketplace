using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Servers;

public class DefaultOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(Production.BaseUrl, path, [TemplateParam.ForServer("region", Production.Region)]),
            () => new UrlTemplate(
                Environment2.BaseUrl,
                path,
                [TemplateParam.ForServer("region", Environment2.Region)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://transcribe.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://transcribe.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }
}
