using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a Salesforce Marketing Cloud source.
/// </summary>
public record SalesforceMarketingCloudProfile
{
    /// <summary>
    /// Required. Input only. Credentials for authenticating with the Salesforce Marketing Cloud API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthClientCredentials")]
    public OauthClientCredentials2? OauthClientCredentials { get; init; }

    /// <summary>
    /// Required. Subdomain for the Salesforce Marketing Cloud connection. Example: if your specific endpoint is <c>https://{your-specific-subdomain}.rest.marketingcloudapis.com/</c>, the subdomain is <c>{your-specific-subdomain}</c>. Must be 1-63 characters, start and end with an alphanumeric character, and contain only lowercase letters, numbers, and hyphens (-).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subdomain")]
    public string? Subdomain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
