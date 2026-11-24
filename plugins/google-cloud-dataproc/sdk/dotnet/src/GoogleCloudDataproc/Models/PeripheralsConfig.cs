using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Auxiliary services configuration for a workload.
/// </summary>
public record PeripheralsConfig
{
    /// <summary>
    /// Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metastoreService")]
    public string? MetastoreService { get; init; }

    /// <summary>
    /// Optional. The Spark History Server configuration for the workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkHistoryServerConfig")]
    public SparkHistoryServerConfig1? SparkHistoryServerConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
