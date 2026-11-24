using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetTraceSummariesResult
{
    /// <summary>
    /// Trace IDs and annotations for traces that were found in the specified time frame.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TraceSummaries")]
    public IReadOnlyList<TraceSummary>? TraceSummaries { get; init; }

    /// <summary>
    /// The start time of this page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ApproximateTime")]
    public DateTimeOffset? ApproximateTime { get; init; }

    /// <summary>
    /// The total number of traces processed, including traces that did not match the specified filter expression.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TracesProcessedCount")]
    public int? TracesProcessedCount { get; init; }

    /// <summary>
    /// If the requested time frame contained more than one page of results, you can use this token to retrieve the next page. The first page contains the most recent results, closest to the end of the time frame.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
