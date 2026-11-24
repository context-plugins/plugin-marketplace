using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Request message for DataprocMetastore.QueryMetadata.
/// </summary>
public record QueryMetadataRequest
{
    /// <summary>
    /// Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public string? Query { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
