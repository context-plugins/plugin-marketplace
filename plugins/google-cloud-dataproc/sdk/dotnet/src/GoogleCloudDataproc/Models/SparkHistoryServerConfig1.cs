using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The Spark History Server configuration for the workload.
/// </summary>
public record SparkHistoryServerConfig1
{
    /// <summary>
    /// Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataprocCluster")]
    public string? DataprocCluster { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
