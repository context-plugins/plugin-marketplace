using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Represents the autoscaling limit configuration of a metastore service.
/// </summary>
public record LimitConfig
{
    /// <summary>
    /// Optional. The highest scaling factor that the service should be autoscaled to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxScalingFactor")]
    public double? MaxScalingFactor { get; init; }

    /// <summary>
    /// Optional. The lowest scaling factor that the service should be autoscaled to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minScalingFactor")]
    public double? MinScalingFactor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
