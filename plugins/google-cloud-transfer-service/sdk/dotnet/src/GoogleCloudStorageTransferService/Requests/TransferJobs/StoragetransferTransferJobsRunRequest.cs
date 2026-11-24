using GoogleCloudStorageTransferService.Models;

namespace GoogleCloudStorageTransferService.Requests.TransferJobs;

/// <summary>
/// The inputs of the StoragetransferTransferJobsRun operation.
/// </summary>
public sealed record StoragetransferTransferJobsRunRequest
{
    /// <summary>
    /// Resource name segment (transferJobsId).
    /// </summary>
    public required string TransferJobsId { get; init; }

    public required RunTransferJobRequest Body { get; init; }
}
