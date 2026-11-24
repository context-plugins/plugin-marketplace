using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ListAnomaliesForInsightResponse
{
    /// <summary>
    /// An array of ProactiveAnomalySummary objects that represent the requested anomalies
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProactiveAnomalies")]
    public IReadOnlyList<ProactiveAnomalySummary>? ProactiveAnomalies { get; init; }

    /// <summary>
    /// An array of ReactiveAnomalySummary objects that represent the requested anomalies
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReactiveAnomalies")]
    public IReadOnlyList<ReactiveAnomalySummary>? ReactiveAnomalies { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
