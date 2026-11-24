using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The compatibility for a single metric.
/// </summary>
public record MetricCompatibility
{
    /// <summary>
    /// The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compatibility")]
    public Compatibility? Compatibility { get; init; }

    /// <summary>
    /// The metric metadata contains the API name for this compatibility information. The metric metadata also contains other helpful information like the UI name and description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricMetadata")]
    public MetricMetadata1? MetricMetadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
