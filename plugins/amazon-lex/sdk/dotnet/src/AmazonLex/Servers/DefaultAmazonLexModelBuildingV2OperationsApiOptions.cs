using AmazonLex.Core.Models;

namespace AmazonLex.Servers;

public class DefaultAmazonLexModelBuildingV2OperationsApiOptions
{
    public ProductionOptions Production { get; set; } = new();
    public Environment2Options Environment2 { get; set; } = new();
    public Environment3Options Environment3 { get; set; } = new();
    public Environment4Options Environment4 { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(
            () => new UrlTemplate(Production.BaseUrl, path, [TemplateParam.ForServer("region", Production.Region)]),
            () => new UrlTemplate(Environment2.BaseUrl, path, [TemplateParam.ForServer("region", Environment2.Region)]),
            () => new UrlTemplate(Environment3.BaseUrl, path, [TemplateParam.ForServer("region", Environment3.Region)]),
            () => new UrlTemplate(
                Environment4.BaseUrl,
                path,
                [TemplateParam.ForServer("region", Environment4.Region)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://models.lex.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }

    public class Environment2Options
    {
        public string BaseUrl { get; set; } = "https://runtime.lex.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }

    public class Environment3Options
    {
        public string BaseUrl { get; set; } = "https://models.lex.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }

    public class Environment4Options
    {
        public string BaseUrl { get; set; } = "https://models.lex.{region}.amazonaws.com";
        public string Region { get; set; } = "us-east-1";
    }
}
