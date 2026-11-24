namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the FetchBankTransfer operation.
/// </summary>
public sealed record FetchBankTransferRequest
{
    /// <summary>
    /// Payment ID (pay_*).
    /// </summary>
    public required string Id { get; init; }
}
