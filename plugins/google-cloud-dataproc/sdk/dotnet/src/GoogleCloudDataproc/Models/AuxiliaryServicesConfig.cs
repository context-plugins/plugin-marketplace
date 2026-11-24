using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Auxiliary services configuration for a Cluster.
/// </summary>
public record AuxiliaryServicesConfig
{
    /// <summary>
    /// Optional. The Spark History Server configuration for the workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkHistoryServerConfig")]
    public SparkHistoryServerConfig1? SparkHistoryServerConfig { get; init; }

    /// <summary>
    /// Optional. The Hive Metastore configuration for this workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metastoreConfig")]
    public MetastoreConfig1? MetastoreConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
