namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the FetchTransfer operation.
/// </summary>
public sealed record FetchTransferRequest
{
    /// <summary>
    /// Transfer ID (trf_*).
    /// </summary>
    public required string Id { get; init; }
}
