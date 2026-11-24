using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Basic algorithm for autoscaling.
/// </summary>
public record BasicAutoscalingAlgorithm
{
    /// <summary>
    /// Optional. YARN autoscaling configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yarnConfig")]
    public BasicYarnAutoscalingConfig2? YarnConfig { get; init; }

    /// <summary>
    /// Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cooldownPeriod")]
    public string? CooldownPeriod { get; init; }

    /// <summary>
    /// Optional. Spark Standalone autoscaling configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkStandaloneConfig")]
    public SparkStandaloneAutoscalingConfig2? SparkStandaloneConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
