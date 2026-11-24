using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Represents a backend metastore for the federation.
/// </summary>
public record BackendMetastore
{
    /// <summary>
    /// The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The type of the backend metastore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metastoreType")]
    public MetastoreType? MetastoreType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
