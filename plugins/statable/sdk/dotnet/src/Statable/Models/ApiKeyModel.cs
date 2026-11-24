using System;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

/// <summary>
/// The non-secret view of a key. The raw token is never stored and never appears here — only in the create/rotate responses.
/// </summary>
public record ApiKeyModel
{
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Non-secret fragment of the token, to identify the key in a list.
    /// </summary>
    [JsonPropertyName("prefix")]
    public required string Prefix { get; init; }

    /// <summary>
    /// The site the key is locked to; null = all of the owner's sites.
    /// </summary>
    [JsonPropertyName("website_id")]
    public required long? WebsiteId { get; init; }

    /// <summary>
    /// Comma-separated scope set, in catalog order.
    /// </summary>
    [JsonPropertyName("scopes")]
    public required string Scopes { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_ip")]
    public string? CreatedIp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_used_at")]
    public DateTimeOffset? LastUsedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_used_ip")]
    public string? LastUsedIp { get; init; }

    /// <summary>
    /// null = never expires. Only dashboard-created keys can be non-expiring; keys created over the API always carry an expiry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
