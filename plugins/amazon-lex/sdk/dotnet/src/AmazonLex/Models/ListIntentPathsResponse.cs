using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListIntentPathsResponse
{
    /// <summary>
    /// A list of objects, each of which contains information about a node in the intent path for which you requested metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodeSummaries")]
    public IReadOnlyList<AnalyticsIntentNodeSummary>? NodeSummaries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
