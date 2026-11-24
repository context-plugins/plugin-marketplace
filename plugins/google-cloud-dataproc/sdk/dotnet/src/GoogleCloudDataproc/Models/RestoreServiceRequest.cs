using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Request message for DataprocMetastore.RestoreService.
/// </summary>
public record RestoreServiceRequest
{
    /// <summary>
    /// Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Optional. The type of restore. If unspecified, defaults to METADATA_ONLY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restoreType")]
    public RestoreType? RestoreType { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage URI specifying the location of the backup artifacts, namely - backup avro files under "avro/", backup_metastore.json and service.json, in the following form:gs://. Mutually exclusive with backup, and exactly one of the two must be set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backupLocation")]
    public string? BackupLocation { get; init; }

    /// <summary>
    /// Optional. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. Mutually exclusive with backup_location, and exactly one of the two must be set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backup")]
    public string? Backup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
