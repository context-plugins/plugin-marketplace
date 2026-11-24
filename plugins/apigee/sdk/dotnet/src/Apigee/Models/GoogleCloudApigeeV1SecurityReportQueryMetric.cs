using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Metric of the Query
/// </summary>
public record GoogleCloudApigeeV1SecurityReportQueryMetric
{
    /// <summary>
    /// Aggregation function: avg, min, max, or sum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregationFunction")]
    public string? AggregationFunction { get; init; }

    /// <summary>
    /// Alias for the metric. Alias will be used to replace metric name in query results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alias")]
    public string? Alias { get; init; }

    /// <summary>
    /// Operand value should be provided when operator is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    /// <summary>
    /// Required. Metric name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// One of <c>+</c>, <c>-</c>, <c>/</c>, <c>%</c>, <c>*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public string? Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
