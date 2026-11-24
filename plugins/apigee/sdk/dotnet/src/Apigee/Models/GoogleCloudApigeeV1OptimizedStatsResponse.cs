using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates a response format for JavaScript Optimized Scenario.
/// </summary>
public record GoogleCloudApigeeV1OptimizedStatsResponse
{
    /// <summary>
    /// Metadata information about the query executed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metaData")]
    public GoogleCloudApigeeV1Metadata1? MetaData { get; init; }

    /// <summary>
    /// Boolean flag that indicates whether the results were truncated based on the limit parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultTruncated")]
    public bool? ResultTruncated { get; init; }

    /// <summary>
    /// List of time unit values. Time unit refers to an epoch timestamp value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeUnit")]
    public IReadOnlyList<string>? TimeUnit { get; init; }

    /// <summary>
    /// <c>stats</c> results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public GoogleCloudApigeeV1OptimizedStatsNode2? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
