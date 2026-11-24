using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetSamplingStatisticSummariesResult
{
    /// <summary>
    /// Information about the number of requests instrumented for each sampling rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingStatisticSummaries")]
    public IReadOnlyList<SamplingStatisticSummary>? SamplingStatisticSummaries { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
