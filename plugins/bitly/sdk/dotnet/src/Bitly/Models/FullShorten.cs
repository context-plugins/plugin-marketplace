using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Either long_url (for new bitlinks) or bitlink_id (for adding keywords to existing bitlinks) must be provided, but not both.
/// </summary>
public record FullShorten
{
    /// <summary>
    /// URL to be shortened. Required when creating new bitlinks. Cannot be used with bitlink_id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("long_url")]
    public string? LongUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; } = "bit.ly";

    /// <summary>
    /// Always include a specific group and custom domain in your shorten calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_guid")]
    public string? GroupGuid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deeplinks")]
    public IReadOnlyList<Deeplink>? Deeplinks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("force_new_link")]
    public bool? ForceNewLink { get; init; }

    /// <summary>
    /// Custom keyword for creating keyword overrides. If provided, creates an override at domain/keyword
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyword")]
    public string? Keyword { get; init; }

    /// <summary>
    /// Existing bitlink ID to add a keyword override to. Format: domain/hash. Cannot be used with long_url
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitlink_id")]
    public string? BitlinkId { get; init; }

    /// <summary>
    /// Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time is 5 minutes from now and maximum is 1 year.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_at")]
    public string? ExpirationAt { get; init; }

    /// <summary>
    /// dynamic routing rules for this bitlink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dynamic_routing")]
    public IReadOnlyList<DynamicRoutingRule>? DynamicRouting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
