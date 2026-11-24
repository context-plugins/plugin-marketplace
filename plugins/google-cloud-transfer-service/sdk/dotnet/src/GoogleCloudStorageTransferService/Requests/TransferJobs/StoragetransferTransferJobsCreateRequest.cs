using GoogleCloudStorageTransferService.Models;

namespace GoogleCloudStorageTransferService.Requests.TransferJobs;

/// <summary>
/// The inputs of the StoragetransferTransferJobsCreate operation.
/// </summary>
public sealed record StoragetransferTransferJobsCreateRequest
{
    public required TransferJob Body { get; init; }
}
