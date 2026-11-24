using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Basic autoscaling configurations for Spark Standalone.
/// </summary>
public record SparkStandaloneAutoscalingConfig
{
    /// <summary>
    /// Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scaleDownMinWorkerFraction")]
    public double? ScaleDownMinWorkerFraction { get; init; }

    /// <summary>
    /// Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scaleUpFactor")]
    public double? ScaleUpFactor { get; init; }

    /// <summary>
    /// Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gracefulDecommissionTimeout")]
    public string? GracefulDecommissionTimeout { get; init; }

    /// <summary>
    /// Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scaleDownFactor")]
    public double? ScaleDownFactor { get; init; }

    /// <summary>
    /// Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scaleUpMinWorkerFraction")]
    public double? ScaleUpMinWorkerFraction { get; init; }

    /// <summary>
    /// Optional. Remove only idle workers when scaling down cluster
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeOnlyIdleWorkers")]
    public bool? RemoveOnlyIdleWorkers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
