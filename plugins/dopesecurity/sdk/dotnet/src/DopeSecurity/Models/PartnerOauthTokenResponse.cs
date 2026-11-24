using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record PartnerOauthTokenResponse
{
    /// <summary>
    /// The new access token.
    /// </summary>
    [JsonPropertyName("access_token")]
    public required string AccessToken { get; init; }

    /// <summary>
    /// The type of token returned.
    /// </summary>
    [JsonPropertyName("token_type")]
    public string TokenType { get; } = "bearer";

    /// <summary>
    /// The expiration time of the new access token in seconds.
    /// </summary>
    [JsonPropertyName("expires_in")]
    public required double ExpiresIn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
