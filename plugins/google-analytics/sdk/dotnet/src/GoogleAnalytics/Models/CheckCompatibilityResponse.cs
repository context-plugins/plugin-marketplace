using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The compatibility response with the compatibility of each dimension &amp; metric.
/// </summary>
public record CheckCompatibilityResponse
{
    /// <summary>
    /// The compatibility of each metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricCompatibilities")]
    public IReadOnlyList<MetricCompatibility>? MetricCompatibilities { get; init; }

    /// <summary>
    /// The compatibility of each dimension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionCompatibilities")]
    public IReadOnlyList<DimensionCompatibility>? DimensionCompatibilities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
