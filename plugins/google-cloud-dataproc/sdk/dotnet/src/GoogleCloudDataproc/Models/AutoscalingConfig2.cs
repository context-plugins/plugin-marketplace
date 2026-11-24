using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Represents the autoscaling configuration of a metastore service.
/// </summary>
public record AutoscalingConfig2
{
    /// <summary>
    /// Output only. The scaling factor of a service with autoscaling enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoscalingFactor")]
    public double? AutoscalingFactor { get; init; }

    /// <summary>
    /// Optional. Whether or not autoscaling is enabled for this service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoscalingEnabled")]
    public bool? AutoscalingEnabled { get; init; }

    /// <summary>
    /// Optional. The LimitConfig of the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitConfig")]
    public LimitConfig2? LimitConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
