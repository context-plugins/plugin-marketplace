using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the <c>runReport</c> request should be the same values as in your <c>runReport</c> request.
/// </summary>
public record CheckCompatibilityRequest
{
    /// <summary>
    /// The metrics in this report. <c>metrics</c> should be the same value as in your <c>runReport</c> request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<Metric>? Metrics { get; init; }

    /// <summary>
    /// The filter clause of metrics. <c>metricFilter</c> should be the same value as in your <c>runReport</c> request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricFilter")]
    public FilterExpression9? MetricFilter { get; init; }

    /// <summary>
    /// Filters the dimensions and metrics in the response to just this compatibility. Commonly used as <c>”compatibilityFilter”: “COMPATIBLE”</c> to only return compatible dimensions &amp; metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compatibilityFilter")]
    public CompatibilityFilter? CompatibilityFilter { get; init; }

    /// <summary>
    /// The dimensions in this report. <c>dimensions</c> should be the same value as in your <c>runReport</c> request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<Dimension>? Dimensions { get; init; }

    /// <summary>
    /// The filter clause of dimensions. <c>dimensionFilter</c> should be the same value as in your <c>runReport</c> request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionFilter")]
    public FilterExpression10? DimensionFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
