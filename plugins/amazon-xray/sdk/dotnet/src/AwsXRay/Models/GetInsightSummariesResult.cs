using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetInsightSummariesResult
{
    /// <summary>
    /// The summary of each insight within the group matching the provided filters. The summary contains the InsightID, start and end time, the root cause service, the root cause and client impact statistics, the top anomalous services, and the status of the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightSummaries")]
    public IReadOnlyList<InsightSummary>? InsightSummaries { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
