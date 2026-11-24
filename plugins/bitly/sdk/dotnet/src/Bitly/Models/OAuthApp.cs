using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record OAuthApp
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("client_id")]
    public required string ClientId { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("link")]
    public required string Link { get; init; }

    [JsonPropertyName("require_oauth_pkce")]
    public required bool RequireOauthPkce { get; init; }

    /// <summary>
    /// True for Bitly's own first-party apps (dashboard, mobile apps), as opposed to third-party integrations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internal_app")]
    public bool? InternalApp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
