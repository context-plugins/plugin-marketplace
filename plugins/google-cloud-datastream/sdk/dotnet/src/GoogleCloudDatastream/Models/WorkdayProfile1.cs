using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. Profile for connecting to a Workday source.
/// </summary>
public record WorkdayProfile1
{
    /// <summary>
    /// Required. Tenant for the Workday connection (e.g., <c>google12</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tenant")]
    public string? Tenant { get; init; }

    /// <summary>
    /// Required. Credentials for authenticating with the Workday API. OAuth Refresh Token credentials for authenticating with the Workday API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthRefreshTokenCredentials")]
    public OauthRefreshTokenCredentials2? OauthRefreshTokenCredentials { get; init; }

    /// <summary>
    /// Required. Host for the Workday connection. Must be a valid hostname (e.g., <c>wd3-impl-services1.workday.com</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
