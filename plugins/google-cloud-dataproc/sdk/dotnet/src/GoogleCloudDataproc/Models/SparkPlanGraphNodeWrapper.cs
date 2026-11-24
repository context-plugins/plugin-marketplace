using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Wrapper user to represent either a node or a cluster.
/// </summary>
public record SparkPlanGraphNodeWrapper
{
    /// <summary>
    /// Represents a node in the spark plan tree.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("node")]
    public SparkPlanGraphNode? Node { get; init; }

    /// <summary>
    /// Represents a tree of spark plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cluster")]
    public SparkPlanGraphCluster? Cluster { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
