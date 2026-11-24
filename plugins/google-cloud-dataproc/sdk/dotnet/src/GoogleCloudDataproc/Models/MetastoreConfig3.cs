using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Metastore configuration.
/// </summary>
public record MetastoreConfig3
{
    /// <summary>
    /// Required. Resource name of an existing Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataprocMetastoreService")]
    public string? DataprocMetastoreService { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
