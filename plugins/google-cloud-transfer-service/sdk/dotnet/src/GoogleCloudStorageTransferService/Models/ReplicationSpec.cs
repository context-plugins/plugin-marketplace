using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Specifies the configuration for a cross-bucket replication job. Cross-bucket replication copies new or updated objects from a source Cloud Storage bucket to a destination Cloud Storage bucket. Existing objects in the source bucket are not copied by a new cross-bucket replication job.
/// </summary>
public record ReplicationSpec
{
    /// <summary>
    /// Object conditions that determine which objects are transferred. For replication jobs, only <c>include_prefixes</c> and <c>exclude_prefixes</c> are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objectConditions")]
    public ObjectConditions1? ObjectConditions { get; init; }

    /// <summary>
    /// The Cloud Storage bucket to which to replicate objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsDataSink")]
    public GcsData3? GcsDataSink { get; init; }

    /// <summary>
    /// Specifies the metadata options to be applied during replication. Delete options are not supported. If a delete option is specified, the request fails with an INVALID_ARGUMENT error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferOptions")]
    public TransferOptions1? TransferOptions { get; init; }

    /// <summary>
    /// The Cloud Storage bucket from which to replicate objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsDataSource")]
    public GcsData4? GcsDataSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
