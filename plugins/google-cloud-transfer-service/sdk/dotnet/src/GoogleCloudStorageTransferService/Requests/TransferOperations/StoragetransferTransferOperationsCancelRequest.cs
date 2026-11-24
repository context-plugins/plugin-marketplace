namespace GoogleCloudStorageTransferService.Requests.TransferOperations;

/// <summary>
/// The inputs of the StoragetransferTransferOperationsCancel operation.
/// </summary>
public sealed record StoragetransferTransferOperationsCancelRequest
{
    /// <summary>
    /// Resource name segment (transferOperationsId).
    /// </summary>
    public required string TransferOperationsId { get; init; }

    public required object Body { get; init; }
}
