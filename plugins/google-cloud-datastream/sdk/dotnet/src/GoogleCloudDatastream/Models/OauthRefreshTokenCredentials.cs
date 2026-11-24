using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// OAuth Refresh Token Credentials.
/// </summary>
public record OauthRefreshTokenCredentials
{
    /// <summary>
    /// Required. Specifies the OAuth Client Credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthClientCredentials")]
    public OauthClientCredentials1? OauthClientCredentials { get; init; }

    /// <summary>
    /// Required. Specifies the OAuth Refresh Token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refreshToken")]
    public Secret3? RefreshToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
