using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record OauthRevokeRequest
{
    /// <summary>
    /// The access or refresh token to revoke.
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// Optional hint to help the server process the token faster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token_type_hint")]
    public TokenTypeHint1? TokenTypeHint { get; init; }

    /// <summary>
    /// OAuth application client ID (<c>uid</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_id")]
    public string? ClientId { get; init; }

    /// <summary>
    /// Required for confidential clients.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_secret")]
    public string? ClientSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
