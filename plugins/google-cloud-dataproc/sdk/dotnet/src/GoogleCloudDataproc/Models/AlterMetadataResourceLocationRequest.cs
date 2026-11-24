using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Request message for DataprocMetastore.AlterMetadataResourceLocation.
/// </summary>
public record AlterMetadataResourceLocationRequest
{
    /// <summary>
    /// Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceName")]
    public string? ResourceName { get; init; }

    /// <summary>
    /// Required. The new location URI for the metadata resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationUri")]
    public string? LocationUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
