using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// The metric value that was sent into the metric source.
/// </summary>
public record InsertMetricResponseDtoError
{
    /// <summary>
    /// The ID of the metric source.
    /// </summary>
    [JsonPropertyName("metricSourceId")]
    public required string MetricSourceId { get; init; }

    /// <summary>
    /// The value of the metric.
    /// </summary>
    [JsonPropertyName("value")]
    public required double Value { get; init; }

    /// <summary>
    /// The time the metric value was collected.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// The metric value annotation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotation")]
    public string? Annotation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
