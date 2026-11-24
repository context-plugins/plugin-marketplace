using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present.
/// </summary>
public record GkeNodePoolAutoscalingConfig2
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
