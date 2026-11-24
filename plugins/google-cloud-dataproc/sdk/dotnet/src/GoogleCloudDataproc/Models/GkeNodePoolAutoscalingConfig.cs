using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
/// </summary>
public record GkeNodePoolAutoscalingConfig
{
    /// <summary>
    /// The minimum number of nodes in the node pool. Must be &gt;= 0 and &lt;= max_node_count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minNodeCount")]
    public int? MinNodeCount { get; init; }

    /// <summary>
    /// The maximum number of nodes in the node pool. Must be &gt;= min_node_count, and must be &gt; 0. Note: Quota must be sufficient to scale up the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxNodeCount")]
    public int? MaxNodeCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
