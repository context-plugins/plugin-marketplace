namespace GoogleCloudStorageTransferService.Requests.TransferJobs;

/// <summary>
/// The inputs of the StoragetransferTransferJobsGet operation.
/// </summary>
public sealed record StoragetransferTransferJobsGetRequest
{
    /// <summary>
    /// Resource name segment (transferJobsId).
    /// </summary>
    public required string TransferJobsId { get; init; }

    /// <summary>
    /// Required. The ID of the Google Cloud project that owns the job.
    /// </summary>
    public required string ProjectId { get; init; }
}
