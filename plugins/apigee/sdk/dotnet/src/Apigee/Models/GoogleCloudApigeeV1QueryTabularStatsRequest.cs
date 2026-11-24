using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request payload representing the query to be run for fetching security statistics as rows.
/// </summary>
public record GoogleCloudApigeeV1QueryTabularStatsRequest
{
    /// <summary>
    /// Required. List of dimension names to group the aggregations by.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<string>? Dimensions { get; init; }

    /// <summary>
    /// Identifies a sequence of rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Page size represents the number of rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSize")]
    public int? PageSize { get; init; }

    /// <summary>
    /// Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public string? Filter { get; init; }

    /// <summary>
    /// Time range for the stats.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeRange")]
    public GoogleTypeInterval3? TimeRange { get; init; }

    /// <summary>
    /// Required. List of metrics and their aggregations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleCloudApigeeV1MetricAggregation>? Metrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
