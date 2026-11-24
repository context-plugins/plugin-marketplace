using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Contains information like metrics, dimenstions etc of the AsyncQuery.
/// </summary>
public record GoogleCloudApigeeV1QueryMetadata1
{
    /// <summary>
    /// Dimensions of the AsyncQuery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<string>? Dimensions { get; init; }

    /// <summary>
    /// End timestamp of the query range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTimestamp")]
    public string? EndTimestamp { get; init; }

    /// <summary>
    /// Query GroupBy time unit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeUnit")]
    public string? TimeUnit { get; init; }

    /// <summary>
    /// Start timestamp of the query range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimestamp")]
    public string? StartTimestamp { get; init; }

    /// <summary>
    /// Output format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputFormat")]
    public string? OutputFormat { get; init; }

    /// <summary>
    /// Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<string>? Metrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
