using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record UsageResponse
{
    [JsonPropertyName("data_calls")]
    public required UsageCounter DataCalls { get; init; }

    [JsonPropertyName("keyword_alerts")]
    public required UsageCounter KeywordAlerts { get; init; }

    /// <summary>
    /// Calendar month the usage counters cover (UTC, format <c>YYYY-MM</c>).
    /// </summary>
    [JsonPropertyName("period")]
    public required string Period { get; init; }

    [JsonPropertyName("searches")]
    public required UsageCounter Searches { get; init; }

    [JsonPropertyName("semantic_searches")]
    public required UsageCounter SemanticSearches { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
