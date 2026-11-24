namespace GoogleCloudStorageTransferService.Requests.TransferOperations;

/// <summary>
/// The inputs of the StoragetransferTransferOperationsPause operation.
/// </summary>
public sealed record StoragetransferTransferOperationsPauseRequest
{
    /// <summary>
    /// Resource name segment (transferOperationsId).
    /// </summary>
    public required string TransferOperationsId { get; init; }

    public required object Body { get; init; }
}
