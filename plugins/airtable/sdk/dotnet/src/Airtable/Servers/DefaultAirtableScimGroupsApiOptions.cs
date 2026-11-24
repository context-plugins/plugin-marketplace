using Airtable.Core.Models;

namespace Airtable.Servers;

public class DefaultAirtableScimGroupsApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(Production.BaseUrl, path, []));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://airtable.com/scim/v2";
    }
}
