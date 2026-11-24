using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Request passed to UpdateTransferJob.
/// </summary>
public record UpdateTransferJobRequest
{
    /// <summary>
    /// The field mask of the fields in <c>transferJob</c> that are to be updated in this request. Fields in <c>transferJob</c> that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the <c>transfer_spec</c> of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTransferJobFieldMask")]
    public string? UpdateTransferJobFieldMask { get; init; }

    /// <summary>
    /// Required. The job to update. <c>transferJob</c> is expected to specify one or more of five fields: description, transfer_spec, notification_config, logging_config, and status. An <c>UpdateTransferJobRequest</c> that specifies other fields are rejected with the error INVALID_ARGUMENT. Updating a job status to DELETED requires <c>storagetransfer.jobs.delete</c> permission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferJob")]
    public TransferJob1? TransferJob { get; init; }

    /// <summary>
    /// Required. The ID of the Google Cloud project that owns the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
