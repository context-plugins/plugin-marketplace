using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A metric actively restricted in creating the report.
/// </summary>
public record ActiveMetricRestriction
{
    /// <summary>
    /// The reason for this metric's restriction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restrictedMetricTypes")]
    public IReadOnlyList<RestrictedMetricType>? RestrictedMetricTypes { get; init; }

    /// <summary>
    /// The name of the restricted metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricName")]
    public string? MetricName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
