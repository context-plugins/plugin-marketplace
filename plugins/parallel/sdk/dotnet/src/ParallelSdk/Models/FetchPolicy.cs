using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Policy for live fetching web results.
/// </summary>
public record FetchPolicy
{
    /// <summary>
    /// Maximum age of cached content in seconds to trigger a live fetch. Minimum value 600 seconds (10 minutes).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_age_seconds")]
    public MaxAgeSeconds? MaxAgeSeconds { get; init; }

    /// <summary>
    /// Timeout in seconds for fetching live content if unavailable in cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout_seconds")]
    public TimeoutSeconds? TimeoutSeconds { get; init; }

    /// <summary>
    /// If false, fallback to cached content older than max-age if live fetch fails or times out. If true, returns an error instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disable_cache_fallback")]
    public bool? DisableCacheFallback { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
