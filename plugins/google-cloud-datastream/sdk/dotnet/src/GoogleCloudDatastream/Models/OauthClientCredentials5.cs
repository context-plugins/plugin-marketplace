using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Credentials for authenticating with the ServiceNow API.
/// </summary>
public record OauthClientCredentials5
{
    /// <summary>
    /// Required. Client secret for OAuth Client Credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientSecret")]
    public Secret1? ClientSecret { get; init; }

    /// <summary>
    /// Required. Client ID for OAuth Client Credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientId")]
    public string? ClientId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
