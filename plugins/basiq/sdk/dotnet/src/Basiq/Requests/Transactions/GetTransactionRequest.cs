namespace Basiq.Requests.Transactions;

/// <summary>
/// The inputs of the GetTransaction operation.
/// </summary>
public sealed record GetTransactionRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// The identifier of the transaction.
    /// </summary>
    public required string TransactionId { get; init; }
}
