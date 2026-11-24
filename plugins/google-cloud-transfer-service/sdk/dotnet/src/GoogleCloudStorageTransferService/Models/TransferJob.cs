using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Models.Enums;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// This resource represents the configuration of a transfer job that runs periodically.
/// </summary>
public record TransferJob
{
    /// <summary>
    /// Notification configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notificationConfig")]
    public NotificationConfig2? NotificationConfig { get; init; }

    /// <summary>
    /// Transfer specification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferSpec")]
    public TransferSpec1? TransferSpec { get; init; }

    /// <summary>
    /// Output only. The time that the transfer job was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationTime")]
    public string? CreationTime { get; init; }

    /// <summary>
    /// Logging configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfig")]
    public LoggingConfig2? LoggingConfig { get; init; }

    /// <summary>
    /// Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventStream")]
    public EventStream2? EventStream { get; init; }

    /// <summary>
    /// Status of the job. This value MUST be specified for <c>CreateTransferJobRequests</c>. <b>Note:</b> The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status3? Status { get; init; }

    /// <summary>
    /// Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule1? Schedule { get; init; }

    /// <summary>
    /// Optional. The user-managed service account to which to delegate service agent permissions. You can grant Cloud Storage bucket permissions to this service account instead of to the Transfer Service service agent. Either the service account email (<c>SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com</c>) or the unique ID (<c>123456789012345678901</c>) are accepted. See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestOperationName")]
    public string? LatestOperationName { get; init; }

    /// <summary>
    /// Output only. The time that the transfer job was deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletionTime")]
    public string? DeletionTime { get; init; }

    /// <summary>
    /// A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with <c>"transferJobs/"</c> prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with <c>transferJobs/OPI</c> specifically. For all other transfer types, this name must not start with <c>transferJobs/OPI</c>. Non-PosixFilesystem example: <c>"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"</c> PosixFilesystem example: <c>"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"</c> Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The ID of the Google Cloud project that owns the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    /// <summary>
    /// Replication specification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replicationSpec")]
    public ReplicationSpec1? ReplicationSpec { get; init; }

    /// <summary>
    /// Output only. The time that the transfer job was last modified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModificationTime")]
    public string? LastModificationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
