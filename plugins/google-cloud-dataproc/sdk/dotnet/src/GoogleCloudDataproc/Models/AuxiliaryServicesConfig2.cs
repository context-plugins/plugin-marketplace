using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Configuration of auxiliary services used by this cluster.
/// </summary>
public record AuxiliaryServicesConfig2
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
