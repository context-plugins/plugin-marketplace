using DevCycle.Core.Models;

namespace DevCycle.Servers;

public class DefaultDevCycleBucketingBucketingApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://bucketing-api.devcycle.com/";
    }
}
