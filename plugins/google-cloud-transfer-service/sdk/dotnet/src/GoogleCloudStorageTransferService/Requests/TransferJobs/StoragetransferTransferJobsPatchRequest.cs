using GoogleCloudStorageTransferService.Models;

namespace GoogleCloudStorageTransferService.Requests.TransferJobs;

/// <summary>
/// The inputs of the StoragetransferTransferJobsPatch operation.
/// </summary>
public sealed record StoragetransferTransferJobsPatchRequest
{
    /// <summary>
    /// Resource name segment (transferJobsId).
    /// </summary>
    public required string TransferJobsId { get; init; }

    public required UpdateTransferJobRequest Body { get; init; }
}
