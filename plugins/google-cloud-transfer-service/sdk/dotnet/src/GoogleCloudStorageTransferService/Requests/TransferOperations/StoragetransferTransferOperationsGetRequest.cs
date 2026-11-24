namespace GoogleCloudStorageTransferService.Requests.TransferOperations;

/// <summary>
/// The inputs of the StoragetransferTransferOperationsGet operation.
/// </summary>
public sealed record StoragetransferTransferOperationsGetRequest
{
    /// <summary>
    /// Resource name segment (transferOperationsId).
    /// </summary>
    public required string TransferOperationsId { get; init; }
}
