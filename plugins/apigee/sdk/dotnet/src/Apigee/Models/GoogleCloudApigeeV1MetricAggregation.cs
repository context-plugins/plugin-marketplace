using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The optionally aggregated metric to query with its ordering.
/// </summary>
public record GoogleCloudApigeeV1MetricAggregation
{
    /// <summary>
    /// Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public Order? Order { get; init; }

    /// <summary>
    /// Aggregation function associated with the metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregation")]
    public Aggregation? Aggregation { get; init; }

    /// <summary>
    /// Name of the metric
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
