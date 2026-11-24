using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record BitlinkUpdateBody
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deeplinks")]
    public IReadOnlyList<DeeplinkRule>? Deeplinks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("long_url")]
    public string? LongUrl { get; init; }

    /// <summary>
    /// Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time is 5 minutes from now and maximum is 1 year.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_at")]
    public string? ExpirationAt { get; init; }

    /// <summary>
    /// Dynamic routing rules for this bitlink. Providing this field replaces all existing rules. Send an empty array to clear all rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dynamic_routing")]
    public IReadOnlyList<DynamicRoutingRule>? DynamicRouting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
