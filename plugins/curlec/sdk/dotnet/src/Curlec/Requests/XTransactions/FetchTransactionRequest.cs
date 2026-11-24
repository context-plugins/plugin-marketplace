namespace Curlec.Requests.XTransactions;

/// <summary>
/// The inputs of the FetchTransaction operation.
/// </summary>
public sealed record FetchTransactionRequest
{
    /// <summary>
    /// Transaction ID (txn_*)
    /// </summary>
    public required string TransactionId { get; init; }
}
