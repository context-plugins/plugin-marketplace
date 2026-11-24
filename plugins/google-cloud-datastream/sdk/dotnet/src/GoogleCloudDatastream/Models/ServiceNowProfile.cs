using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a ServiceNow source.
/// </summary>
public record ServiceNowProfile
{
    /// <summary>
    /// User-password authentication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userPasswordCredentials")]
    public UserPasswordCredentials2? UserPasswordCredentials { get; init; }

    /// <summary>
    /// Required. The instance of the ServiceNow account. This is the `` part of the URL `https://.service-now.com`.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instance")]
    public string? Instance { get; init; }

    /// <summary>
    /// Credentials for authenticating with the ServiceNow API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthClientCredentials")]
    public OauthClientCredentials5? OauthClientCredentials { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
