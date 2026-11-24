using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record MetricDoiTDataHubApi
{
    /// <summary>
    /// The value of the metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// The type of the metric. If you choose "cost" or "usage", it will map to the basic "Cost" or "Usage" metric in Cloud Analytics reports. You can also use this field to define custom metric types, such as "working_hours", "ride", etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
