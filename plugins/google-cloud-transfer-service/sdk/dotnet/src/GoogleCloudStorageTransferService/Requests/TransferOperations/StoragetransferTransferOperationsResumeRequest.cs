namespace GoogleCloudStorageTransferService.Requests.TransferOperations;

/// <summary>
/// The inputs of the StoragetransferTransferOperationsResume operation.
/// </summary>
public sealed record StoragetransferTransferOperationsResumeRequest
{
    /// <summary>
    /// Resource name segment (transferOperationsId).
    /// </summary>
    public required string TransferOperationsId { get; init; }

    public required object Body { get; init; }
}
