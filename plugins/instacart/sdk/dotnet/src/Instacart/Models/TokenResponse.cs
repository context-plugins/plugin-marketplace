using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Models.Enums;

namespace Instacart.Models;

public record TokenResponse
{
    /// <summary>
    /// The Bearer token to use for authenticating API requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("access_token")]
    public string? AccessToken { get; init; }

    /// <summary>
    /// The type of token issued.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token_type")]
    public TokenType? TokenType { get; init; }

    /// <summary>
    /// The number of seconds until the token expires. Typically 86400 seconds (24 hours).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_in")]
    public int? ExpiresIn { get; init; }

    /// <summary>
    /// The scope of access granted by the token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public string? Scope { get; init; }

    /// <summary>
    /// Unix timestamp indicating when the token was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public int? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
