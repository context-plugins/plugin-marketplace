using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

public record InsertMetricByMetricDefinitionRequestDto
{
    /// <summary>
    /// The title of the metric value source. The title of the metric source being inserted into will be updated to match this value.If this property is not provided, the existing value on the metric source will not be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The metric value to send.
    /// </summary>
    [JsonPropertyName("value")]
    public required double Value { get; init; }

    /// <summary>
    /// The ADF annotation attached to a metric value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotation")]
    public string? Annotation { get; init; }

    /// <summary>
    /// The time the metric value was collected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    /// <summary>
    /// The url of the metric value source. The url of the metric source being inserted into will be updated to match this value. If this property is not provided, the existing value on the metric source will not be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The metric definition ID corresponding to the metric source to send the value into.
    /// </summary>
    [JsonPropertyName("metricDefinitionId")]
    public required string MetricDefinitionId { get; init; }

    /// <summary>
    /// The component ID corresponding to the metric source to send the value into.
    /// </summary>
    [JsonPropertyName("componentId")]
    public required string ComponentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
