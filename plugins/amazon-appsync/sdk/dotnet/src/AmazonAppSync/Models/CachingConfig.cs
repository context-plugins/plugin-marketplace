using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record CachingConfig
{
    /// <summary>
    /// The TTL in seconds for a resolver that has caching activated. Valid values are 1–3,600 seconds.
    /// </summary>
    [JsonPropertyName("ttl")]
    public required int Ttl { get; init; }

    /// <summary>
    /// The caching keys for a resolver that has caching activated. Valid values are entries from the $context.arguments, $context.source, and $context.identity maps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cachingKeys")]
    public IReadOnlyList<string>? CachingKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
