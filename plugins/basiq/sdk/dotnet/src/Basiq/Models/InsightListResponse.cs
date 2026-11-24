using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record InsightListResponse
{
    /// <summary>
    /// Response type indicator
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "list";

    /// <summary>
    /// Total number of insights available
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    /// <summary>
    /// Array of insight objects
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<Insight> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links4InsightsApi Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
